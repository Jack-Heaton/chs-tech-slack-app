<script lang="ts">
	let { lines } = $props();
</script>

<div class="flex flex-col gap-4">
{#each lines as line, index}
<div class="flex flex-row gap-4 flex-wrap font-bold">
	{#each line.split(' ') as word}
	<div class="bg-black/70">
		<div class="gradient-background gradient-mask p-6 text-center">{word}</div>
	</div>
		{/each}
	</div>
{/each}
</div>