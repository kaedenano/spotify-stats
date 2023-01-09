import { signIn } from 'next-auth/react'

const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000/stats" });
}

export const welcome = () => {

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <h1 className="font-bold text-9xl text-white">Share Statistics</h1>
                <h1 className="font-bold text-9xl text-white">with Other Users</h1>
                <button className="text-4xl text-white w-96 h-32 rounded-full bg-green-500 m-20" onClick={handleLogin}>Login on Spotify</button>
                <p className="text-gray-500">Get statistics about your top artists, songs, and genres from Spotify. Updated daily. Easy to share.</p>
            </div>
        </>
    )
}

export default welcome;