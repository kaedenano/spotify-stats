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
  const spid = 'n';
  const topTracks = 'aaa';
  const topArtists = 'aaa';
  const topGenres = 'aaa';

  const users = await prisma.user.upsert({
    where: {
      spId: spid
    },
    update: {
      uuid: uuid,
      Artist: topArtists,
      Track: topTracks,
      Genre: topGenres,
    },
    create: {
      spId: spid,
      uuid: uuid,
      Artist: topArtists,
      Track: topTracks,
      Genre: topGenres,
    }
  });
  res.status(200).json(users);
}