<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.case-hero > *'), {
			y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
		});

		pageEl.querySelectorAll('.reveal-section').forEach((section) => {
			gsap.from(section, {
				y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
				scrollTrigger: { trigger: section, start: 'top 80%' }
			});
		});

		pageEl.querySelectorAll('.parallax-img').forEach((img) => {
			gsap.to(img, {
				y: -30, ease: 'none',
				scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 }
			});
		});
	});
</script>

<svelte:head>
	<title>Zero-Latency Search Engine — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-4xl">
		<div class="case-hero mb-16">
			<a href="/work" class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
				</svg>
				Back to Case Studies
			</a>

			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="tag">Fuse.js</span>
				<span class="tag">IndexedDB</span>
				<span class="tag">Performance</span>
				<span class="text-xs text-slate-500">DrugIndex.it • 2025</span>
			</div>

			<h1 class="text-4xl font-black leading-tight text-white md:text-5xl">
				Zero-Latency
				<span class="text-gradient">Search Engine</span>
			</h1>

			<p class="mt-6 text-lg leading-relaxed text-slate-400">
				Built a debounced, client-side search engine that queries and aggregates multiple local
				database collections simultaneously — returning results before you finish typing.
			</p>
		</div>

		<!-- Screenshot -->
		<div class="reveal-section mb-20 overflow-hidden rounded-2xl border border-white/10">
			<div class="parallax-img">
				<img src="/drug-search.png" alt="Intelligent search interface" class="w-full object-cover" />
			</div>
		</div>

		<!-- The Challenge -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">The Challenge</h2>
			<div class="glass-card p-8">
				<p class="leading-relaxed text-slate-300">
					Medical professionals need <strong class="text-cyan-400">instant access</strong> to drug information.
					Traditional server-side search introduces latency, loading spinners, and failed requests on poor connections.
					The challenge was to build a search experience that feels instantaneous — querying thousands of drug entries
					across multiple collections without a single network request.
				</p>
			</div>
		</section>

		<!-- My Approach -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">My Approach</h2>
			<div class="space-y-4">
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">1. Multi-Collection Aggregation</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Designed a search architecture that simultaneously queries drugs, active ingredients, diseases,
						and manufacturer collections in IndexedDB. Results are merged and deduplicated before presentation.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">2. Custom Sorting Algorithm</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Engineered a multi-tiered sorting algorithm on top of Fuse.js to override default fuzzy scoring.
						Prioritizes exact matches, then prefix matches, then token matches — ensuring the most relevant
						drug surfaces first, every time.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">3. Debounced Input with Instant Feedback</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Implemented smart debouncing that balances responsiveness with performance. The UI provides
						instant visual feedback while the search engine processes in the background, creating the
						perception of zero latency.
					</p>
				</div>
			</div>
		</section>

		<!-- Impact -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Impact</h2>
			<div class="grid gap-4 sm:grid-cols-3">
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">&lt;5ms</span>
					<p class="mt-1 text-sm text-slate-400">Search Response</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">4</span>
					<p class="mt-1 text-sm text-slate-400">Collections Queried</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">0</span>
					<p class="mt-1 text-sm text-slate-400">Network Requests</p>
				</div>
			</div>
		</section>

		<!-- Technologies -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Technologies Used</h2>
			<div class="flex flex-wrap gap-2">
				{#each ['SvelteKit', 'Fuse.js', 'Dexie.js', 'IndexedDB', 'TypeScript', 'Tailwind CSS'] as tech}
					<span class="tag">{tech}</span>
				{/each}
			</div>
		</section>

		<div class="flex items-center justify-between border-t border-white/10 pt-8">
			<a href="/work/drugindex-d3-viz" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
				← Data Visualization
			</a>
			<a href="/work/drugindex-error-handling" class="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
				Next: Error Handling →
			</a>
		</div>
	</div>
</main>
