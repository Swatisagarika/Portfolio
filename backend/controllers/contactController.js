const nodemailer = require('nodemailer');
const { saveContact } = require('../models/contactModel');
require('dotenv').config();

// Create transporter here (NO nodemailerConfig)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const submitContactForm = (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are required'
    });
  }

  saveContact(name, email, phone, message, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        error: 'Database error'
      });
    }

    const mailOptions = {
      from: `"Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_CONTACT,
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email send failed:', error);
        return res.status(500).json({
          success: false,
          error: 'Email send failed'
        });
      }

      res.status(200).json({
        success: true,
        message: 'Message sent successfully!'
      });
    });
  });
};

module.exports = { submitContactForm };
