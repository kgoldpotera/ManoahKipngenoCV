<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap, ScrollTrigger } from '$lib/utils/gsap';

	let pageEl: HTMLElement;

	onMount(() => {
		gsap.from(pageEl.querySelectorAll('.contact-hero > *'), {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 0.12,
			ease: 'power3.out'
		});

		gsap.from(pageEl.querySelectorAll('.contact-card'), {
			y: 50,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: 'power3.out',
			scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' }
		});

		gsap.from(pageEl.querySelectorAll('.referee-card'), {
			y: 60,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: 'power3.out',
			scrollTrigger: { trigger: '.referee-grid', start: 'top 80%' }
		});
	});
</script>

<svelte:head>
	<title>Contact — Manoah Kipngeno</title>
</svelte:head>

<main bind:this={pageEl} class="px-6 py-32">
	<div class="mx-auto max-w-5xl">
		<!-- Hero -->
		<div class="contact-hero mb-20 text-center">
			<span class="tag mb-4 inline-block">Get in Touch</span>
			<h1 class="mt-4 text-5xl font-black text-white md:text-6xl">
				Let's <span class="text-gradient">Connect</span>
			</h1>
			<p class="mx-auto mt-6 max-w-xl text-lg text-slate-400">
				Ready to discuss how I can contribute to your team? Reach out through any of these channels.
			</p>
		</div>

		<!-- Contact Methods -->
		<div class="contact-grid mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<a
				href="mailto:koechmanoah32@gmail.com"
				class="contact-card glass-card group flex items-center gap-4 p-6"
			>
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
				>
					<svg
						class="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Email</span>
					<p class="font-semibold text-white transition-colors group-hover:text-cyan-400">
						koechmanoah32@gmail.com
					</p>
				</div>
			</a>

			<a href="tel:+254706487376" class="contact-card glass-card group flex items-center gap-4 p-6">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
				>
					<svg
						class="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Phone</span>
					<p class="font-semibold text-white transition-colors group-hover:text-cyan-400">
						+254 706 487 376
					</p>
				</div>
			</a>

			<a
				href="https://www.linkedin.com/in/manoah-kipngeno"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-card glass-card group flex items-center gap-4 p-6"
			>
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
				>
					<svg
						class="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">LinkedIn</span>
					<p class="font-semibold text-white transition-colors group-hover:text-cyan-400">
						manoah-kipngeno
					</p>
				</div>
			</a>

			<a
				href="https://github.com/kgoldpotera"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-card glass-card group flex items-center gap-4 p-6"
			>
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
				>
					<svg
						class="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">GitHub</span>
					<p class="font-semibold text-white transition-colors group-hover:text-cyan-400">
						kgoldpotera
					</p>
				</div>
			</a>

			<a
				href="https://medium.com/@koechmanoah32"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-card glass-card group flex items-center gap-4 p-6"
			>
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
				>
					<svg
						class="h-5 w-5 text-slate-400 transition-colors group-hover:text-cyan-400"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Medium</span>
					<p class="font-semibold text-white transition-colors group-hover:text-cyan-400">
						@koechmanoah32
					</p>
				</div>
			</a>

			<div class="contact-card glass-card flex items-center gap-4 p-6">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10"
				>
					<svg
						class="h-5 w-5 text-slate-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
						/>
					</svg>
				</div>
				<div>
					<span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Location</span>
					<p class="font-semibold text-white">Nairobi, Kenya</p>
				</div>
			</div>
		</div>

		<!-- Professional Referees -->
		<section>
			<h2 class="mb-10 text-center text-3xl font-bold text-white">Professional Referees</h2>

			<div class="referee-grid grid gap-6 md:grid-cols-2">
				<div class="referee-card glass-card p-8">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg font-bold text-cyan-400"
						>
							JK
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Jesse Kimotho</h3>
							<p class="text-sm font-medium text-cyan-400">Product Manager • DrugIndex.it</p>
						</div>
					</div>
					<div class="space-y-3">
						<a
							href="tel:+254741041698"
							class="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
						>
							<svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							+254 741 041 698
						</a>
						<a
							href="mailto:jn.jug97@gmail.com"
							class="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
						>
							<svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
							jn.jug97@gmail.com
						</a>
					</div>
				</div>

				<div class="referee-card glass-card p-8">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg font-bold text-emerald-400"
						>
							CM
						</div>
						<div>
							<h3 class="text-lg font-bold text-white">Charles Musandu</h3>
							<p class="text-sm font-medium text-emerald-400">
								M-pesa Operations Officer • Safaricom
							</p>
						</div>
					</div>
					<div class="space-y-3">
						<a
							href="tel:+254721420119"
							class="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
						>
							<svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							+254 721 420 119
						</a>
						<a
							href="mailto:charlesmusandu@gmail.com"
							class="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-400"
						>
							<svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
							charlesmusandu@gmail.com
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
