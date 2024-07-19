const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    const clientPath = path.resolve(__dirname, '../client/dist');
    app.use(express.static(clientPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(clientPath, 'index.html'));
    });
}

// Email sending route
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password', // Replace with your email password
        },
    });

    // Set up email data
    let mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with your email
        subject: `Message from ${name}`,
        text: message,
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3014;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
