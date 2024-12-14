<script lang="ts">
	// import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	const { children } = $props();
	setupConvex("https://little-quail-162.convex.cloud");
</script>

{@render children()}