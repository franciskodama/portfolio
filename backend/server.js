const express = require('express');
const dotenv = require('dotenv');
const mg = require('mailgun-js');

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
    domain: process.env.REACT_APP_MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/email', (req, res) => {
  const { name, email, message, location, messageDrag } = req.body;
  mailgun()
    .messages()
    .send(
      {
        from: `${email}`,
        to: process.env.REACT_APP_EMAIL_RECIPIENT,
        name: `${name}`,
        subject: `[JOB] You got a job!`,
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Preference to Work: ${location}</p>
               <p>Message Drag n' Drop: ${messageDrag}</p>
               <p>Message: ${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully!' });
        }
      }
    );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

// const path = require('path');
// app.use(express.static(path.join(__dirname, '../build')));
w;
