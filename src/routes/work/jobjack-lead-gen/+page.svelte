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
	});
</script>

<svelte:head>
	<title>Lead Generation & HR Automation — Manoah Kipngeno</title>
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
				<span class="tag">Operations</span>
				<span class="tag">Strategy</span>
				<span class="tag">Automation</span>
				<span class="text-xs text-slate-500">JobJack Kenya • 2019-2020</span>
			</div>

			<h1 class="text-4xl leading-tight font-black text-white md:text-5xl">
				Lead Generation &
				<span class="text-gradient">HR Automation</span>
			</h1>

			<p class="mt-6 text-lg leading-relaxed text-slate-400">
				At JobJack Kenya — an online platform for entry-level jobs — I drove business development,
				building a partner database from scratch and engineering a system that reduced job placement
				turnaround to under 48 hours.
			</p>
		</div>

		<!-- The Challenge -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">The Challenge</h2>
			<div class="glass-card p-8">
				<p class="leading-relaxed text-slate-300">
					JobJack Kenya needed to rapidly scale its employer network while maintaining quality
					placements. The challenge was twofold: <strong class="text-cyan-400"
						>acquire 100+ employer partners</strong
					>
					through systematic outreach, and develop HR processes that could turn a job posting into a successful
					placement in record time.
				</p>
			</div>
		</section>

		<!-- My Approach -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">My Approach</h2>
			<div class="space-y-4">
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">1. Systematic Lead Generation</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Developed a multi-channel outreach strategy combining cold email, cold calling, and
						social media. Created templated outreach sequences, tracked conversion rates, and
						iterated on messaging to optimize response rates across 100+ employer targets.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">2. 48-Hour Placement System</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Engineered a streamlined candidate selection and HR staffing workflow that ensured job
						placements within 48 hours of posting. This involved pre-screening candidate pools,
						automating matching criteria, and establishing rapid feedback loops with employers.
					</p>
				</div>
				<div class="glass-card p-6">
					<h3 class="mb-2 font-bold text-cyan-400">3. Partner Relationship Management</h3>
					<p class="text-sm leading-relaxed text-slate-400">
						Built and maintained an organized partner database with detailed interaction histories,
						follow-up schedules, and conversion tracking. This systematic approach transformed cold
						outreach into lasting business relationships.
					</p>
				</div>
			</div>
		</section>

		<!-- Impact -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Impact</h2>
			<div class="grid gap-4 sm:grid-cols-3">
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">100+</span>
					<p class="mt-1 text-sm text-slate-400">Clients Reached</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">48hr</span>
					<p class="mt-1 text-sm text-slate-400">Placement Speed</p>
				</div>
				<div class="glass-card p-6 text-center">
					<span class="text-3xl font-black text-white">50+</span>
					<p class="mt-1 text-sm text-slate-400">People Placed</p>
				</div>
			</div>
		</section>

		<!-- Key Skills -->
		<section class="reveal-section mb-16">
			<h2 class="mb-6 text-2xl font-bold text-white">Key Skills Demonstrated</h2>
			<div class="flex flex-wrap gap-2">
				{#each ['Business Development', 'Cold Outreach', 'HR Staffing', 'Process Design', 'Lead Generation', 'Stakeholder Management'] as skill}
					<span class="tag">{skill}</span>
				{/each}
			</div>
		</section>

		<div class="flex items-center justify-between border-t border-white/10 pt-8">
			<a
				href="/work/drugindex-error-handling"
				class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
			>
				← Error Handling
			</a>
			<a
				href="/work"
				class="text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
			>
				All Case Studies →
			</a>
		</div>
	</div>
</main>
