<script lang="ts">
	import { onMount } from 'svelte';
	import { floatOrbs } from '$lib/utils/gsap';

	let container: HTMLElement;

	onMount(() => {
		const orbs = container.querySelectorAll('.mesh-orb');
		floatOrbs(orbs);
	});
</script>

<div bind:this={container} class="mesh-bg" aria-hidden="true">
	<div
		class="mesh-orb"
		style="width: 600px; height: 600px; top: -10%; left: -5%; background: rgba(6, 182, 212, 0.12);"
	></div>
	<div
		class="mesh-orb"
		style="width: 500px; height: 500px; top: 30%; right: -10%; background: rgba(139, 92, 246, 0.10);"
	></div>
	<div
		class="mesh-orb"
		style="width: 400px; height: 400px; bottom: 10%; left: 20%; background: rgba(14, 165, 233, 0.08);"
	></div>
	<div
		class="mesh-orb"
		style="width: 350px; height: 350px; top: 60%; right: 30%; background: rgba(6, 182, 212, 0.06);"
	></div>
</div>
