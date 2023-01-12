import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {

  const uuid = uuidv4();

  const users = await prisma.user.create({
    data: {
      spId: "kaedenana",
      uuid: uuid
    }
  });
  res.status(200).json(users);
}