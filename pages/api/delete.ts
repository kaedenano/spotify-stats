import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {

  const spid = req.body;
  try {
    const user: any = await prisma.user.delete({
      where: {
        spid: spid
      }
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).end();
  }


}