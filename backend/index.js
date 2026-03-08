const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   Middleware
========================= */
app.use(cors({
  origin: [
    "http://localhost:3000",
    process.env.REACT_APP_PORTFOLIO_URL
  ].filter(Boolean), // ✅ prevent undefined origin
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =========================
   MySQL Pool
========================= */
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// Nodemailer config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});



/* =========================
   CONTACT API
========================= */
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required"
    });
  }

  try {
    // Save to DB
    const insertQuery = `
      INSERT INTO portfolio.contacts (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `;

    await pool.query(insertQuery, [
      name,
      email,
      phone || null,
      message
    ]);

    // Email
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_CONTACT,
      subject: "New Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (err) {
    console.error("❌ Contact form error:", err.message);
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
});

/* =========================
   Server Start
========================= */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
