'use strict';

/**
 *  company controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::company.company", ({ strapi }) => ({

  /** Authentication is needed for this. Only user with access >='coordinator' role should be granted permission
  *
  ** Requires request body is same as if passed to POST request to usual create entry through strapi REST api
  * ie. ctx.request.body should be like: { data: { 'company_name':'OSI','company_address': 'India' } }
  *
  * Using this route ensures some pre-save checks, such as status MUST be set to "pending" initially, not yet approved
  */
  async register(ctx) {
    const { data } = ctx.request.body;

    if (!data) {
      return ctx.badRequest(null, [{ messages: [{ id: "Invalid parameters/Failed to parse" }] }]);
    }

    // Ensure, sender did not sender with "status: approved"
    data["status"] = "pending";

    // NOTE: this may not be required, since we already modified ctx.request.body.data above
    ctx.request.body = { data };

    return await this.create(ctx);
  },
}));

// ex: shiftwidth=2 expandtab:
