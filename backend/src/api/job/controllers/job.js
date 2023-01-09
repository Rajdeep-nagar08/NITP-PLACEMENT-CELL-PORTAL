'use strict';

/**
 *  job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::job.job", ({ strapi }) => ({

  /**
   * @description Add a job
   *
   * @route: POST /api/job/register
   *
   * @auth Authentication is needed for this. Only user with access >='coordinator' role should be granted permission
   *
   * @request
   * Requires request body is formdata containing the respective keys: value, and possibly a file in 'jaf' key
   * ie. ctx.request.body should be like: { 'company':1, 'job_title': 'Embedded Engineer', ..., 'jaf': <file> }
   *
   * @note To update JAF later, use the /api/job/upload-jaf
   *
   * Using this route ensures some pre-save checks
   * - the company has been approved
   * - approval_status MUST be set to "pending" initially
   */
  async register(ctx) {
    const data = ctx.request.body;

    if (!data) {
      return ctx.badRequest(null, [{ messages: [{ id: "Invalid parameters/Failed to parse" }] }]);
    }

    // Check if company has been approved
    const company = await strapi.db.query("api::company.company").findOne({ id: data.company });
    if (!company) {
      return ctx.badRequest(null, [{ messages: [{ id: "Company not found" }] }]);
    } else if (company.status !== "approved") {
      return ctx.badRequest(null, [{ messages: [{ id: "Company not approved" }] }]);
    }

    // Ensure, sender did not sender with "approval_status: approved"
    data["approval_status"] = "pending";

    // Ensure job.eligible_courses is existing
    data.eligible_courses = data.eligible_courses || "";

    // Ensure job.eligible_courses is a comma-separated string of numbers (representing course ids)
    data.eligible_courses.split(",").forEach(course => {
      if (course == null || isNaN(course)) {
        return ctx.badRequest(null, [{ messages: [{ id: "job.eligible_courses is not an array of numbers/Failed to parse" }] }]);
      }
    });

    // If job.jaf is provided, pass it too (this.create expects the key to be files.jaf)
    const { jaf } = ctx.request.files || {};
    if (jaf) {
      ctx.request.files = { "files.jaf": jaf };
    }

    // NOTE: this may not be required, since we already modified ctx.request.body.data above
    ctx.request.body = { data };

    return await this.create(ctx);
  },

  /**
   * @description Update/Upload JAF for a particular job
   *
   * @route PUT /api/job/upload-jaf?jobId=2
   *
   * @note coordinator can only upload the jaf once, irrespective of job's approval_status
   * @note admin can change the jaf any number of times
   *
   * @request_body: should be a FormData, with only one key: "jaf", eg. ctx.request.body = { jaf: File }
   *
   * @auth Requires coordinator, or admin role to access
   **/
  async upload_jaf(ctx) {
    const user = ctx.state.user;
    
    if (!user) {
      return ctx.unauthorized(null, [{ messages: [{ id: "Bearer Token not provided or invalid" }] }]);
    }
     
    const role = await strapi.query("plugin::users-permissions.user").findOne({
      where: { username: user.username },
      populate: ["role"],
    });

    if (!role) {
      return ctx.internalServerError(null, [{ messages: [{ id: `Failed to find user role: ${user.username}` }] }]);
    }

    const role_type = role.role.type;

    if (role_type != "coordinator" && role_type != "admin") {
      return ctx.unauthorized(null, [{ messages: [{ id: "You are not authorized to upload JAF" }] }]);
    }

    const query = ctx.request.query;

    if (!query || !(query.jobId)) {
      return ctx.badRequest(null, [{ messages: [{ id: "Required jobId in query" }] }]);
    }

    const { jaf } = ctx.request.files || {};

    if (!jaf) {
      return ctx.badRequest(null, [{ messages: [{ id: "Required \"jaf\" in body" }] }]);
    }

    const job = await strapi.db.query("api::job.job").findOne({
      where: {
        id: query.jobId,
      },
      populate: ["jaf"]
    });
     
    if (!job) {
      return ctx.badRequest(null, [{ messages: [{ id: "No such job Id found" }] }]);
    }

    // if (jaf != null), coordinator should NOT be allowed to change it
    if (role_type === "coordinator" && job.jaf) {
      return ctx.badRequest(null, [{ messages: [{ id: "Coordinators can not change the uploaded JAF" }] }]);
    }

    // Step 1: Delete old "jaf". ie. by setting jaf: null
    const edited_job = await strapi.db.query("api::job.job").update({
      where: { id: query.jobId },
      data: {
        jaf: null
      }
    });

    // Step 2: Continue with updating "jaf", by setting ctx parameters according to input this.update takes ?
    ctx.params["id"] = query.jobId;
    ctx.request.body = { data: "{}" };
    ctx.request.files = { "files.jaf": jaf };
    return this.update(ctx);
  }
}));

// ex: shiftwidth=2 expandtab:
