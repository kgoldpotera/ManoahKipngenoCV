<script>
	let { edu } = $props();
</script>

<div class="relative border-l-2 border-gray-200 pl-4 transition-colors hover:border-blue-500">
	<h3 class="text-lg font-bold text-gray-900">{edu.degree}</h3>

	<div class="mt-2 flex flex-col text-sm text-gray-600 sm:flex-row sm:justify-between md:text-base">
		<span class="font-medium">{edu.institution}</span>
		<span class="mt-1 text-gray-500 sm:mt-0">{edu.timeline}</span>
	</div>
</div>
