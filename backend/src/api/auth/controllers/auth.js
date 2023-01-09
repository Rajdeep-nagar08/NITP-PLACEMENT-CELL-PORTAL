'use strict';

/**
 * A set of functions called "actions" for `auth`
 */

module.exports = {
  /**
   * @description Route to reset password
   *
   * @auth Currently planned for 'student' and 'coordinator' roles only
   *
   * @note NOT FOR FORGOT PASSWORD currently, since this requires user to be logged in
   *
   * @request_body: { old_pass: string, new_pass: string }
   */
  reset_password: async (ctx) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized(null, [{ messages: [{ id: "Bearer Token not provided or invalid" }] }]);
    }

    const { old_pass, new_pass } = ctx.request.body;

    if (!old_pass || !new_pass) {
      return ctx.badRequest(null, [{ messages: [{ id: "Old password or new password not provided" }] }]);
    }

    // Throw an error if the new password selected by the user
    // contains more than three times the symbol '$'.
    if (
      strapi.service('plugin::users-permissions.user').isHashed(new_pass)
    ) {
      throw new ValidationError(
        'Your password cannot contain more than three times the symbol `$`'
      );
    }

    // curr_user is actually same as user, but with more fields. Since `user` doesn't have
    // the `password` field, we need to get it from `curr_user`.
    const curr_user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { id: user.id },
      select: ["password"]
    });

    const currentHashedPassword = curr_user.password;

    // console.debug({ currentHashedPassword, old_pass, new_pass, flag: await strapi.service('plugin::users-permissions.user').validatePassword(old_pass, currentHashedPassword) });

    // Throw an error if the old password is wrong.
    // @note: .validatePassword is defined in
    // `node_modules/@strapi/plugin-users-permissions/server/services/user.js`
    if (!(await strapi.service('plugin::users-permissions.user').validatePassword(old_pass, currentHashedPassword))) {
      return ctx.forbidden(null, [{ messages: [{ id: "Current/Old password is wrong" }] }]);
    }

    // Update the user's password.
    const edited_user = await strapi.service('plugin::users-permissions.user').edit( user.id, {
      // CAUTION: strapi v4.1.11 automatically hashes the password, updating strapi
      // may cause this to not work anymore, in that case see bcrypt.hashSync with
      // rounds=10, to ensure the password is hashed
      password: new_pass
    });

    return edited_user;
  },

  /**
   * @description Returns 'User' id, based on username
   * 
   * @auth Only for admin
   *
   * @param username
   *
   * @example GET /api/auth/userid?username=<username>
   */
  get_userid: async (ctx) => {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized(null, [{ messages: [{ id: "Bearer Token not provided or invalid" }] }]);
    }

    if (user.role !== 'admin') {
      return ctx.forbidden(null, [{ messages: [{ id: "You are not authorized to perform this action" }] }]);
    }

    const { username } = ctx.query;

    if (!username) {
      return ctx.badRequest(null, [{ messages: [{ id: "Username not provided" }] }]);
    }

    const user_obj = await strapi.query('plugin::users-permissions.user').findOne({
      where: { username },
      select: ["id"]
    });

    if (!user_obj) {
      return ctx.badRequest(null, [{ messages: [{ id: "User not found" }] }]);
    }

    const userid = user_obj.id;

    return { id: userid };
  }
};

// ex: shiftwidth=2 expandtab:
