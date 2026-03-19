<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	const caseStudies = [
		{
			slug: 'drugindex-d3-viz',
			title: 'Interactive Drug Price Visualization',
			company: 'DrugIndex.it',
			tags: ['D3.js', 'SvelteKit', 'Dexie.js'],
			description:
				'Dynamic multi-series SVG line charts visualizing drug price variations across 20 historical editions with real-time data binding.',
			featured: true
		},
		{
			slug: 'drugindex-search',
			title: 'Zero-Latency Search Engine',
			company: 'DrugIndex.it',
			tags: ['Fuse.js', 'IndexedDB', 'Performance'],
			description:
				'Client-side search engine aggregating multiple database collections with a custom multi-tiered sorting algorithm.',
			featured: false
		},
		{
			slug: 'drugindex-error-handling',
			title: 'Graceful Error Handling & Routing',
			company: 'DrugIndex.it',
			tags: ['SvelteKit', 'UX Design', 'Routing'],
			description:
				"On-brand error pages with seamless recovery flows leveraging SvelteKit's routing architecture.",
			featured: false
		},
		{
			slug: 'jobjack-lead-gen',
			title: 'Lead Generation & HR Automation',
			company: 'JobJack Kenya',
			tags: ['Operations', 'Strategy', 'Automation'],
			description:
				'Built a partner database of 100+ clients through systematic outreach and developed a 48-hour job placement system.',
			featured: false
		}
	];

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.page-header > *'), {
			y: 50,
			opacity: 0,
			duration: 1,
			stagger: 0.15,
			ease: 'power3.out'
		});

		gsap.from(pageEl.querySelectorAll('.case-card'), {
			y: 80,
			opacity: 0,
			duration: 0.9,
			stagger: 0.2,
			ease: 'power3.out',
			scrollTrigger: { trigger: '.case-grid', start: 'top 80%' }
		});
	});
</script>

<svelte:head>
	<title>Case Studies — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-6xl">
		<!-- Header -->
		<div class="page-header mb-20 text-center">
			<span class="tag mb-4 inline-block">Portfolio</span>
			<h1 class="mt-4 text-5xl font-black text-white md:text-6xl">Case Studies</h1>
			<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
				Each project below is a deep dive into real engineering challenges I've solved. From data
				visualization to search optimization — these are the stories behind the code.
			</p>
		</div>

		<!-- Case Studies Grid -->
		<div class="case-grid grid gap-6">
			{#each caseStudies as study, i}
				<a
					href="/work/{study.slug}"
					class="case-card glass-card group relative overflow-hidden p-8
						{study.featured ? 'md:col-span-2' : ''}"
				>
					<!-- Company badge -->
					<div class="mb-4 flex items-center justify-between">
						<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">
							{study.company}
						</span>
						<span class="text-xs text-slate-600">0{i + 1}</span>
					</div>

					<!-- Tags -->
					<div class="mb-4 flex flex-wrap gap-2">
						{#each study.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>

					<!-- Title -->
					<h2
						class="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400 {study.featured
							? 'md:text-3xl'
							: ''}"
					>
						{study.title}
					</h2>

					<!-- Description -->
					<p class="text-slate-400 {study.featured ? 'max-w-2xl' : ''}">
						{study.description}
					</p>

					<!-- Arrow -->
					<div
						class="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
					>
						Read full case study
						<svg
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</div>

					<!-- Hover glow -->
					<div
						class="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
						aria-hidden="true"
					></div>
				</a>
			{/each}
		</div>
	</div>
</main>
