module.exports = {
  routes: [
    {
      method: "GET",
      path: "/alumn/me",
      handler: "alumn.findMe",
      policies: [],
    },
    {
      method: "POST",
      path: "/alumn/submit-for-approval",
      handler: "alumn.submit_for_approval",
      policies: []
    },
    {
      /** NOTE: Take special care of updating field names in this alumn.modify_multiple route, on every change to alumn schema :) */
      method: "PUT",
      path: "/alumn/modify",
      handler: "alumn.modify_multiple",
      policies: []
    },
    {
      method: "GET",
      path: "/alumn/alljobs",
      handler: "job.get_all_jobs",
      policies: [],
    },
    {
      method: "GET",
      path: "/alumn/eligiblejobs",
      handler: "job.get_eligible_jobs",
      policies: [],
    },
    {
      method: "POST",
      path: "/alumn/apply",
      handler: "job.apply_to_job",
      policies: [],
    },
    {
      method: "GET",
      path: "/alumn/applied-jobs",
      handler: "job.get_applied_jobs",
      policies: [],
    },
    {
      method: 'POST',
      path: '/alumn/register-alumn',
      handler: 'auth.register_alumn',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'POST',
      path: '/alumn/request-password-change',
      handler: 'auth.request_password_change',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'GET',
      path: '/alumn/placed-status',
      handler: 'alumn.get_placed_status',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'GET',
      path: '/alumn/intern-status',
      handler: 'alumn.get_intern_status',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: "PUT",
      path: "/alumn/set-placed-status",
      handler: "alumn.set_placed_status",
      policies: []
    },
 
  ],
};

// ex: shiftwidth=2 expandtab:
