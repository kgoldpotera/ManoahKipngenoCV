<script>
	// Traditional Web Layout: Manoah Kipngeno Portfolio
	// Vertical Stacking, Active Hyperlinks, Social SVGs, Black Lightbox

	// --- LIGHTBOX STATE (SVELTE 5 RUNES) ---
	let isLightboxOpen = $state(false);
	let lightboxSrc = $state('');
	let lightboxAlt = $state('');

	function openLightbox(src, alt) {
		lightboxSrc = src;
		lightboxAlt = alt;
		isLightboxOpen = true;
		if (typeof window !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		isLightboxOpen = false;
		if (typeof window !== 'undefined') {
			document.body.style.overflow = 'auto';
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Escape' && isLightboxOpen) {
			closeLightbox();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<span class="text-xl font-extrabold text-slate-900">MK.</span>
		<ul class="hidden space-x-8 text-sm font-semibold text-slate-600 md:flex">
			<li><a href="#about" class="transition-colors hover:text-blue-700">About</a></li>
			<li><a href="#experience" class="transition-colors hover:text-blue-700">Experience</a></li>
			<li><a href="#education" class="transition-colors hover:text-blue-700">Education</a></li>
			<li>
				<a href="#publications" class="transition-colors hover:text-blue-700">Publications</a>
			</li>
			<li><a href="#referees" class="transition-colors hover:text-blue-700">Referees</a></li>
		</ul>
		<a
			href="#referees"
			class="rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-800"
		>
			Contact
		</a>
	</div>
</nav>

<main
	class="flex min-h-screen flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900"
>
	<section class="flex flex-col items-center justify-center px-6 py-24 text-center md:py-32">
		<div class="mx-auto max-w-4xl">
			<h1
				class="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl"
			>
				Manoah Kipngeno
			</h1>
			<h2 class="mb-10 text-2xl font-light tracking-wide text-slate-500 sm:text-3xl">
				Telecommunication & Software Engineering
			</h2>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
				Bridging modern software development with telecommunications infrastructure. Specializing in
				responsive front-end applications and robust Python backend systems.
			</p>

			<div class="mt-10 flex justify-center gap-6">
				<a
					href="https://github.com/kgoldpotera"
					target="_blank"
					rel="noopener noreferrer"
					class="text-slate-400 transition-colors hover:text-slate-900"
					aria-label="GitHub"
				>
					<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/manoah-kipngeno"
					target="_blank"
					rel="noopener noreferrer"
					class="text-slate-400 transition-colors hover:text-blue-700"
					aria-label="LinkedIn"
				>
					<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>

	<section id="about" class="border-y border-slate-200 bg-slate-50 px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<div class="flex flex-col gap-16">
				<div class="transition-all duration-500 hover:translate-y-[-2px]">
					<h3 class="mb-6 text-3xl font-bold text-slate-900">About Me</h3>
					<p class="mb-8 text-lg leading-relaxed text-slate-700">
						I am a Telecommunication and Information Technology finalist seeking to leverage my
						engineering background and software development skills. I specialize in building
						responsive front-end applications with SvelteKit and creating robust backend scripts
						using Python.
					</p>
					<div class="overflow-x-auto">
						<table class="w-full min-w-[400px] text-left text-lg text-slate-700">
							<tbody>
								<tr class="border-b border-slate-200">
									<th class="w-1/3 py-3 font-semibold text-slate-900">Location:</th>
									<td class="py-3">Nairobi, Kenya</td>
								</tr>
								<tr class="border-b border-slate-200">
									<th class="py-3 font-semibold text-slate-900">Phone:</th>
									<td class="py-3">
										<a href="tel:+254706487376" class="text-blue-700 hover:underline"
											>+254 706 487 376</a
										>
									</td>
								</tr>
								<tr class="border-b border-slate-200">
									<th class="py-3 font-semibold text-slate-900">Email:</th>
									<td class="py-3 font-medium">
										<a href="mailto:koechmanoah32@gmail.com" class="text-blue-700 hover:underline"
											>koechmanoah32@gmail.com</a
										>
									</td>
								</tr>
								<tr class="border-b border-slate-200">
									<th class="py-3 font-semibold text-slate-900">LinkedIn:</th>
									<td class="py-3">
										<a
											href="https://www.linkedin.com/in/manoah-kipngeno"
											target="_blank"
											rel="noopener noreferrer"
											class="text-blue-700 hover:underline">manoah-kipngeno</a
										>
									</td>
								</tr>
								<tr>
									<th class="py-3 font-semibold text-slate-900">GitHub:</th>
									<td class="py-3">
										<a
											href="https://github.com/kgoldpotera"
											target="_blank"
											rel="noopener noreferrer"
											class="text-blue-700 hover:underline">kgoldpotera</a
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div>
					<h3 class="mb-6 text-3xl font-bold text-slate-900">Technologies</h3>
					<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
						{#each ['SvelteKit', 'Python', 'Tailwind', 'Supabase', 'Vercel', 'D3.js', 'Dexie.js', 'Tauri', 'HTML5', 'CSS3', 'JavaScript', 'Git'] as tech}
							<div
								class="flex h-16 cursor-default items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-center text-sm font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-700 hover:shadow-md"
							>
								{tech}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="experience" class="px-6 py-20 md:py-32">
		<div class="mx-auto max-w-7xl">
			<div class="mb-24 text-center">
				<span class="text-sm font-bold tracking-widest text-blue-700 uppercase"
					>Featured Internship</span
				>

				<a
					href="https://drugindex.it"
					target="_blank"
					rel="noopener noreferrer"
					class="group/link mt-2 inline-flex items-center text-4xl font-extrabold text-slate-900 transition-colors hover:text-blue-700 md:text-5xl"
				>
					DrugIndex.it
					<svg
						class="ml-3 h-8 w-8 text-slate-400 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:text-blue-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						/>
					</svg>
				</a>

				<p class="mt-4 text-xl text-slate-600">
					Software Engineering Intern • May 2025 - August 2025
				</p>

				<p class="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-700">
					<strong class="text-slate-900">DrugIndex.it</strong> is East Africa's premier digital medical
					directory and comprehensive drug reference platform. It serves as a vital tool for clinicians,
					pharmacists, and medical researchers, providing instant access to detailed drug monographs,
					historical pricing, active ingredients, and disease information. During my tenure, I was integrated
					into the core development environment, architecting robust, data-driven front-end tools to make
					complex medical data accessible.
				</p>
			</div>

			<div class="mb-24 flex flex-col gap-12 lg:flex-row lg:items-center">
				<div class="lg:w-1/2">
					<button
						class="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
						onclick={() => openLightbox('/drug-chart.png', 'D3.js Line Chart UI')}
					>
						<img
							src="/drug-chart.png"
							alt="D3.js Line Chart UI"
							class="aspect-video w-full object-cover object-left-top transition-transform duration-500 hover:scale-105"
						/>
					</button>
				</div>
				<div class="lg:w-1/2 lg:pl-12">
					<h3 class="mb-4 text-3xl font-bold text-slate-900">Interactive Data Visualization</h3>
					<p class="mb-6 text-lg leading-relaxed text-slate-700">
						Developed a dynamic, multi-series SVG line chart using <strong class="text-blue-700"
							>D3.js</strong
						> integrated directly into a Svelte component. This tool visualizes complex drug price variations
						across 20 historical publication editions.
					</p>
					<p class="text-lg leading-relaxed text-slate-700">
						Engineered real-time UI data binding by integrating <strong class="text-blue-700"
							>Dexie.js (liveQuery)</strong
						> with Svelte's reactivity model, allowing charts and tables to automatically re-render without
						network latency.
					</p>
				</div>
			</div>

			<div class="mb-24 flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
				<div class="lg:w-1/2 lg:pr-12">
					<h3 class="mb-4 text-3xl font-bold text-slate-900">Zero-Latency Search Engine</h3>
					<p class="mb-6 text-lg leading-relaxed text-slate-700">
						Built a debounced, client-side search engine that queries and aggregates multiple local
						database collections simultaneously without network requests.
					</p>
					<p class="text-lg leading-relaxed text-slate-700">
						Engineered a custom multi-tiered sorting algorithm on top of <strong
							class="text-blue-700">Fuse.js</strong
						> to override default fuzzy scoring. This strictly prioritizes exact, prefix, and token matches
						to surface the most relevant drugs instantly.
					</p>
				</div>
				<div class="lg:w-1/2">
					<button
						class="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
						onclick={() => openLightbox('/drug-search.png', 'Intelligent Search UI')}
					>
						<img
							src="/drug-search.png"
							alt="Intelligent Search UI"
							class="aspect-video w-full object-cover object-left-top transition-transform duration-500 hover:scale-105"
						/>
					</button>
				</div>
			</div>

			<div class="flex flex-col gap-12 lg:flex-row lg:items-center">
				<div class="lg:w-1/2">
					<button
						class="block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
						onclick={() => openLightbox('/drug-404.png', '404 Error UI')}
					>
						<img
							src="/drug-404.png"
							alt="404 Error UI"
							class="aspect-video w-full object-cover object-center transition-transform duration-500 hover:scale-105"
						/>
					</button>
				</div>
				<div class="lg:w-1/2 lg:pl-12">
					<h3 class="mb-4 text-3xl font-bold text-slate-900">Graceful Error Handling & Routing</h3>
					<p class="mb-6 text-lg leading-relaxed text-slate-700">
						Leveraged SvelteKit's routing architecture to intercept undefined paths and unresolvable
						database searches, preventing jarring browser default errors.
					</p>
					<p class="text-lg leading-relaxed text-slate-700">
						Designed an on-brand, visually cohesive 404 interface and engineered a seamless recovery
						flow by integrating a "Go to Dashboard" routing action, instantly guiding users back to
						the primary workspace.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="education" class="border-y border-slate-200 bg-slate-50 px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-slate-900">Education & Background</h2>

			<div class="flex flex-col gap-12">
				<div
					class="flex flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:flex-row md:items-center"
				>
					<div class="md:w-1/2">
						<button
							class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-100 shadow-sm focus:ring-4 focus:ring-blue-200 focus:outline-none"
							onclick={() => openLightbox('/ku-gate.jpg', 'Kenyatta University')}
						>
							<img
								src="/ku-gate.jpg"
								alt="Kenyatta University"
								class="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
							/>
						</button>
					</div>
					<div class="md:w-1/2">
						<h4 class="text-2xl font-bold text-slate-900">BSc. Telecommunication & IT</h4>
						<p class="mt-2 text-lg text-slate-700">Kenyatta University</p>
						<p class="mt-1 text-sm font-bold text-blue-700">2022 - Present (Finalist)</p>
						<p class="mt-4 leading-relaxed text-slate-600">
							Core Focus: Bridging modern software engineering with telecommunications
							infrastructure. Developed a strong technical foundation utilizing programming
							languages like C and Python to design solutions.
						</p>
					</div>
				</div>

				<div
					class="flex flex-col-reverse gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:flex-row md:items-center"
				>
					<div class="md:w-1/2">
						<h4 class="text-2xl font-bold text-slate-900">
							Kenya Certificate of Secondary Education
						</h4>
						<p class="mt-2 text-lg text-slate-700">Alliance High School</p>
						<p class="mt-1 text-sm font-bold text-slate-500">2018 - 2022</p>
						<p class="mt-4 leading-relaxed text-slate-600">
							Completed secondary education with a strong foundation in sciences and mathematics,
							establishing the rigorous analytical skills required for engineering.
						</p>
					</div>
					<div class="md:w-1/2">
						<button
							class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-100 shadow-sm focus:ring-4 focus:ring-blue-200 focus:outline-none"
							onclick={() => openLightbox('/education-photo.jpg', 'Alliance High School')}
						>
							<img
								src="/education-photo.jpg"
								alt="Alliance High School"
								class="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="publications" class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-slate-900">Publications & Writing</h2>

			<div class="space-y-8">
				<a
					href="https://medium.com/@koechmanoah32"
					target="_blank"
					rel="noopener noreferrer"
					class="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
				>
					<div class="mb-4 flex items-center justify-between text-sm text-slate-500">
						<span class="font-bold text-blue-700">Drug Index</span>
						<span>10 min read</span>
					</div>
					<div class="flex items-center justify-between">
						<h4
							class="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700"
						>
							Modernizing Kenya's Most Trusted Drug Reference
						</h4>
						<svg
							class="h-6 w-6 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
					<p class="mt-3 text-lg leading-relaxed text-slate-600">
						An inside look at the engineering and design process behind modernizing Kenya's most
						trusted drug reference platform. Explores how we built progressive, accessible tools to
						help clinicians make sense of complex medical data.
					</p>
				</a>

				<a
					href="https://medium.com/@koechmanoah32"
					target="_blank"
					rel="noopener noreferrer"
					class="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
				>
					<div class="mb-4 flex items-center justify-between text-sm text-slate-500">
						<span class="font-bold text-slate-900">Design Critique</span>
						<span>9 min read</span>
					</div>
					<div class="flex items-center justify-between">
						<h4
							class="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700"
						>
							A Critical Examination of Apple's "Liquid Glass" UI
						</h4>
						<svg
							class="h-6 w-6 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
					<p class="mt-3 text-lg leading-relaxed text-slate-600">
						A detailed critique of Apple's modern design language, analyzing the performance
						trade-offs and accessibility failures in contrast ratios within complex UI engineering.
					</p>
				</a>
			</div>
		</div>
	</section>

	<section id="referees" class="border-t border-slate-200 bg-slate-50 px-6 py-20">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-12 text-3xl font-bold text-slate-900">Professional Referees</h2>

			<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
				<div
					class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
				>
					<img src="/drug-index-logo.svg" alt="Drug Index Logo" class="mb-6 h-8 w-auto" />
					<h3 class="text-2xl font-bold text-slate-900">Jesse Kimotho</h3>
					<p class="mb-6 text-lg font-medium text-blue-700">Product Manager</p>
					<div class="space-y-3 text-slate-700">
						<a
							href="tel:+254741041698"
							class="flex w-max items-center gap-3 transition-colors hover:text-blue-700"
						>
							<svg
								class="h-5 w-5 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/></svg
							>
							+254 741 041 698
						</a>
						<a
							href="mailto:jn.jug97@gmail.com"
							class="flex w-max items-center gap-3 transition-colors hover:text-blue-700"
						>
							<svg
								class="h-5 w-5 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/></svg
							>
							jn.jug97@gmail.com
						</a>
					</div>
				</div>

				<div
					class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
				>
					<img src="/safaricom-logo.png" alt="Safaricom Logo" class="mb-6 h-8 w-auto" />
					<h3 class="text-2xl font-bold text-slate-900">Charles Musandu</h3>
					<p class="mb-6 text-lg font-medium text-green-600">M-pesa Operations Officer</p>
					<div class="space-y-3 text-slate-700">
						<a
							href="tel:+254721420119"
							class="flex w-max items-center gap-3 transition-colors hover:text-blue-700"
						>
							<svg
								class="h-5 w-5 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/></svg
							>
							+254 721 420 119
						</a>
						<a
							href="mailto:charlesmusandu@gmail.com"
							class="flex w-max items-center gap-3 break-all transition-colors hover:text-blue-700"
						>
							<svg
								class="h-5 w-5 text-slate-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/></svg
							>
							charlesmusandu@gmail.com
						</a>
					</div>
				</div>
			</div>

			<div
				class="mt-20 flex flex-col items-center justify-center gap-6 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:justify-between"
			>
				<p>
					&copy; {new Date().getFullYear()} Manoah Kipngeno. Built with SvelteKit & Tailwind CSS.
				</p>
				<div class="flex gap-4">
					<a
						href="https://github.com/kgoldpotera"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-slate-900"
						aria-label="GitHub"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
							><path
								fill-rule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clip-rule="evenodd"
							/></svg
						>
					</a>
					<a
						href="https://www.linkedin.com/in/manoah-kipngeno"
						target="_blank"
						rel="noopener noreferrer"
						class="transition-colors hover:text-blue-700"
						aria-label="LinkedIn"
					>
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
							><path
								fill-rule="evenodd"
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
								clip-rule="evenodd"
							/></svg
						>
					</a>
				</div>
			</div>
		</div>
	</section>

	{#if isLightboxOpen}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity"
			onclick={closeLightbox}
			aria-modal="true"
			role="dialog"
		>
			<button
				class="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-blue-400 focus:ring-4 focus:ring-blue-500 focus:outline-none"
				onclick={closeLightbox}
				aria-label="Close Lightbox"
			>
				<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<img
				src={lightboxSrc}
				alt={lightboxAlt}
				class="max-h-[90vh] max-w-[90vw] cursor-default rounded-xl object-contain shadow-2xl"
				onclick={(e) => e.stopPropagation()}
			/>
		</div>
	{/if}
</main>
