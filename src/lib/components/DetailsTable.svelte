<script>
	let { details = [] } = $props();
</script>

<div class="space-y-3">
	<h3 class="mb-4 text-sm font-bold tracking-wider text-gray-900 uppercase">Personal Details</h3>

	<dl class="space-y-3 text-sm md:text-base">
		{#each details as detail}
			<div
				class="flex items-start justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0"
			>
				<dt class="w-1/3 font-semibold text-gray-700">{detail.label}</dt>
				<dd class="w-2/3 text-right break-words text-gray-600">{detail.value}</dd>
			</div>
		{/each}
	</dl>
</div>
