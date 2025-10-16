<script lang="ts">
	import Venus from '$lib/components/Venus.svelte';
	import { formatDate } from '$lib/utils';
	// import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>Mythologizer</title>
</svelte:head>
<div class="w-full h-full flex items-center justify-center">
	<Venus />
</div>
