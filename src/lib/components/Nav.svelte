<script lang="ts">
	import { page } from '$app/stores';
	import { gsap } from '$lib/utils/gsap';
	import { onMount } from 'svelte';

	let navEl: HTMLElement;
	let mobileOpen = $state(false);
	let scrolled = $state(false);

	const links = [
		{ href: '/', label: 'Cover Letter' },
		{ href: '/cases/drugindex', label: 'Data Visualization case' },
		{ href: '/cases/search-engine', label: 'Search Engine case' },
		{ href: '/cases/architecture', label: 'Architecture case' }
	];

	function isActive(href: string, pathname: string) {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	}

	onMount(() => {
		// Animate nav in
		gsap.from(navEl, {
			y: -80,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
			delay: 0.2
		});

		gsap.from(navEl.querySelectorAll('.nav-link'), {
			y: -20,
			opacity: 0,
			duration: 0.6,
			stagger: 0.08,
			ease: 'power2.out',
			delay: 0.5
		});

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	bind:this={navEl}
	class="fixed top-0 right-0 left-0 z-50 border-b border-transparent transition-all duration-500
		{scrolled ? 'actual-glass shadow-lg shadow-black/40' : 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="group relative flex items-center gap-2">
			<span
				class="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-teal-400"
			>
				MK<span class="text-teal-400">.</span>
			</span>
		</a>

		<!-- Desktop links -->
		<ul class="hidden items-center gap-1 xl:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						class="nav-link relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300
							{isActive(link.href, $page.url.pathname)
							? 'text-teal-400'
							: 'text-slate-400 hover:bg-white/5 hover:text-white'}"
					>
						{link.label}
						{#if isActive(link.href, $page.url.pathname)}
							<span
								class="absolute bottom-1 left-1/2 h-[3px] w-1/2 -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"
							></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA button -->
		<a
			href="mailto:manoah@example.com"
			class="hidden rounded-full border border-teal-500/40 bg-teal-500/10 px-6 py-2.5 text-sm font-bold text-teal-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/80 hover:bg-teal-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] md:inline-flex"
		>
			Hire Manoah
		</a>

		<!-- Mobile toggle -->
		<button
			class="flex flex-col gap-1.5 rounded-md p-2 hover:bg-white/10 xl:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			<span
				class="block h-0.5 w-6 bg-white transition-all duration-300 {mobileOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-white transition-all duration-300 {mobileOpen ? 'opacity-0' : ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-white transition-all duration-300 {mobileOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="actual-glass-strong border-t border-white/10 xl:hidden">
			<div class="flex min-h-screen flex-col space-y-4 px-6 py-8">
				{#each links as link}
					<a
						href={link.href}
						class="rounded-xl border border-transparent px-6 py-4 text-lg font-bold transition-colors
							{isActive(link.href, $page.url.pathname)
							? 'border-teal-500/20 bg-teal-500/10 text-teal-400 shadow-[inset_0_0_20px_rgba(45,212,191,0.1)]'
							: 'text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white'}"
						onclick={() => (mobileOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
