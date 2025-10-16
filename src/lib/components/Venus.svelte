<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { frames } from '$lib/assets/frames.js';

	interface Props {
		frameRate?: number;
	}

	let { frameRate = 30 }: Props = $props();

	let currentFrame: number = $state(0);
	let animationId: number | null = null;
	let lastTime: number = 0;

	const frameInterval = 1000 / frameRate;

	function animate(timestamp: number): void {
		if (timestamp - lastTime >= frameInterval) {
			currentFrame = (currentFrame + 1) % frames.length;
			lastTime = timestamp;
		}

		animationId = requestAnimationFrame(animate);
	}

	function startAnimation(): void {
		if (animationId) return;
		animationId = requestAnimationFrame(animate);
	}

	onMount(() => {
		startAnimation();
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});
</script>

<div class="whitespace-pre font-mono text-sm leading-tight">
	{frames[currentFrame]}
</div>
