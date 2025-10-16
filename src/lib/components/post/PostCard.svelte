<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { Post } from '$lib/types';
	import { goto } from '$app/navigation';

	let { title, slug, description, date }: Post = $props();

	function gotoPost(slug: string): void {
		goto(`/${slug}`);
	}
</script>

<button onclick={() => gotoPost(slug)} class="border-2 p-[1px] cursor-pointer text-left">
	<div class="w-full border-2 bg-white p-2 flex flex-col gap">
		<p class="capitalize">{title}</p>
		<p class="text-gray-500">{formatDate(date)}</p>
		<p class="mt-2">{description}</p>
	</div>
</button>
