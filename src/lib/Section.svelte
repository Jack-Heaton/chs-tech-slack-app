<script lang="ts">
	let { paragraphs } = $props();
</script>

<div class="bg-black/70 p-6 text-2xl/snug text-white">
	{#each paragraphs as paragraph}
		<div class="p-2">{paragraph}</div>
	{/each}
</div>
