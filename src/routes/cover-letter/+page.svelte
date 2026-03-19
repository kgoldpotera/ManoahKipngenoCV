<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.letter-hero > *'), {
			y: 60, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out'
		});

		pageEl.querySelectorAll('.letter-para').forEach((p, i) => {
			gsap.from(p, {
				y: 40, opacity: 0, duration: 0.8, delay: i * 0.05, ease: 'power3.out',
				scrollTrigger: { trigger: p, start: 'top 85%' }
			});
		});

		gsap.from(pageEl.querySelectorAll('.highlight-card'), {
			x: -40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
			scrollTrigger: { trigger: '.highlights', start: 'top 80%' }
		});
	});
</script>

<svelte:head>
	<title>Cover Letter for actualfood — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-3xl">
		<!-- Hero -->
		<div class="letter-hero mb-16 text-center">
			<span class="tag mb-4 inline-block">Cover Letter</span>
			<h1 class="mt-4 text-4xl font-black text-white md:text-5xl">
				Dear <span class="text-gradient">actualfood</span> Team
			</h1>
			<p class="mt-4 text-slate-500">March 2026 • Nairobi, Kenya</p>
		</div>

		<!-- Letter Body -->
		<div class="glass-card p-8 md:p-12">
			<div class="prose prose-invert prose-lg max-w-none">
				<p class="letter-para text-slate-300 leading-relaxed">
					I'm Manoah Kipngeno, and I'm writing to express my enthusiasm for joining the
					<strong class="text-cyan-400">actualfood</strong> development team. When I discovered that
					your team values developers who can <em>learn</em> — who embrace new challenges and
					grow through them — I knew this was the right fit. That philosophy mirrors exactly
					how I've built my career.
				</p>

				<p class="letter-para text-slate-300 leading-relaxed">
					This portfolio itself is my best argument. Rather than send a PDF, I built you a
					<strong class="text-cyan-400">multi-page SvelteKit application</strong> with glassmorphism design,
					GSAP-powered animations, and page-based routing — because I believe showing is more
					compelling than telling. Every frosted glass card, every scroll-triggered animation,
					every smooth page transition you see here was crafted to demonstrate the kind of
					attention to detail I'd bring to your team.
				</p>

				<p class="letter-para text-slate-300 leading-relaxed">
					At <strong class="text-white">DrugIndex.it</strong>, I was thrown into a production codebase
					serving medical professionals across East Africa. Within weeks, I was:
				</p>
			</div>

			<!-- Highlights -->
			<div class="highlights my-8 space-y-3">
				<div class="highlight-card flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
					<div class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400">1</div>
					<p class="text-sm leading-relaxed text-slate-300">
						<strong class="text-white">Building interactive data visualizations</strong> with D3.js and
						Svelte, rendering multi-series charts from IndexedDB with zero network latency.
					</p>
				</div>
				<div class="highlight-card flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
					<div class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400">2</div>
					<p class="text-sm leading-relaxed text-slate-300">
						<strong class="text-white">Engineering a zero-latency search engine</strong> with custom
						sorting algorithms that prioritize exact matches over fuzzy results.
					</p>
				</div>
				<div class="highlight-card flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
					<div class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-400">3</div>
					<p class="text-sm leading-relaxed text-slate-300">
						<strong class="text-white">Designing graceful error handling</strong> using SvelteKit's
						routing architecture to transform dead ends into recovery flows.
					</p>
				</div>
			</div>

			<div class="prose prose-invert prose-lg max-w-none">
				<p class="letter-para text-slate-300 leading-relaxed">
					These weren't tutorials — they were production features used by real clinicians.
					I learned D3.js, Dexie.js, and Fuse.js on the job because the project demanded it.
					That's what I do: <strong class="text-cyan-400">I identify what needs to be learned, and I learn it fast</strong>.
				</p>

				<p class="letter-para text-slate-300 leading-relaxed">
					I noticed actualfood favors glassmorphism and frosted-glass UI patterns. So I built this
					entire portfolio around that aesthetic — not because I already knew it, but because I
					spent time studying your design language and implementing it. The animated mesh backgrounds,
					the backdrop-blur glass cards, the GSAP scroll animations — all built specifically to
					show you that I can adapt to your visual standards quickly.
				</p>

				<p class="letter-para text-slate-300 leading-relaxed">
					My technical foundation is in <strong class="text-white">SvelteKit, TypeScript, and Tailwind CSS</strong>.
					I'm comfortable with Svelte 5 runes, server-side rendering, file-based routing, and the
					full SvelteKit ecosystem. But more importantly, I'm the kind of developer who doesn't
					just use a framework — I understand <em>why</em> it works, which means I can debug the
					hard problems and architect solutions that scale.
				</p>

				<p class="letter-para text-slate-300 leading-relaxed">
					I would love the opportunity to bring my energy, my ability to learn, and my SvelteKit
					expertise to actualfood. I'm ready to start contributing from day one.
				</p>

				<div class="letter-para mt-10 border-t border-white/10 pt-8">
					<p class="text-slate-300">With sincere enthusiasm,</p>
					<p class="mt-4 text-2xl font-black text-white">Manoah Kipngeno</p>
					<div class="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
						<a href="mailto:koechmanoah32@gmail.com" class="transition-colors hover:text-cyan-400">koechmanoah32@gmail.com</a>
						<a href="tel:+254706487376" class="transition-colors hover:text-cyan-400">+254 706 487 376</a>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-12 flex flex-wrap justify-center gap-4">
			<a href="/work" class="rounded-full bg-cyan-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25">
				See My Work
			</a>
			<a href="/contact" class="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white">
				Get in Touch
			</a>
		</div>
	</div>
</main>
