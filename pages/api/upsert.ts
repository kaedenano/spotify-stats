import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {

  console.log(req.body[0].spotifyid)

  const uuid = uuidv4();
  const spid = req.body[0].spotifyid;
  const topArtists = req.body[1].spotifyartists;
  const topTracks = req.body[2].spotifytracks;
  const topGenres = req.body[3].spotifygenres;

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