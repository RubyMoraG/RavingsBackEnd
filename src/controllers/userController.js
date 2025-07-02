import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        posts: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error getting users' });
  }
};

// POST create user
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await prisma.users.create({
      data: { username, email, password },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
