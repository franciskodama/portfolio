// import cors from 'cors';
const cors = require('cors');
// import { createTransport } from 'nodemailer';
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

// app.use(cors());

app.use(express.json());
app.use('/', router);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Origin',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(3008, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_GMAIL_USER,
    pass: process.env.REACT_APP_GMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const location = req.body.location;
  const messageDrag = req.body.messageDrag;

  const mail = {
    from: name,
    to: process.env.REACT_APP_GMAIL_USER,
    subject: `[A JOB JUST HAS ARRIVED!]: Contact Form Submission`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Preference to Work: ${location}</p>
           <p>Message Drag n' Drop: ${messageDrag}</p>,
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});
