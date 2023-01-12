import { getSession } from 'next-auth/react';
import React from 'react';
import { GetServerSideProps } from 'next';

import { getFeatures } from '../tools/getFeatures';
import { getApiData } from '../tools/getApiData';
import { transKey } from '../tools/transKey';
import { mode } from '../tools/mode';
import { bpm } from '../tools/bpm';
import { sortGenre } from '../tools/sortGenre';

import Layout from '../components/stats';
import { Button } from '@chakra-ui/react';

export const view = ({ user, tracks, artists, features }: any) => {

    const key = transKey(mode(features));
    const tempo = bpm(features);
    const genreRank = sortGenre(artists.items);
    const create = 1;

    console.log(user);
    console.log(features);
    console.log(key);
    console.log(tempo);
    console.log(artists);
    console.log(genreRank);
    console.log(artists.items[0].images[0].url);
    console.log(tracks)

    return (
        <>
            <Button
                onClick={create}
                background={'white'}
                >POST</Button>
            <img src={artists.items[0].images[0].url}></img>
            <img src={artists.items[1].images[0].url}></img>
            <img src={artists.items[2].images[0].url}></img>
            <img src={artists.items[3].images[0].url}></img>
            <img src={artists.items[4].images[0].url}></img>
            <img src={artists.items[5].images[0].url}></img>
            <img src={artists.items[6].images[0].url}></img>
            {/* <img src={artists.items[7].images[0].url}></img> */}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession(ctx);
    const user = await getApiData('https://api.spotify.com/v1/me/', session);
    const tracks = await getApiData('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0', session);
    const artists = await getApiData('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10', session);
    const features = await getFeatures(tracks, session);

    return { props: { user, tracks, artists, features } };

}

export default view;