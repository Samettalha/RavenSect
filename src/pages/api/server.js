import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "smtp.gmail.com",
        auth: {
          user: "kavutcusamettalha06@gmail.com", // Gmail adresiniz
          pass: "qftw eupt weic lsug", // Uygulama şifresi
        },
      });

      const mailOptions = {
        from: email,
        to: "kavutcusamettalha@gmail.com", // Alıcı email adresi
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
