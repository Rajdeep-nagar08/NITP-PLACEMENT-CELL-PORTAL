module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        secure: env("SMTP_SECURE", false),
        ignoreTLS: true,
        auth: false,

        // ... any custom nodemailer options

      },
      settings: {
        defaultFrom: "no-reply@iitp.ac.in",
        defaultReplyTo: "no-reply@iitp.ac.in",
      },
    },
  },

  // ...
});
