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
  const spid = req.body;
  const topTracks = 'aaa';
  const topArtists = 'aaa';
  const topGenres = 'aaa';

  const users = await prisma.user.upsert({
    where: {
      spid: spid
    },
    update: {
      uuid: uuid,
      artist: topArtists,
      track: topTracks,
      genre: topGenres,
    },
    create: {
      spid: spid,
      uuid: uuid,
      artist: topArtists,
      track: topTracks,
      genre: topGenres,
    }
  });

  res.status(200).json(users);

}