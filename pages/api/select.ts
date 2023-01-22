import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: any,
) {

  const uuid = req.body;

  try {
    const users: any = await prisma.user.findFirst({
      where: {
        uuid: uuid,
      },
    });
    if (!users) {
      res.status(200).json('not found');
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).end();
  }

}