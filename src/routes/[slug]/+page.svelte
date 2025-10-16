<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-3xl mx-auto">
	<hgroup>
		<h1 class="capitalize">{data.meta.title}</h1>
		<p class="mt-2 text-gray-500">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="flex gap-3 mt-7">
		{#each data.meta.categories as category}
			<span class="px-2 py-1 rounded-full bg-gray-200 text-gray-700">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	.prose :is(h2, h3, h4, h5, h6) {
		@apply mt-8 mb-3;
	}
	.prose :is(ul, ol) {
		list-style-type: '🔥';
		@apply pl-5;
	}
	.prose :is(ul, ol) li {
		@apply my-2 pl-2;
	}
	.prose pre {
		max-inline-size: 100%;
		@apply p-3 rounded-lg tab-size-[2];
	}
	.prose p:not(:is(h2, h3, h4, h5, h6) + p) {
		margin-top: 1.75rem; /* var(--size-7) */
	}
	.prose p:has(img) {
		display: contents;
	}
</style>
