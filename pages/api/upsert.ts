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
  const spid = req.body.spid;
  const topArtists = req.body.artist;
  const topTracks = req.body.track;
  const topGenres = req.body.genre;

  const users: any = await prisma.user.upsert({
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