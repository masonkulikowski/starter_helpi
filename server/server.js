require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Career Compass Results',
        text: req.body.generatedResponse
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent');
    } catch (error) {
        console.error("Failed to send email", error);
        res.status(500).send('Failed to send email: '+ error.message);
    }
});

app.listen(3000, () => console.log('Server is running on port 3000'));