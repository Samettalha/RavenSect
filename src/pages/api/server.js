import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail", // Gmail servisi
        auth: {
          user: process.env.EMAIL_USER, // Ortam değişkeninden al
          pass: process.env.EMAIL_PASS, // Ortam değişkeninden al
        },
        tls: {
          rejectUnauthorized: false, // TLS hatası oluşuyorsa
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL, // Alıcı emaili ortam değişkeninden al
        subject: `İletişim Formu: ${name}`,
        text: `Ad: ${name}\nTelefon: ${phone}\nMesaj: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "Mail gönderildi!" });
    } catch (error) {
      console.error("Mail gönderim hatası:", error);
      res.status(500).json({ success: false, message: "Mail gönderilemedi!" });
    }
  } else {
    res.status(405).json({ message: "Yalnızca POST isteği kabul edilir." });
  }
}
