const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route pour envoyer l'email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Configurer le transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Options de l'email
    const mailOptions = {
      // ✅ CORRECTION : Gmail exige que "from" soit TON propre compte
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      // ✅ CORRECTION : replyTo permet de répondre directement au visiteur
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>Nouveau message de ${name}</h3>
        <p><strong>Email du contact :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Envoyer
    await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé avec succès !");
    res.status(200).json({ message: "Email envoyé avec succès" });

  } catch (error) {
    // ✅ CORRECTION : Affiche le vrai message d'erreur pour déboguer
    console.error("❌ Erreur détaillée:", error.message);
    res.status(500).json({ message: "Erreur lors de l'envoi", detail: error.message });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur Email tourne sur http://localhost:${PORT}`);
});