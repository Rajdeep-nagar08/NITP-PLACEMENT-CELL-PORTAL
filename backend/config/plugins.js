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


/*

@rajdeep

This code exports a configuration object for an email service in a Strapi app. 
The configuration is generated based on the environment variables passed in via the env argument.

The email configuration object has two main properties: config and settings. 
The config property defines the email provider and its options, 
in this case using nodemailer with various options such as the host, port, 
and secure connection settings. The settings property defines default email addresses 
for the "From" and "Reply-To" fields in outgoing emails.

*/
