// pages/api/verify-captcha.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ success: false, message: "Method not allowed" });
    }
  
    const { captchaResponse } = req.body;
    if (!captchaResponse) {
      return res
        .status(400)
        .json({ success: false, message: "Captcha yanıtı eksik" });
    }
  
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({
        success: false,
        message: "ReCAPTCHA gizli anahtarı yapılandırılmamış",
      });
    }
  
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaResponse}`;
  
    try {
      const captchaRes = await fetch(verificationUrl, { method: "POST" });
      const captchaJson = await captchaRes.json();
  
      if (!captchaJson.success) {
        if (
          captchaJson["error-codes"] &&
          captchaJson["error-codes"].includes("invalid-input-secret")
        ) {
          // Site sahibinin görmesi gereken hata mesajı
          return res.status(400).json({
            success: false,
            message: "Geçersiz site anahtarı",
          });
        }
        return res.status(400).json({
          success: false,
          message: "reCAPTCHA doğrulaması başarısız",
          captchaJson,
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "reCAPTCHA doğrulaması başarılı",
        captchaJson,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Sunucu hatası",
        error: error.message,
      });
    }
  }
  