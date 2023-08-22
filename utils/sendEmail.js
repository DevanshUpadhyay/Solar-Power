import nodemailer from "nodemailer";
export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  //   const mailOptions = {
  //     from: process.env.SMPT_MAIL,
  //     to: options.email,
  //     subject: options.subject,
  //     text: options.message,
  //   };

  await transporter.sendMail({
    to,
    subject,
    text,
    from: process.env.SMPT_MAIL,
  });
};
