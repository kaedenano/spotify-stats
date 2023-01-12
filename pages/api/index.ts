import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

import type { User } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  /* 著者リストを取得 */
  const authors = await prisma.user.findMany();
  res.status(200).json(authors);
}