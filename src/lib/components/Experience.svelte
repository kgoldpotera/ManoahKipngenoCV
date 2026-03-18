<script>
	let { job } = $props();
</script>

<article class="group relative">
	<div class="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
		<h3 class="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
			{job.role}
		</h3>
		<span
			class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium whitespace-nowrap text-blue-700"
		>
			{job.timeline}
		</span>
	</div>

	<div
		class="mb-4 flex flex-col text-sm font-medium text-gray-600 sm:flex-row sm:justify-between md:text-base"
	>
		<span class="flex items-center gap-1">
			{job.company}
		</span>
		<span>{job.location}</span>
	</div>

	<p class="mb-4 leading-relaxed text-gray-600">
		{job.description}
	</p>

	{#if job.achievements && job.achievements.length > 0}
		<ul class="ml-5 list-outside list-disc space-y-2 text-gray-600 marker:text-blue-500">
			{#each job.achievements as achievement}
				<li class="pl-1 leading-relaxed">{achievement}</li>
			{/each}
		</ul>
	{/if}
</article>
