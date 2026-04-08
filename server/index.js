const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ IMPORTANT : utiliser le port Render
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Route test (très important pour vérifier que le backend marche)
app.get('/', (req, res) => {
  res.send('Backend Node OK 🔥');
});

// Route pour envoyer l'email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Config transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email envoyé !");
    res.status(200).json({ message: "Email envoyé avec succès" });

  } catch (error) {
    console.error("❌ Erreur:", error.message);
    res.status(500).json({ message: "Erreur", detail: error.message });
  }
});

// Lancer serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur tourne sur le port ${PORT}`);
});

console.error("❌ Erreur complète:", error);