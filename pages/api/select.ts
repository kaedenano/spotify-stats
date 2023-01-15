import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {

  const uuid = req.body;

  try {
    const users = await prisma.user.findFirst({
      where: {
        uuid: uuid,
      },
    });
    if (!users) {
      // res.status(404).json('not found');
      res.status(200).json('not found');
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }

}