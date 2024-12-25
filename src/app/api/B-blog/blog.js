import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const blogs = await prisma.blog.findMany({
                include: { user: true },
            });

            return res.status(200).json(blogs);
        } catch (error) {
            return res.status(500).json({ error: 'Blogları getirme başarısız!' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
