<script lang="ts">
	import PostCard from '$lib/components/post/PostCard.svelte';
	import Venus from '$lib/components/Venus.svelte';
	import { formatDate } from '$lib/utils';
	// import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Mythologizer</title>
</svelte:head>
<div class="relative w-full h-full">
	<div class="lg:hidden w-full flex-col py-16 flex gap-4 pb-20">
		{#each data.posts as post, i}
			<PostCard {...post} />
		{/each}
	</div>
	<div class="w-full lg:h-full flex items-center justify-center lg:p-0 pb-16 overflow-hidden">
		<Venus />
	</div>
</div>
