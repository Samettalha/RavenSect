import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Tüm alanlar gerekli!' });
        }

        try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return res.status(401).json({ error: 'Kullanıcı bulunamadı!' });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ error: 'Geçersiz şifre!' });
            }

            const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ error: 'Giriş başarısız!' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
