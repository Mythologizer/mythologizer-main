<script lang="ts">
	import '../app.css';

	import PostCard from '$lib/components/post/PostCard.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/assets/favicon.svg" />
	<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png" />
	<link rel="manifest" href="/assets/site.webmanifest" />
</svelte:head>

<div class="w-screen h-screen lg:flex">
	<main
		class="hidden lg:flex lg:relative w-1/3 max-w-md h-full border-r-2 overflow-y-auto flex-col text-lg"
	>
		<div class="w-full pb-[1px] border-b-2">
			<div class="w-full p-10 border-b-2">
				<a href="/" class="text-[#0000FF] underline decoration-2 underline-offset-2"
					>Mythologizer.org</a
				>
			</div>
		</div>
		<p></p>
		<div class="flex-col p-10 flex gap-4 pb-20 h-full overflow-y-auto">
			{#each data.posts as post, i}
				<PostCard {...post} />
			{/each}
		</div>
		<ul class="lg:absolute bottom-0 z-10 bg-white w-full border-t-2 pt-[1px]">
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
	<div class="hidden lg:flex h-full w-[4px] border-r-2"></div>

	<section class="top-8 lg:top-0 w-full h-full overflow-y-auto p-6 lg:p-10">
		<nav class="lg:hidden flex w-full text-2xl pb-2">
			<ul class="flex flex-col gap-2 w-full justify-between">
				<li class="">
					<a href="/" class="text-[#0000FF] underline decoration-2 underline-offset-2"
						>Mythologizer.org</a
					>
				</li>
				<li class="">
					<a href="/about" class="text-[#0000FF] underline decoration-2 underline-offset-2">About</a
					>
				</li>
				<li class="">
					<a href="/impressum" class="text-[#0000FF] underline decoration-2 underline-offset-2"
						>Impressum</a
					>
				</li>
			</ul>
		</nav>
		<div class="w-full">
			{@render children?.()}
		</div>
	</section>
</div>

<style>
	:global(body) {
		font-family: 'W95FA', monospace;
		background-color: var(--color-stone-50);
		color: var(--color-stone-950);
	}
</style>
