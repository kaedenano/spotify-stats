import { getSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import qs from 'qs'

import { getFeatures } from '../tools/getFeatures';
import { getApiData } from '../tools/getApiData';
import { transKey } from '../tools/transKey';
import { mode } from '../tools/mode';
import { bpm } from '../tools/bpm';
import { sortGenre } from '../tools/sortGenre';

import Layout from '../components/stats';
import { Button } from '@chakra-ui/react';

export const view = ({ user, tracks, artists }: any) => {

    // const key = transKey(mode(features));
    // const tempo = bpm(features);


    const uid = user.id;
    const artist = artists.items;
    const track = tracks.items;
    const genre = sortGenre(artists.items);

    // console.log(user);
    // console.log(uid);
    // console.log(features);
    // console.log(key);
    // console.log(tempo);
    console.log(artists.items);
    console.log(tracks.items);

    const data = formatData(uid, artist, track, genre);
    console.log(data)

    // const [data, setData] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    // const handleClick = async (uid) => {
    //     await axios.post('http://localhost:3000/api/upsert', uid);
    //     // setData(uid);
    //     // setIsLoaded(true);
    // }


    return (
        <>
            <Button
                onClick={throwDB(data)}
                background={'gray.500'}
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
    // const features = await getFeatures(tracks, session);

    return { props: { user, tracks, artists } };

}

const throwDB: GetServerSideProps = async (data) => {

    const axiosInstance = axios.create({
        headers: { 'Content-Type': 'application/json' }
    });

    axiosInstance.post('http://localhost:3000/api/upsert', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

const formatData = (spid, artists, tracks, genres) => {

    let data = [
        { spotifyid: spid },
        { spotifyartists: artists },
        { spotifytracks: tracks },
        { spotifygenres: genres },
    ]

    return data;

}

export default view;