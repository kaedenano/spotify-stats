import { SvelteKitAuth } from "@auth/sveltekit";
import Spotify from "@auth/core/providers/spotify";
import { AUTH_SECRET, SPOTIFY_ID, SPOTIFY_SECRET } from "$env/static/private";
import { Handle } from "@sveltejs/kit";

export const handle = SvelteKitAuth(async (event) => {
    const authOptions = {
        providers: [Spotify({ clientId: SPOTIFY_ID, clientSecret: SPOTIFY_SECRET })],
        secret: AUTH_SECRET,
        trustHost: true
    }
    return authOptions
}) satisfies Handle;