<script lang="ts">
	// import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	const { children } = $props();
	import { onMount } from 'svelte';
	import { initAuth0, isAuthenticated, getUser, login, logout, register } from '$lib/auth';

	setupConvex('https://little-quail-162.convex.cloud');
	let user: any;
	let authenticated = false;
	
	onMount(async () => {
		await initAuth0();
		authenticated = await isAuthenticated();
		if (authenticated) {
			user = await getUser();
		}
	});
</script>

<main>
	{#if authenticated}
		<h1>Bienvenue, {user.name}</h1>
		<button onclick={logout}>Déconnexion</button>
	{:else}
		<button onclick={login}>Connexion</button>
	{/if}
</main>

{@render children()}
