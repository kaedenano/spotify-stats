import { SvelteKitAuth } from "@auth/sveltekit";
import SpotifyProvider from "@auth/core/providers/spotify";
import { decode } from '@auth/core/jwt'
import { AUTH_SECRET, SPOTIFY_ID, SPOTIFY_SECRET } from "$env/static/private";
import { redirect, type Handle } from "@sveltejs/kit";

const scope = "user-top-read";

export const handle = async ({ event, resolve }) => {

    const token = event.cookies.get('next-auth.session-token')
    if (token) event.locals.tokenData = await decode({ token, secret: AUTH_SECRET })

    const authHandle = await SvelteKitAuth({
        providers: [
            SpotifyProvider({
                clientId: SPOTIFY_ID,
                clientSecret: SPOTIFY_SECRET,
                authorization: { params: { scope } },
            })],
        session: { strategy: 'jwt' },
        callbacks: {
            async jwt({ token, account }) {
                if (account) {
                    token.id = account.id;
                    token.expires_at = account.expires_at;
                    token.accessToken = account.access_token;
                }
                return token;
            },
            async session({ session, token }) {
                session.user = token;
                return session;
            },
        },
    })({ event, resolve })

    return authHandle
}

