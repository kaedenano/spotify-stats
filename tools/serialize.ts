import { GetServerSideProps } from "next"
import { getSession } from 'next-auth/react';
import { getFeatures } from '../tools/getFeatures';
import { getApiData } from '../tools/getApiData';
import { transKey } from '../tools/transKey';
import { mode } from '../tools/mode';
import { bpm } from '../tools/bpm';
import { sortGenre } from '../tools/sortGenre';

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const session = await getSession(ctx);
    const user = await getApiData('https://api.spotify.com/v1/me/', session);
    const tracks = await getApiData('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0', session);
    // const artists = await getApiData('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10', session);
    // const features = await getFeatures(tracks, session);
    
    return user;
}