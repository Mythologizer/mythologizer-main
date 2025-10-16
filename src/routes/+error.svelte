<script lang="ts">
	import { page } from '$app/state';
	import Venus from '$lib/components/Venus.svelte';
</script>

<div class="relative w-full h-full">
	<div class="flex w-full h-full items-center justify-center overflow-hidden text-[#ff0000]">
		<Venus />
	</div>
	<div class="absolute top-20 flex w-full items-center justify-center uppercase">
		<h1 class="bg-white">{page?.error?.message}</h1>
	</div>
</div>
