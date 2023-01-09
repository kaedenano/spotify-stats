import { signIn } from 'next-auth/react'
import Navbar from '../components/exnavbar';
import Landing from '../components/landing';
import Footer from '../components/footer';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

    return (
        <>
            <Navbar/>
            <Landing />
        </>
    )
}

export default welcome;