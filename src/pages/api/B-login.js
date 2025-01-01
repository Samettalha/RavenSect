// src/pages/api/B-login.js

import { supabase } from '../../lib/supabase';  // Supabase client'ını import et

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Supabase Giriş Hatası:", error.message);
        return res.status(401).json({ error: error.message });
      }

      console.log("Başarılı Giriş:", data.user);
      return res.status(200).json({ user: data.user });
    } catch (err) {
      console.error("Sunucu Hatası:", err);
      return res.status(500).json({ error: "Sunucuda bir hata oluştu." });
    }
  } else {
    console.error(`Method ${req.method} Not Allowed`);
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
