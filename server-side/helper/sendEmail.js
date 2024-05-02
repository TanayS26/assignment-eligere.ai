const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = (email, html) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASS,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Event Confirmation!",
    html: html,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("error occurred", err.message);
    } else {
      console.log(" ----- Email sent successfully -----");
    }
  });
};

module.exports = {
  sendEmail,
};