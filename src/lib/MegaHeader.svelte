<script lang="ts">
	let { lines } = $props();
</script>

{#each lines as line}
	<div class="flex flex-row font-bold">
		<div class="bg-black/70">
			<span class="gradient-background gradient-mask p-6 text-center">{line}</span>
		</div>
	</div>
{/each}
