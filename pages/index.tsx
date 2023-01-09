import { signIn } from 'next-auth/react'
import Navbar from '../components/navbar';
import Layout from '../components/welcome';
import Footer from '../components/footer';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

    return (
        <>
            <Navbar/>
            <Layout />
        </>
    )
}

export default welcome;