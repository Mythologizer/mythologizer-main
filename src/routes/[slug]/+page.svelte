<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="w-full h-full flex justify-center">
	<article class="flex flex-col-reverse gap-4 lg:gap-2 lg:flex-row">
		<div class="prose tw-full">
			<data.content />
		</div>
		<hgroup class="lg:w-40 text-right text-lg flex justify-end">
			<div class="fixed lg:w-40">
				<h1 class="capitalize">{data.meta.title}</h1>
				<p class="mt-2 text-gray-500">{formatDate(data.meta.date)}</p>
			</div>
		</hgroup>
	</article>
</div>

<style>
	.prose :is(h2, h3, h4, h5, h6) {
		@apply mt-8 mb-3;
	}
	.prose :is(p) {
		@apply text-lg;
	}
	.prose :is(ul, ol) {
		@apply pl-5;
	}
	.prose :is(ul, ol) li {
		@apply my-2 pl-2;
	}

	.prose :is(a) {
		@apply text-[#0000FF] underline decoration-2 underline-offset-2;
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
