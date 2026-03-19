<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	onMount(() => {
		// Hero entrance
		gsap.from(pageEl.querySelectorAll('.case-hero > *'), {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 0.12,
			ease: 'power3.out'
		});

		// Sections reveal
		pageEl.querySelectorAll('.reveal-section').forEach((section) => {
			gsap.from(section, {
				y: 60,
				opacity: 0,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: { trigger: section, start: 'top 80%' }
			});
		});

		// Image parallax
		pageEl.querySelectorAll('.parallax-img').forEach((img) => {
			gsap.to(img, {
				y: -30,
				ease: 'none',
				scrollTrigger: {
					trigger: img,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1
				}
			});
		});
	});
</script>

<svelte:head>
	<title>Interactive Data Visualization — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-4xl">
		<!-- Hero -->
		<div class="case-hero mb-16">
			<a href="/work" class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
				</svg>
				Back to Case Studies
			</a>

			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="tag">D3.js</span>
				<span class="tag">SvelteKit</span>
				<span class="tag">Dexie.js</span>
				<span class="text-xs text-slate-500">DrugIndex.it • 2025</span>
			</div>

			<h1 class="text-4xl font-black leading-tight text-white md:text-5xl">
				Interactive Drug Price
				<span class="text-gradient">Visualization</span>
			</h1>

			<p class="mt-6 text-lg leading-relaxed text-slate-400">
				Designed and built a dynamic, multi-series SVG line chart that lets clinicians and pharmacists
				visualize complex drug price variations across 20 historical publication editions — all rendered
				client-side with zero network latency.
			</p>
		</div>

		<!-- Screenshot -->
		<div class="reveal-section mb-20 overflow-hidden rounded-2xl border border-white/10">
			<div class="parallax-img">
				<img
					src="/drug-chart.png"
					alt="D3.js interactive line chart showing drug price trends"
					class="w-full object-cover"
				/>
			</div>
		</div>

		<!-- The Challenge -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">The Challenge</h2>
			<div class="glass-card p-8">
				<p class="leading-relaxed text-slate-300">
					DrugIndex.it maintains a massive dataset of drug pricing across multiple editions of Kenya's pharmaceutical
					directory. Clinicians needed a way to <strong class="text-cyan-400">visually track price changes</strong> over time
					for individual drugs — but the data was trapped in static tables. The challenge was to build an interactive,
					performant visualization that could render thousands of data points instantly, entirely client-side.
				</p>
			</div>
		</section>

		<!-- My Approach -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">My Approach</h2>
			<div class="space-y-4">
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">1. D3.js + Svelte Integration</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Integrated D3.js directly into Svelte components, using Svelte's reactivity to drive D3 transitions.
						Instead of letting D3 own the DOM, I used it purely for scales, axes, and path generation — keeping
						Svelte in control of rendering for optimal performance.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">2. Dexie.js LiveQuery Binding</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Engineered real-time UI data binding by integrating Dexie.js (liveQuery) with Svelte's reactivity model.
						Charts and tables automatically re-render when IndexedDB data changes — no network requests, no loading states.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">3. Multi-Series Support</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Built support for overlaying multiple drug price series on a single chart with distinct color coding,
						interactive tooltips, and smooth animated transitions between data states.
					</p>
				</div>
			</div>
		</section>

		<!-- Impact -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Impact</h2>
			<div class="grid gap-4 sm:grid-cols-3">
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">20</span>
					<p class="mt-1 text-sm text-slate-400">Historical Editions</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">0ms</span>
					<p class="mt-1 text-sm text-slate-400">Network Latency</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">60fps</span>
					<p class="mt-1 text-sm text-slate-400">Smooth Animations</p>
				</div>
			</div>
		</section>

		<!-- Technologies -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Technologies Used</h2>
			<div class="flex flex-wrap gap-2">
				{#each ['SvelteKit', 'D3.js', 'Dexie.js', 'IndexedDB', 'TypeScript', 'Tailwind CSS', 'SVG'] as tech}
					<span class="tag">{tech}</span>
				{/each}
			</div>
		</section>

		<!-- Navigation -->
		<div class="flex items-center justify-between border-t border-white/10 pt-8">
			<a href="/work" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">
				← All Case Studies
			</a>
			<a href="/work/drugindex-search" class="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300">
				Next: Search Engine →
			</a>
		</div>
	</div>
</main>
