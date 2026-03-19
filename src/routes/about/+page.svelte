<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	const skills = [
		{
			category: 'Frontend',
			items: [
				'SvelteKit',
				'Svelte 5 Runes',
				'TypeScript',
				'Tailwind CSS',
				'GSAP',
				'D3.js',
				'HTML5/CSS3'
			]
		},
		{
			category: 'Backend & Data',
			items: ['Python', 'Supabase', 'IndexedDB / Dexie.js', 'Fuse.js', 'REST APIs']
		},
		{
			category: 'Tools & Platforms',
			items: ['Git / GitHub', 'Vercel', 'Vite', 'Tauri', 'VS Code', 'Figma']
		},
		{
			category: 'Soft Skills',
			items: [
				'Quick Learner',
				'Problem Solving',
				'Technical Writing',
				'Team Collaboration',
				'Process Design'
			]
		}
	];

	const timeline = [
		{
			period: 'May 2025 — Aug 2025',
			role: 'Software Engineering Intern',
			company: 'DrugIndex.it',
			description:
				"Architected front-end data visualization tools, built zero-latency search, and designed error handling systems for East Africa's premier digital medical directory.",
			current: true
		},
		{
			period: '2022 — Present',
			role: 'BSc. Telecommunication & IT (Finalist)',
			company: 'Kenyatta University',
			description:
				'Core focus: bridging modern software engineering with telecommunications infrastructure. Strong foundation in C, Python, and systems design.',
			current: true
		},
		{
			period: 'Apr 2019 — 2020',
			role: 'Business Development & Operations',
			company: 'JobJack Kenya',
			description:
				'Led outreach to 100+ clients, built partner databases, and designed a 48-hour job placement system.',
			current: false
		},
		{
			period: '2018 — 2022',
			role: 'Kenya Certificate of Secondary Education',
			company: 'Alliance High School',
			description:
				'Strong foundation in sciences and mathematics, establishing rigorous analytical skills required for engineering.',
			current: false
		}
	];

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.page-hero > *'), {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 0.12,
			ease: 'power3.out'
		});

		// Info cards stagger
		gsap.from(pageEl.querySelectorAll('.info-card'), {
			y: 40,
			opacity: 0,
			duration: 0.7,
			stagger: 0.1,
			ease: 'power3.out',
			scrollTrigger: { trigger: '.info-grid', start: 'top 80%' }
		});

		// Skills animation
		pageEl.querySelectorAll('.skill-group').forEach((group) => {
			gsap.from(group, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: { trigger: group, start: 'top 85%' }
			});

			gsap.from(group.querySelectorAll('.skill-tag'), {
				scale: 0.8,
				opacity: 0,
				duration: 0.4,
				stagger: 0.05,
				ease: 'back.out(1.5)',
				scrollTrigger: { trigger: group, start: 'top 85%' }
			});
		});

		// Timeline animation
		pageEl.querySelectorAll('.timeline-item').forEach((item, i) => {
			gsap.from(item, {
				x: i % 2 === 0 ? -60 : 60,
				opacity: 0,
				duration: 0.9,
				ease: 'power3.out',
				scrollTrigger: { trigger: item, start: 'top 80%' }
			});
		});

		// Publications
		gsap.from(pageEl.querySelectorAll('.pub-card'), {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: 'power3.out',
			scrollTrigger: { trigger: '.pub-grid', start: 'top 80%' }
		});
	});
</script>

<svelte:head>
	<title>About — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-5xl">
		<!-- Hero -->
		<div class="page-hero mb-20">
			<span class="tag mb-4 inline-block">About Me</span>
			<h1 class="mt-4 text-5xl font-black text-white md:text-6xl">
				Manoah <span class="text-gradient">Kipngeno</span>
			</h1>
			<p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
				Telecommunication Engineering finalist at Kenyatta University with a passion for building
				delightful web experiences. I specialize in SvelteKit and believe that every interface
				should feel responsive, intuitive, and alive.
			</p>
		</div>

		<!-- Quick Info -->
		<div class="info-grid mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<div class="info-card glass-card p-5">
				<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Location</span>
				<p class="mt-1 font-semibold text-white">Nairobi, Kenya</p>
			</div>
			<div class="info-card glass-card p-5">
				<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Phone</span>
				<a
					href="tel:+254706487376"
					class="mt-1 block font-semibold text-white transition-colors hover:text-cyan-400"
					>+254 706 487 376</a
				>
			</div>
			<div class="info-card glass-card p-5">
				<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Email</span>
				<a
					href="mailto:koechmanoah32@gmail.com"
					class="mt-1 block font-semibold text-white transition-colors hover:text-cyan-400"
					>koechmanoah32@gmail.com</a
				>
			</div>
			<div class="info-card glass-card p-5">
				<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">GitHub</span>
				<a
					href="https://github.com/kgoldpotera"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-1 block font-semibold text-white transition-colors hover:text-cyan-400"
					>kgoldpotera</a
				>
			</div>
		</div>

		<!-- Skills -->
		<section class="mb-20">
			<h2 class="mb-10 text-3xl font-bold text-white">Skills & Technologies</h2>
			<div class="grid gap-6 md:grid-cols-2">
				{#each skills as group}
					<div class="skill-group glass-card p-6">
						<h3 class="mb-4 text-sm font-bold tracking-widest text-cyan-400 uppercase">
							{group.category}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each group.items as item}
								<span class="skill-tag tag">{item}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Timeline -->
		<section class="mb-20">
			<h2 class="mb-10 text-3xl font-bold text-white">Experience & Education</h2>
			<div class="space-y-6">
				{#each timeline as item}
					<div class="timeline-item glass-card flex gap-6 p-6">
						<div class="hidden flex-shrink-0 flex-col items-center sm:flex">
							<div
								class="h-3 w-3 rounded-full {item.current
									? 'bg-cyan-400 shadow-lg shadow-cyan-400/30'
									: 'bg-slate-600'}"
							></div>
							<div class="mt-2 h-full w-px bg-white/10"></div>
						</div>
						<div class="flex-1">
							<div class="mb-1 flex flex-wrap items-center gap-3">
								<span class="text-xs font-bold tracking-widest text-slate-500 uppercase"
									>{item.period}</span
								>
								{#if item.current}
									<span
										class="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-400"
										>Current</span
									>
								{/if}
							</div>
							<h3 class="text-lg font-bold text-white">{item.role}</h3>
							<p class="text-sm font-medium text-cyan-400">{item.company}</p>
							<p class="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Publications -->
		<section class="mb-20">
			<h2 class="mb-10 text-3xl font-bold text-white">Publications</h2>
			<div class="pub-grid grid gap-6 md:grid-cols-2">
				<a
					href="https://medium.com/@koechmanoah32"
					target="_blank"
					rel="noopener noreferrer"
					class="pub-card glass-card group p-6"
				>
					<span class="text-xs font-bold text-cyan-400">Drug Index</span>
					<h3 class="mt-2 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
						Modernizing Kenya's Most Trusted Drug Reference
					</h3>
					<p class="mt-2 text-sm text-slate-400">
						Inside the engineering and design process behind modernizing Kenya's most trusted drug
						reference platform.
					</p>
					<span class="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
						10 min read
						<svg
							class="h-3 w-3 transition-transform group-hover:translate-x-0.5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</span>
				</a>
				<a
					href="https://medium.com/@koechmanoah32"
					target="_blank"
					rel="noopener noreferrer"
					class="pub-card glass-card group p-6"
				>
					<span class="text-xs font-bold text-slate-400">Design Critique</span>
					<h3 class="mt-2 text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
						A Critical Examination of Apple's "Liquid Glass" UI
					</h3>
					<p class="mt-2 text-sm text-slate-400">
						Analyzing performance trade-offs and accessibility gaps in Apple's modern design
						language.
					</p>
					<span class="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
						9 min read
						<svg
							class="h-3 w-3 transition-transform group-hover:translate-x-0.5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</span>
				</a>
			</div>
		</section>

		<!-- CTA -->
		<div class="glass-card p-10 text-center">
			<h2 class="text-2xl font-bold text-white">Want to know more?</h2>
			<p class="mt-2 text-slate-400">
				Check out my case studies or read my cover letter for actualfood.
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-4">
				<a
					href="/work"
					class="rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
				>
					Case Studies
				</a>
				<a
					href="/cover-letter"
					class="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
				>
					Cover Letter
				</a>
			</div>
		</div>
	</div>
</main>
