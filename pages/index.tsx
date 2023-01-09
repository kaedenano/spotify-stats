import { signIn } from 'next-auth/react'
import Header from '../components/header';
import Layout from '../components/welcome';
import Footer from '../components/footer';

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

    return (
        <>
        <Header/>
        <Layout/>
        <Footer/>
        </>
    )
}

export default welcome;