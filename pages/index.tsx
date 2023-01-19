import Head from 'next/head'

import Navbar from '../components/navbar';
import Landing from '../components/landing';
import Footer from '../components/footer';

export default function welcome() {

    return (
        <>
            <Head>
                <title>Spotify Stats</title>
            </Head>
            <Navbar />
            <Landing />
        </>
    )
}