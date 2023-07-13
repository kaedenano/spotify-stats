<script>
    import { signIn, signOut } from "@auth/sveltekit/client";
    import { page } from "$app/stores";
    console.log($page.data.session);
</script>

<h1>SvelteKit Auth Example</h1>
<p>
    {#if $page.data.session}
        {#if $page?.data?.session?.user?.image}
            <img src={$page.data.session.user.image} />
            <br />
        {/if}
        <span class="signedInText">
            <small>Signed in as</small>
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <br />
        <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
        <button on:click={() => signIn("spotify")}>Sign In with Spotify</button>
    {/if}
</p>
