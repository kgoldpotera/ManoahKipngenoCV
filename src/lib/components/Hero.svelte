<script>
	let { name = '', title = '', bio = '' } = $props();
</script>

<div class="space-y-5">
	<h1 class="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
		{name}
	</h1>
	<h2 class="text-xl font-medium text-blue-600 md:text-2xl">
		{title}
	</h2>
	<p class="max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
		{bio}
	</p>
</div>
