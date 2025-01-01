import { supabase } from '/lib/supabase.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, author_id } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({ error: 'Tüm alanlar gereklidir.' });
    }

    const { data, error } = await supabase.from('posts').insert([
      { title, content, author_id },
    ]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ post: data[0] });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
