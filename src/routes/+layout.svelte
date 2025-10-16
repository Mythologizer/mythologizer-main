<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { formatDate } from '$lib/utils';
	import PostCard from '$lib/components/post/PostCard.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class=" w-screen h-screen flex">
	<main class="relative w-1/3 h-full border-r-2 overflow-y-auto flex flex-col text-lg">
		<div class="w-full pb-[1px] border-b-2">
			<div class="w-full p-10 border-b-2">
				<a href="/" class="text-[#0000FF] underline decoration-2 underline-offset-2"
					>mythologizer.org</a
				>
			</div>
		</div>
		<p></p>
		<div class="flex-col p-10 flex gap-4 pb-20 h-full overflow-y-auto">
			{#each data.posts as post, i}
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
				<PostCard {...post} />
			{/each}
		</div>
		<ul class="absolute bottom-0 z-10 bg-white w-full border-t-2 pt-[1px]">
			<div class="w-full h-full border-t-2 py-4 flex justify-evenly">
				<li class="">
					<a href="/about" class="text-[#0000FF] underline decoration-2 underline-offset-2">About</a
					>
				</li>
				<li class="">
					<a href="/impressum" class="text-[#0000FF] underline decoration-2 underline-offset-2"
						>Impressum</a
					>
				</li>
			</div>
		</ul>
	</main>
	<div class="h-full w-[4px] border-r-2"></div>
	<section class=" w-full h-full overflow-y-auto p-10">{@render children?.()}</section>
</div>

<section></section>

<style>
	:global(body) {
		font-family: 'W95FA', monospace;
		background-color: var(--color-stone-50);
		color: var(--color-stone-950);
	}
</style>
