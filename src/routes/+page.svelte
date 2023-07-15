<script>
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    const session = $page.data.session;
    console.log(session);

    // API Fetch
    const getApiData = async (url, session) => {
        const res = await fetch(url, {
            headers: {
                Authorization: `Bearer ${session?.user?.accessToken}`,
            },
        }).then((res) => res.json());

        return res;
    };

    onMount(async () => {
        const top = getApiData(
            "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0",
            session
        );
        console.log(top);
    });
</script>

<p class="flex flex-col justify-center items-center">
    {#if $page.data.session}
        {#if $page?.data?.session?.user?.picture}
            <img class="shadow-lg" src={$page.data.session.user.picture} />
        {/if}
        <div class="signedInText">
            <small>Signed in as</small>
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </div>
        <button class="border" on:click={() => signOut()}>Sign out</button>
    {:else}
        <div class="notSignedInText">You are not signed in</div>
        <button on:click={() => signIn("spotify")}>Sign In with Spotify</button>
    {/if}
</p>

<style>
    p {
        font-family: "Roboto", sans-serif;
        font-weight: 200;
    }
</style>
