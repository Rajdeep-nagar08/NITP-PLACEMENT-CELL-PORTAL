module.exports = {
  routes: [
    {
      method: "GET",
      path: "/alumni/me",
      handler: "alumni.findMe",
      policies: [],
    },
    {
      method: "POST",
      path: "/alumni/submit-for-approval",
      handler: "alumni.submit_for_approval",
      policies: []
    },
    {
      /** NOTE: Take special care of updating field names in this alumni.modify_multiple route, on every change to alumni schema :) */
      method: "PUT",
      path: "/alumni/modify",
      handler: "alumni.modify_multiple",
      policies: []
    },
    {
      method: "GET",
      path: "/alumni/alljobs",
      handler: "job.get_all_jobs",
      policies: [],
    },
    {
      method: "GET",
      path: "/alumni/eligiblejobs",
      handler: "job.get_eligible_jobs",
      policies: [],
    },
    {
      method: "POST",
      path: "/alumni/apply",
      handler: "job.apply_to_job",
      policies: [],
    },
    {
      method: "GET",
      path: "/alumni/applied-jobs",
      handler: "job.get_applied_jobs",
      policies: [],
    },
    {
      method: 'POST',
      path: '/alumni/register-alumni',
      handler: 'auth.register_alumni',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'POST',
      path: '/alumni/request-password-change',
      handler: 'auth.request_password_change',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'GET',
      path: '/alumni/placed-status',
      handler: 'alumni.get_placed_status',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'GET',
      path: '/alumni/intern-status',
      handler: 'alumni.get_intern_status',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: "PUT",
      path: "/alumni/set-placed-status",
      handler: "alumni.set_placed_status",
      policies: []
    },
 
  ],
};

// ex: shiftwidth=2 expandtab:
