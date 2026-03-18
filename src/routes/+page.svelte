<script>
	// Page 1-9 Layout with Manoah Kipngeno's Details
	// Harmonized Colors, Svelte 5 Lightbox & Zig-Zag Case Study Integrated

	// --- LIGHTBOX STATE (SVELTE 5 RUNES) ---
	let isLightboxOpen = $state(false);
	let lightboxSrc = $state('');
	let lightboxAlt = $state('');

	function openLightbox(src, alt) {
		lightboxSrc = src;
		lightboxAlt = alt;
		isLightboxOpen = true;
		// Prevent background scrolling when open
		if (typeof window !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	function closeLightbox() {
		isLightboxOpen = false;
		// Restore background scrolling
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

<main
	class="flex min-h-screen flex-col items-center gap-12 bg-slate-100 px-4 py-12 font-sans selection:bg-blue-100 selection:text-blue-900"
>
	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col items-center justify-center bg-white p-12 text-center shadow-xl transition-shadow duration-500 hover:shadow-2xl"
	>
		<h1 class="mb-4 text-6xl font-bold tracking-tight text-slate-900 md:text-7xl">
			Manoah Kipngeno
		</h1>
		<h2
			class="text-3xl font-light tracking-widest text-balance text-slate-500 uppercase md:text-4xl"
		>
			Telecommunication & IT Portfolio
		</h2>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:p-20"
	>
		<h2
			class="mb-6 inline-block self-start border-b-2 border-slate-900 pb-2 text-3xl font-bold text-slate-900"
		>
			Personal Information
		</h2>

		<p class="mb-12 text-lg leading-relaxed text-slate-700">
			I am a Telecommunication and Information Technology finalist seeking to leverage my
			engineering background and software development skills. I specialize in building responsive
			front-end applications with SvelteKit and creating robust backend scripts using Python. I am
			looking to secure a position where I can utilize my experience in mobile and web
			development—including deployment on Vercel and database management with Supabase—in a
			result-driven organization. I am a diligent worker, a team-player, and a quick-learner. I
			believe I will be a great asset to your team.
		</p>

		<div class="mx-auto w-full max-w-2xl">
			<table class="w-full text-left text-lg text-slate-700">
				<tbody>
					<tr class="border-b border-slate-100 transition-colors hover:bg-slate-50">
						<th class="w-1/3 py-4 font-semibold text-slate-900">Name:</th>
						<td class="py-4">Manoah Kipngeno</td>
					</tr>
					<tr class="border-b border-slate-100 transition-colors hover:bg-slate-50">
						<th class="py-4 font-semibold text-slate-900">Nationality:</th>
						<td class="py-4">Kenyan</td>
					</tr>
					<tr class="border-b border-slate-100 transition-colors hover:bg-slate-50">
						<th class="py-4 font-semibold text-slate-900">Gender:</th>
						<td class="py-4">Male</td>
					</tr>
					<tr class="border-b border-slate-100 transition-colors hover:bg-slate-50">
						<th class="py-4 font-semibold text-slate-900">Phone Number:</th>
						<td class="py-4">+254706487376</td>
					</tr>
					<tr class="transition-colors hover:bg-slate-50">
						<th class="py-4 font-semibold text-slate-900">Email:</th>
						<td class="py-4 font-medium text-blue-700">koechmanoah32@gmail.com</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:p-20"
	>
		<div class="mb-12 grid h-64 grid-cols-2 gap-4">
			<button
				class="h-full w-full cursor-zoom-in overflow-hidden rounded-lg shadow-sm focus:ring-4 focus:ring-blue-200 focus:outline-none"
				onclick={() => openLightbox('/ku-gate.jpg', 'Kenyatta University Gate')}
			>
				<img
					src="/ku-gate.jpg"
					alt="Kenyatta University Gate"
					class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</button>
			<button
				class="h-full w-full cursor-zoom-in overflow-hidden rounded-lg shadow-sm focus:ring-4 focus:ring-blue-200 focus:outline-none"
				onclick={() => openLightbox('/education-photo.jpg', 'Education Highlights')}
			>
				<img
					src="/education-photo.jpg"
					alt="Education Highlights"
					class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
				/>
			</button>
		</div>

		<h2
			class="mb-8 inline-block self-start border-b-2 border-slate-900 pb-2 text-3xl font-bold text-slate-900"
		>
			Education
		</h2>

		<div class="space-y-8">
			<div
				class="flex flex-col gap-4 transition-transform duration-300 hover:translate-x-2 md:flex-row"
			>
				<div class="text-lg font-bold text-slate-900 md:w-1/3">
					Bachelor of Science, Telecommunication and Information Technology
				</div>
				<div class="text-lg text-slate-700 md:w-2/3">
					Kenyatta University<br />
					<span class="text-base text-slate-500">2022 - Present (Finalist)</span>
				</div>
			</div>

			<div
				class="flex flex-col gap-4 transition-transform duration-300 hover:translate-x-2 md:flex-row"
			>
				<div class="text-lg font-bold text-slate-900 md:w-1/3">
					Kenya Certificate of Secondary Education
				</div>
				<div class="text-lg text-slate-700 md:w-2/3">
					Alliance High School<br />
					<span class="text-base text-slate-500">2018 - 2022</span>
				</div>
			</div>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:p-20"
	>
		<h2
			class="mb-10 inline-block self-start border-b-2 border-slate-900 pb-2 text-3xl font-bold text-slate-900"
		>
			Work experience
		</h2>

		<h3 class="mb-6 text-2xl font-bold text-blue-700">Drug Index</h3>

		<div class="mb-10 flex flex-col gap-3 text-lg text-slate-700">
			<div class="flex gap-2">
				<span class="w-24 font-bold text-slate-900">Role:</span>
				<span>Front-End Developer Intern</span>
			</div>
			<div class="flex gap-2">
				<span class="w-24 font-bold text-slate-900">Date:</span>
				<span>May, 2025 - August, 2025</span>
			</div>
			<div class="flex gap-2">
				<span class="w-24 font-bold text-slate-900">Location:</span>
				<span>Nairobi, Kenya</span>
			</div>
		</div>

		<p class="mb-8 text-lg leading-relaxed text-slate-700">
			Drug Index is a comprehensive drug reference platform. During my tenure as an intern, I was
			integrated into the core development environment, transitioning from foundational concepts to
			producing production-ready code alongside the team.
		</p>

		<h3 class="mt-8 mb-6 text-center text-xl font-bold tracking-widest text-slate-400 uppercase">
			Technologies & Integrations
		</h3>
		<div class="mb-16 grid grid-cols-3 gap-4 md:grid-cols-4">
			{#each ['SvelteKit', 'Python', 'Tailwind CSS', 'Supabase', 'Vercel', 'PayPal API', 'Coinbase API', 'Tauri', 'HTML5', 'CSS3', 'JavaScript', 'Git'] as tech}
				<div
					class="flex h-20 cursor-default items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-center text-sm font-bold text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-700 hover:text-blue-700 hover:shadow-md"
				>
					{tech}
				</div>
			{/each}
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-all duration-500 hover:shadow-2xl md:p-20"
	>
		<div class="mb-12 border-b-2 border-slate-900 pb-6">
			<h2 class="mb-2 text-sm font-bold tracking-widest text-blue-700 uppercase">
				Featured Internship
			</h2>
			<h3 class="text-4xl font-extrabold text-slate-900">DrugIndex.it</h3>
			<p class="mt-3 text-xl text-slate-500">
				Architecting responsive, data-driven medical tools with SvelteKit & Dexie.js
			</p>
		</div>

		<div class="mb-16 flex flex-col gap-8 md:flex-row md:items-center">
			<div class="md:w-1/2">
				<button
					class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
					onclick={() => openLightbox('/drug-chart.png', 'D3.js Line Chart UI')}
				>
					<img src="/drug-chart.png" alt="D3.js Line Chart UI" class="h-auto w-full object-cover" />
				</button>
			</div>
			<div class="flex flex-col justify-center md:w-1/2">
				<h4 class="mb-3 text-2xl font-bold text-slate-900">Interactive Data Visualization</h4>
				<p class="text-lg leading-relaxed text-slate-700">
					Developed a dynamic, multi-series SVG line chart using <strong class="text-blue-700"
						>D3.js</strong
					> integrated directly into a Svelte component. This tool visualizes complex drug price variations
					across 20 historical publication editions.
				</p>
				<p class="mt-3 text-lg leading-relaxed text-slate-700">
					I also built responsive, custom-styled HTML/CSS tooltips mapped to D3 pointer events and
					coordinate inversion, enabling users to seamlessly track historical market pricing at a
					glance.
				</p>
			</div>
		</div>

		<div class="flex flex-col-reverse gap-8 md:flex-row md:items-center">
			<div class="flex flex-col justify-center md:w-1/2">
				<h4 class="mb-3 text-2xl font-bold text-slate-900">Reactive Client-Side Database</h4>
				<p class="text-lg leading-relaxed text-slate-700">
					Engineered real-time UI data binding by integrating <strong class="text-blue-700"
						>Dexie.js (liveQuery)</strong
					> with Svelte's reactivity model. This allowed charts and tables to automatically re-render
					without network latency whenever the local IndexedDB updated.
				</p>
				<p class="mt-3 text-lg leading-relaxed text-slate-700">
					To handle the data, I wrote asynchronous JavaScript logic to efficiently query and join
					multiple database tables—merging brand identities, variant formulations, and
					discontinuation statuses into a unified structure.
				</p>
			</div>
			<div class="md:w-1/2">
				<button
					class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
					onclick={() => openLightbox('/drug-modal.png', 'Set Brand Status Modal')}
				>
					<img
						src="/drug-modal.png"
						alt="Set Brand Status Modal"
						class="h-auto w-full object-cover"
					/>
				</button>
			</div>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col justify-center bg-white p-12 shadow-xl transition-all duration-500 hover:shadow-2xl md:p-20"
	>
		<div class="mb-20 flex flex-col gap-8 md:flex-row md:items-center">
			<div class="md:w-1/2">
				<button
					class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
					onclick={() => openLightbox('/drug-search.png', 'Intelligent Search UI')}
				>
					<img
						src="/drug-search.png"
						alt="Intelligent Search UI"
						class="h-auto w-full object-cover"
					/>
				</button>
			</div>
			<div class="flex flex-col justify-center md:w-1/2">
				<h4 class="mb-3 text-2xl font-bold text-slate-900">Zero-Latency Search Engine</h4>
				<p class="text-lg leading-relaxed text-slate-700">
					Built a debounced, client-side search engine that queries and aggregates multiple local
					database collections simultaneously without network requests.
				</p>
				<p class="mt-3 text-lg leading-relaxed text-slate-700">
					Engineered a custom multi-tiered sorting algorithm on top of <strong class="text-blue-700"
						>Fuse.js</strong
					> to override default fuzzy scoring. This strictly prioritizes exact, prefix, and token matches
					to surface the most relevant drugs instantly, complete with dynamic HTML highlighting.
				</p>
			</div>
		</div>

		<div class="flex flex-col-reverse gap-8 md:flex-row md:items-center">
			<div class="flex flex-col justify-center md:w-1/2">
				<h4 class="mb-3 text-2xl font-bold text-slate-900">State-Driven Sidebar Navigation</h4>
				<p class="text-lg leading-relaxed text-slate-700">
					Designed a modern, Supabase-inspired collapsible sidebar that maximizes screen real estate
					for complex medical data tables while maintaining an intuitive layout.
				</p>
				<p class="mt-3 text-lg leading-relaxed text-slate-700">
					Engineered the toggle functionality using <strong class="text-blue-700"
						>Svelte stores ($navCompress)</strong
					> to instantly update the global UI state. Implemented seamless CSS transitions between full-text
					and icon-only states, featuring dynamic hover tooltips.
				</p>
			</div>
			<div class="md:w-1/2">
				<button
					class="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
					onclick={() => openLightbox('/drug-sidebar.png', 'Responsive Sidebar UI')}
				>
					<img
						src="/drug-sidebar.png"
						alt="Responsive Sidebar UI"
						class="h-auto w-full object-cover"
					/>
				</button>
			</div>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col justify-center bg-white p-12 shadow-xl transition-all duration-500 hover:shadow-2xl md:p-20"
	>
		<div class="mb-12 text-center">
			<h4 class="mb-4 text-3xl font-bold text-slate-900">Graceful Error Handling & Routing</h4>
			<p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-700">
				A seamless user experience requires anticipating where users might hit dead ends. I
				leveraged SvelteKit's routing architecture to intercept undefined paths and unresolvable
				database searches.
			</p>
		</div>

		<button
			class="mx-auto mb-12 w-full max-w-3xl cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
			onclick={() => openLightbox('/drug-404.png', '404 Error UI')}
		>
			<img src="/drug-404.png" alt="404 Error UI" class="h-auto w-full object-cover" />
		</button>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<div
				class="rounded-xl border border-slate-100 bg-slate-50 p-8 transition-colors hover:border-blue-200"
			>
				<h5 class="mb-2 text-xl font-bold text-blue-700">User-Centric Design</h5>
				<p class="text-slate-700">
					Designed an on-brand, visually cohesive 404 interface that clearly communicates missing
					data while maintaining the application's dark-mode aesthetic, preventing jarring browser
					default errors.
				</p>
			</div>
			<div
				class="rounded-xl border border-slate-100 bg-slate-50 p-8 transition-colors hover:border-blue-200"
			>
				<h5 class="mb-2 text-xl font-bold text-blue-700">Retention & Recovery</h5>
				<p class="text-slate-700">
					Engineered a seamless recovery flow by integrating a "Go to Dashboard" routing action,
					instantly guiding users back to the primary workspace and significantly reducing
					application drop-off.
				</p>
			</div>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:p-20"
	>
		<h2
			class="mb-10 inline-block self-start border-b-2 border-slate-900 pb-2 text-3xl font-bold text-slate-900"
		>
			Publications & Writing
		</h2>

		<div class="flex flex-col gap-12">
			<a
				href="#"
				class="group/card flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
			>
				<div class="flex items-center justify-between text-sm font-medium text-slate-500">
					<span class="flex items-center gap-2">
						<span
							class="h-2 w-2 rounded-full bg-blue-700 transition-transform duration-300 group-hover/card:scale-150"
						></span>
						Drug Index
					</span>
					<span>10 min read • Jul 23, 2025</span>
				</div>
				<h3
					class="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover/card:text-blue-700"
				>
					Modernizing Kenya's Most Trusted Drug Reference, DrugIndex.it
				</h3>
				<p class="text-lg leading-relaxed text-slate-700">
					An inside look at the engineering and design process behind modernizing Kenya's most
					trusted drug reference platform. Explores how we built progressive, accessible tools to
					help clinicians and researchers make sense of complex medical data.
				</p>
				<span
					class="mt-2 inline-flex w-max items-center font-bold text-blue-700 transition-transform duration-300 group-hover/card:translate-x-2"
				>
					Read on Medium &rarr;
				</span>
			</a>

			<a
				href="#"
				class="group/card flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
			>
				<div class="flex items-center justify-between text-sm font-medium text-slate-500">
					<span class="flex items-center gap-2">
						<span
							class="h-2 w-2 rounded-full bg-slate-800 transition-transform duration-300 group-hover/card:scale-150"
						></span>
						Design Critique
					</span>
					<span>9 min read • Jun 12, 2025</span>
				</div>
				<h3
					class="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover/card:text-blue-700"
				>
					A Critical Examination of Apple's "Liquid Glass" UI Aesthetic
				</h3>
				<p class="text-lg leading-relaxed text-slate-700">
					A detailed critique of Apple's modern design language, analyzing the performance
					trade-offs, WCAG accessibility failures in contrast ratios, and the delicate balance
					between aesthetic elegance and functional legibility in UI engineering.
				</p>
				<span
					class="mt-2 inline-flex w-max items-center font-bold text-blue-700 transition-transform duration-300 group-hover/card:translate-x-2"
				>
					Read on Medium &rarr;
				</span>
			</a>
		</div>
	</section>

	<section
		class="group flex min-h-[1100px] w-full max-w-[800px] flex-col bg-white p-12 shadow-xl transition-shadow duration-500 hover:shadow-2xl md:p-20"
	>
		<h2
			class="mb-16 inline-block self-start border-b-2 border-slate-900 pb-2 text-3xl font-bold tracking-widest text-slate-900 uppercase"
		>
			Referees
		</h2>

		<div class="grid grid-cols-1 gap-16 md:grid-cols-2">
			<div class="flex flex-col gap-5 transition-transform duration-300 hover:translate-y-[-4px]">
				<div
					class="flex h-24 w-48 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
				>
					<img
						src="/drug-index-logo.svg"
						alt="Drug Index Logo"
						class="max-h-16 w-full object-contain"
					/>
				</div>
				<div>
					<h3 class="text-2xl font-bold text-slate-900">Jesse Kimotho</h3>
					<p class="text-lg font-medium text-blue-700">Product Manager</p>
				</div>
				<div class="mt-2 flex flex-col space-y-3 text-lg text-slate-700">
					<span class="flex items-center gap-3">
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
						+254741 041698
					</span>
					<span class="flex items-center gap-3">
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
					</span>
				</div>
			</div>

			<div class="flex flex-col gap-5 transition-transform duration-300 hover:translate-y-[-4px]">
				<div
					class="flex h-24 w-48 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
				>
					<img
						src="/Safaricom-Logo.wine.svg"
						alt="Safaricom Logo"
						class="max-h-16 w-full object-contain"
					/>
				</div>
				<div>
					<h3 class="text-2xl font-bold text-slate-900">Charles Musandu</h3>
					<p class="text-lg font-medium text-green-600">M-pesa Operations Officer</p>
				</div>
				<div class="mt-2 flex flex-col space-y-3 text-lg text-slate-700">
					<span class="flex items-center gap-3">
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
						+254721420119
					</span>
					<span class="flex items-center gap-3 break-all">
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
					</span>
				</div>
			</div>
		</div>
	</section>

	{#if isLightboxOpen}
		<div
			class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-sm transition-opacity"
			onclick={closeLightbox}
			aria-modal="true"
			role="dialog"
		>
			<button
				class="absolute top-6 right-6 rounded-full bg-slate-800/50 p-2 text-white transition-colors hover:bg-slate-700 hover:text-blue-400 focus:ring-4 focus:ring-blue-500 focus:outline-none"
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
				class="max-h-[90vh] max-w-[90vw] cursor-default rounded-lg object-contain shadow-2xl"
				onclick={(e) => e.stopPropagation()}
			/>
		</div>
	{/if}
</main>
