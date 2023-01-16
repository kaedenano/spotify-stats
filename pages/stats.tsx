import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

import { getApiData } from '../tools/getApiData';
import { sortGenre } from '../tools/sortGenre';

import Layout from '../components/stats';
import { Button } from '@chakra-ui/react';

export const useView = ({ user, tracks, artists }: any) => {

    const uid = user.id;
    const artist = artists.items;
    const track = tracks.items;
    const genre = sortGenre(artists.items);

    // console.log(user);
    // console.log(uid);
    // console.log(artists.items);
    // console.log(tracks.items);

    const spData = formatData(uid, artist, track, genre);
    console.log(uid);

    const [isLoaded, setIsLoading] = useState(false);
    const router = useRouter();

    // post DB
    const handleClick = async () => {

        setIsLoading(true);

        const axiosInstance = axios.create({
            headers: { 'Content-Type': 'application/json' }
        });

        const res = await axiosInstance.post('/api/upsert', spData);
        const path = res.data.uuid;

        setIsLoading(false);

        router.push(`/${path}`)

    }

    return (
        <>
            <Button
                onClick={handleClick}
                fontSize='32'
                background={'blue.400'}
                w='96'
                h='32'
                m='10'
                rounded='full'
            >Share on Twitter</Button>
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

    if (!session) {
        return {
            props: {
            },
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const user = await getApiData('https://api.spotify.com/v1/me/', session);
    const tracks = await getApiData('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0', session);
    const artists = await getApiData('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10', session);
    // const features = await getFeatures(tracks, session);

    return { props: { user, tracks, artists } };

}

// const throwDB = async (data) => {

//     const [isLoading, setIsLoading] = useState(false);
//     setIsLoading(true);

//     const axiosInstance = axios.create({
//         headers: { 'Content-Type': 'application/json' }
//     });

//     const res = await axiosInstance.post('http://localhost:3000/api/upsert', data)
//         // .then(response => {
//         //     console.log('ressssssssssssssssssssssssssssssssssssssssssssss');
//         //     // console.log(response.data);
//         // })
//         // .catch(error => {
//         //     console.log(error);
//         // });

//     setIsLoading(false);

// }

// const throwDB: GetServerSideProps = async (data) => {

//     const axiosInstance = axios.create({
//         headers: { 'Content-Type': 'application/json' }
//     });

//     axiosInstance.post('http://localhost:3000/api/upsert', data)
//         .then(response => {
//             console.log('ressssssssssssssssssssssssssssssssssssssssssssss');
//             // console.log(response.data);
//         })
//         .catch(error => {
//             console.log(error);
//         });

// }

const formatData = (spid: string, artists: any, tracks: any, genres: any) => {

    let data = {
        spid: spid,
        artist: artists,
        track: tracks,
        genre: genres
    }

    return data;

}

export default useView;