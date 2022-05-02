require("dotenv").config();

const nodemailer = require("nodemailer");
const log = console.log;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL || "fkodama.server@gmail.com", // TODO: your gmail account
    pass: process.env.PASSWORD || "V11jaBbeLzJ0", // TODO: your gmail password
  },
});

let mailOptions = {
  from: "fkodama.server@gmail.com", // TODO: email sender
  to: "fk.ca@fkodama.com", // TODO: email receiver
  subject: "Nodemailer - Test",
  text: "Wooohooo it works!!",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log("Error occurs", err);
  }
  return log("Email sent!!!");
});
