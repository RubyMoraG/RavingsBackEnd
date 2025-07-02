import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// GET all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.posts.findMany({
      include: {
        user: true,
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Service Error' });
  }
};

// POST create post
export const createPost = async (req, res) => {
  const { user_Id, content } = req.body;
  try {
    const post = await prisma.posts.create({
      data: { user_Id, content },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

