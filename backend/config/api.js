/*
 * @ref: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api.html
 *
 * Setting maxLimit to a very high value (maybe -1 would also work, but not interested in testing that on production :)
 */

module.exports = {
  rest: {
    defaultLimit: 99999,
    maxLimit: 99999,
    withCount: true,
  },
};
