module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/admin/register-with-role',
      handler: 'auth.register_with_role',
      config: {
        middlewares: ['plugin::users-permissions.rateLimit'],
        prefix: '',
      },
    },
    {
      method: 'GET',
      path: '/admin/eligiblejobs',
      handler: 'student.get_eligible_jobs',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/admin/appliedjobs',
      handler: 'student.get_applied_jobs',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/admin/resume-zip',
      handler: 'student.resume_zip',
      config: {
        policies: []
      }
    }
  ],
};

// ex: shiftwidth=2 expandtab:
