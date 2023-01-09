'use strict';

/**
 * A set of functions called "actions" for `role`
 */

module.exports = {
  /**
   * Basic logic is:
   * 1. Get username from JWT, ie. using ctx.state.user.username
   * 2. Query "plugin::users-permissions.user" collection with username, and populate 'role' field (since it's a relation, it won't be populated by default)
   * 
   * @returns Object like this: {
      "username": "XXXXXXX",
      "email": "XXXXXXX.XXXX.xx@xxxx.xx.xx",
      "role": {
          "id": 3,
          "name": "student",
          "type": "student",
      }
    }
   */
  get_role: async (ctx, next) => {
    try {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized(null, [{ messages: [{ id: "Bearer Token not provided or invalid" }] }]);
      }

      /* NOTE: This collection can also be used to get current password hash, then see implementation of /api/auth/local,
         it contains function for comparing a plaintext and a hash, and changing password too*/
      const role = await strapi.query("plugin::users-permissions.user").findOne({
        where: { username: user.username },
        populate: ["role"],
        select: ["username","email"]  /** Not returning all fields, remove this line with select: [] to allow all */
        // NOTE: Don't add "role" in the select array, it will return nothing then
      });

      ctx.body = role;
    } catch (err) {
      ctx.body = err;
    }
  }
};
