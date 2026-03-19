<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.case-hero > *'), {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 0.12,
			ease: 'power3.out'
		});

		pageEl.querySelectorAll('.reveal-section').forEach((section) => {
			gsap.from(section, {
				y: 60,
				opacity: 0,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: { trigger: section, start: 'top 80%' }
			});
		});

		pageEl.querySelectorAll('.parallax-img').forEach((img) => {
			gsap.to(img, {
				y: -30,
				ease: 'none',
				scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 }
			});
		});
	});
</script>

<svelte:head>
	<title>Graceful Error Handling — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-4xl">
		<div class="case-hero mb-16">
			<a
				href="/work"
				class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
			>
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
				</svg>
				Back to Case Studies
			</a>

			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="tag">SvelteKit</span>
				<span class="tag">UX Design</span>
				<span class="tag">Routing</span>
				<span class="text-xs text-slate-500">DrugIndex.it • 2025</span>
			</div>

			<h1 class="text-4xl leading-tight font-black text-white md:text-5xl">
				Graceful Error
				<span class="text-gradient">Handling</span>
			</h1>

			<p class="mt-6 text-lg leading-relaxed text-slate-400">
				Leveraged SvelteKit's routing architecture to intercept undefined paths and unresolvable
				database searches — transforming jarring errors into helpful, on-brand recovery experiences.
			</p>
		</div>

		<!-- Screenshot -->
		<div class="reveal-section mb-20 overflow-hidden rounded-2xl border border-white/10">
			<div class="parallax-img">
				<img src="/drug-404.png" alt="Custom 404 error page design" class="w-full object-cover" />
			</div>
		</div>

		<!-- The Challenge -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">The Challenge</h2>
			<div class="glass-card p-8">
				<p class="leading-relaxed text-slate-300">
					A medical reference platform cannot afford confusing error states. When a clinician
					encounters a broken link or searches for a drug that doesn't exist in the database, the
					default browser error page destroys trust. The challenge was to <strong
						class="text-cyan-400">catch every possible failure mode</strong
					>
					and transform it into a helpful, branded experience that guides users back to productive work.
				</p>
			</div>
		</section>

		<!-- My Approach -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">My Approach</h2>
			<div class="space-y-4">
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">1. SvelteKit Error Boundaries</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Used SvelteKit's +error.svelte pages and handleError hooks to intercept both client-side
						and server-side errors. Built a hierarchy of error boundaries at the route level for
						granular control over error presentation.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">2. Database Miss Handling</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						When an IndexedDB query returns no results for a drug, instead of showing an empty
						state, the app suggests similar drugs, shows popular searches, and provides a direct
						path back to the dashboard — maintaining user flow.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">3. On-Brand Visual Design</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Designed error pages that feel like a natural part of the application. Custom
						illustrations, helpful messaging, and prominent CTAs ensure users never feel lost —
						they're always one click away from the main workspace.
					</p>
				</div>
			</div>
		</section>

		<!-- Impact -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Impact</h2>
			<div class="grid gap-4 sm:grid-cols-3">
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">100%</span>
					<p class="mt-1 text-sm text-slate-400">Error Coverage</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">1-Click</span>
					<p class="mt-1 text-sm text-slate-400">Recovery Flow</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">0</span>
					<p class="mt-1 text-sm text-slate-400">Dead Ends</p>
				</div>
			</div>
		</section>

		<!-- Technologies -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Technologies Used</h2>
			<div class="flex flex-wrap gap-2">
				{#each ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Error Boundaries', 'Progressive Enhancement'] as tech}
					<span class="tag">{tech}</span>
				{/each}
			</div>
		</section>

		<div class="flex items-center justify-between border-t border-white/10 pt-8">
			<a
				href="/work/drugindex-search"
				class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
			>
				← Search Engine
			</a>
			<a
				href="/work/jobjack-lead-gen"
				class="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
			>
				Next: Lead Generation →
			</a>
		</div>
	</div>
</main>
