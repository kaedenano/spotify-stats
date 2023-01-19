import { getSession } from 'next-auth/react'
import React, { useState } from 'react'
import { Flex, Button, Container } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import axios from 'axios'

import Navbar from '../components/navbar'
import Stats from '../components/stats'
import Footer from '../components/footer'

import { getApiData } from '../tools/getApiData'
import { sortGenre } from '../tools/sortGenre'


export const useView = ({ user, tracks, artists }: any) => {

    const userId = user.id;
    const artist = artists.items;
    const track = tracks.items;
    const genre = sortGenre(artists.items);

    console.log(user);
    // console.log(uid);
    // console.log(artists.items);
    // console.log(tracks.items);

    const spotifyData = formatData(userId, artist, track, genre);
    console.log(userId);

    const [isLoaded, setIsLoading] = useState(false);

    const router = useRouter();

    // post DB

    const handleClick = async () => {

        setIsLoading(true);

        const axiosInstance = axios.create({
            headers: { 'Content-Type': 'application/json' }
        });

        const res = await axiosInstance.post(process.env.NEXT_PUBLIC_REDIRECT_URI + '/api/upsert', spotifyData);
        const path = res.data.uuid;

        // setIsLoading(false);

        router.push('https://twitter.com/intent/tweet?text=' + process.env.NEXT_PUBLIC_REDIRECT_URI + `/${path}`)

    }

    return (
        <>
            <Head>
                <title>Your Spotify Stats</title>
            </Head>
            <Navbar />
            <Stats data={spotifyData} />
                <Flex bottom={10} position="sticky" justify='center' align='center'>
                    <Button
                        onClick={handleClick}
                        shadow='xs'
                        fontSize='2xl'
                        isLoading={isLoaded}
                        w='72'
                        h='20'
                        rounded='full'
                        colorScheme='twitter'
                        leftIcon={<FaTwitter />}
                    >Share on Twitter</Button>
                </Flex>

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

    return { props: { user, tracks, artists } };

}

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