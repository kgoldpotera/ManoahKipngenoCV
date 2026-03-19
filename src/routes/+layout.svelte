<script lang="ts">
	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<title>Manoah Kipngeno — SvelteKit Developer</title>
	<meta
		name="description"
		content="Portfolio of Manoah Kipngeno — Telecommunication Engineer & SvelteKit Developer. Built with SvelteKit, GSAP & Glassmorphism."
	/>
</svelte:head>

<AnimatedBackground />
<Nav />

<div class="flex min-h-screen flex-col pt-16">
	{@render children()}
	<Footer />
</div>
