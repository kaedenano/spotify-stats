import { signIn } from 'next-auth/react'
import Navbar from '../components/exnavbar';
import Landing from '../components/landing';
import Footer from '../components/footer';
import { useEffect } from 'react';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: process.env.NEXT_PUBLIC_REDIRECT_URI! });
}

export const welcome = () => {

    // useEffect(() => {
    //     fetch('/api/upsert')
    //         .then((res) => res.json())
    //         .then(console.log);
    // }, []);

    return (
        <>
            <Navbar />
            <Landing />
        </>
    )
}

export default welcome;