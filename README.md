# Spotify Stats
![landing](./images/landing.png)

Spotify Stats is a website that displays and shares Spotify statistics.

## Actual shared pages
https://spstats.me/d3161c09-0e7a-41e4-ba84-26f5897e32df

## Features
- Displays the most listened to artists and songs of logged in users
- Personalized pages can be generated and shared
- Seamless sharing via Twitter

## Technology Stacks
- TypeScript
- Next.js
- NextAuth.js
- Prisma
- PlanetScale
- Chakra UI
- Framer Motion
- Spotify Web API
- Vercel (Hosting)

## Require
- You must register your [Spotify application](https://developer.spotify.com/dashboard/) first

- If you want to use the database, you need to register with [PlanetScale](https://planetscale.com/)

## Run
Clone
``` bash
git clone https://github.com/kaedenano/spotify-stats
cd spotify-stats
```

Dependency Installation

``` bash
yarn
# or
npm install
```

Setting Environment Variables (.env.local)
``` bash
SPOTIFY_CLIENT_ID='YOUR_CLIENT_ID'
SPOTIFY_CLIENT_SECRET='YOUR_CLIENT_SECRET'
NEXT_PUBLIC_REDIRECT_URI='http://localhost:3000'
```

Database environment variables (.env)
``` bash
DATABASE_URL='mysql:xxx'
```


Start the server
``` bash
yarn dev
# or
npm run dev
```

## Warning
Much of this project is incomplete and has not yet applied for an API, so it is not available to other users.

## Screenshot

![Result](./images//result.png)

## References

[Spotify for Developers](https://developer.spotify.com/documentation/web-api/)

[PlanetScale quickstart guide](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide)