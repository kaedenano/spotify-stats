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

    const getTopItems = async () => {
        const top = await getApiData(
            "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0",
            session
        );
        console.log(top);
        return await top;
    };
</script>

<p class="flex flex-col m-32">
    {#if $page.data.session}
        {#await getTopItems()}
            <p>loading...</p>
        {:then top}
            <div class="grid grid-cols-4">
                <img src={top.items[0].album.images[0].url} />
                <img src={top.items[1].album.images[0].url} />
                <img src={top.items[2].album.images[0].url} />
                <img src={top.items[3].album.images[0].url} />
                <img src={top.items[4].album.images[0].url} />
                <img src={top.items[5].album.images[0].url} />
                <img src={top.items[6].album.images[0].url} />
                <img src={top.items[7].album.images[0].url} />
                <img src={top.items[8].album.images[0].url} />
                <img src={top.items[9].album.images[0].url} />
                <img src={top.items[10].album.images[0].url} />
                <img src={top.items[11].album.images[0].url} />
                <img src={top.items[12].album.images[0].url} />
                <img src={top.items[13].album.images[0].url} />
                <img src={top.items[14].album.images[0].url} />
                <img src={top.items[15].album.images[0].url} />
            </div>
        {/await}
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
