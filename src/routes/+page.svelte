<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from '$lib/utils/gsap';

	let container: HTMLElement;
	let canvasObj: { orbs: any[]; animationFrame: number };

	onMount(() => {
		// 1. Initial Timeline
		const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

		tl.from('.hero-badge', { y: -30, opacity: 0, duration: 1, delay: 0.2 })
		  .from('.hero-heading', { y: 50, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.6')
		  .from('.glass-hero-card', { y: 100, opacity: 0, scale: 0.95, duration: 1.2, ease: 'expo.out' }, '-=0.8')
		  .from('.card-content', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5');

		// 2. Parallax / Magnetic effect on the massive glass card
		const card = document.querySelector('.glass-hero-card') as HTMLElement;
		
		const handleMouseMove = (e: MouseEvent) => {
			if (!card) return;
			const rect = card.getBoundingClientRect();
			// Calculate mouse position relative to the center of the card
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			
			// Tilt effect
			gsap.to(card, {
				rotationY: (x / rect.width) * 10,
				rotationX: -(y / rect.height) * 10,
				transformPerspective: 1000,
				ease: 'power2.out',
				duration: 0.5
			});
			
			// Highlight glare effect
			gsap.to('.card-glare', {
				x: (x / rect.width) * 100 + '%',
				y: (y / rect.height) * 100 + '%',
				opacity: 1,
				duration: 0.3
			});
		};

		const handleMouseLeave = () => {
			if (!card) return;
			gsap.to(card, { rotationY: 0, rotationX: 0, duration: 1, ease: 'elastic.out(1, 0.3)' });
			gsap.to('.card-glare', { opacity: 0, duration: 0.5 });
		};

		if (card) {
			window.addEventListener('mousemove', handleMouseMove);
			card.addEventListener('mouseleave', handleMouseLeave);
		}

		return () => {
			if (card) {
				window.removeEventListener('mousemove', handleMouseMove);
				card.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	});
</script>

<svelte:head>
	<title>Manoah Kipngeno — Portfolio for actualfood</title>
</svelte:head>

<!-- Ambient Background -->
<div class="mesh-bg"></div>
<div class="noise-overlay"></div>

<section bind:this={container} class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20">
	
	<!-- Header / Greeting -->
	<div class="z-10 text-center mb-12">
		<div class="hero-badge tag-actual mb-6 mx-auto">
			<span class="mr-2 h-2 w-2 animate-pulse rounded-full bg-teal-400 block"></span>
			Exclusive application for actualfood
		</div>
		<h1 class="hero-heading text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
			Hi <span class="text-gradient">actualfood.</span>
		</h1>
		<p class="hero-heading mt-4 text-xl font-medium text-slate-400 md:text-2xl">
			I'm Manoah Kipngeno. Let's talk about building the future.
		</p>
	</div>

	<!-- Massive Glass Card (The "Cover Letter") -->
	<div class="glass-hero-card actual-glass-strong relative z-20 mx-auto w-full max-w-4xl rounded-3xl p-8 md:p-12 lg:p-16">
		<div class="card-glare pointer-events-none absolute inset-0 z-0 h-full w-full rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity"></div>
		
		<div class="card-content relative z-10 flex items-center justify-between border-b border-white/10 pb-8 mb-8">
			<div>
				<h2 class="text-3xl font-bold text-white">Cover Letter & Portfolio</h2>
				<p class="mt-2 text-slate-400">Telecommunication Engineer & SvelteKit Specialist</p>
			</div>
			<div class="hidden h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 border border-teal-500/20 md:flex">
				<svg class="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
			</div>
		</div>

		<div class="card-content text-lg leading-relaxed text-slate-300 space-y-6">
			<p>
				When I saw the role at <strong>actualfood</strong>, I knew I had to build something distinct to introduce myself. You value developers who can <em class="text-teal-400 not-italic font-medium">learn rapidly</em>, who appreciate a high standard of design (like <em class="text-teal-400 not-italic font-medium">glassmorphism</em>), and who master their tools.
			</p>
			<p>
				My core focus is <strong>Svelte and SvelteKit</strong>. I don't just use it; I leverage it to create highly performant, visually complex applications with zero latency. I paired it here with GSAP to prove that complex animations and modern frosted-glass UIs can be built flawlessly on the web.
			</p>
			<p>
				I am not applying with a static PDF. I am applying with a demonstration of what we can build together.
			</p>
		</div>

		<div class="card-content mt-12 flex flex-col items-center gap-4 sm:flex-row">
			<a href="/work" class="group relative overflow-hidden rounded-full bg-teal-500 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]">
				<span class="relative z-10 flex items-center gap-2">
					View My Work
					<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</span>
			</a>
			<div class="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-400">
				<span class="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 border border-white/10">↓</span>
				Scroll for more
			</div>
		</div>
	</div>
</section>

<!-- Additional "Skills" targeted at actualfood -->
<section class="relative z-10 px-4 py-24 mx-auto max-w-6xl">
	<div class="text-center mb-16">
		<h2 class="text-3xl font-bold text-white md:text-5xl">Why I'm the man for the job.</h2>
		<p class="mt-4 text-slate-400 max-w-2xl mx-auto">I align perfectly with the core principles of the engineering culture at actualfood.</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- Skill Card 1 -->
		<div class="actual-glass-card group p-8">
			<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
			</div>
			<h3 class="mb-3 text-xl font-bold text-white">Rapid Learner</h3>
			<p class="text-slate-400 leading-relaxed">
				I transitioned into modern frontend architectures quickly and decisively. Give me documentation and an evening, and I'll give you a working prototype.
			</p>
		</div>

		<!-- Skill Card 2 -->
		<div class="actual-glass-card group p-8">
			<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
			</div>
			<h3 class="mb-3 text-xl font-bold text-white">Aesthetic Driven</h3>
			<p class="text-slate-400 leading-relaxed">
				I don't just implement designs; I enhance them. I specialize in GSAP, complex SVG animations, and implementing flawless, highly performant frosted glass UI.
			</p>
		</div>

		<!-- Skill Card 3 -->
		<div class="actual-glass-card group p-8">
			<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
			</div>
			<h3 class="mb-3 text-xl font-bold text-white">SvelteKit Mastery</h3>
			<p class="text-slate-400 leading-relaxed">
				Svelte is my weapon of choice. I write zero-boilerplate, highly reactive code relying on deep knowledge of modern Svelte APIs.
			</p>
		</div>
	</div>
</section>