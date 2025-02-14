<script lang="ts">
	let { checked = false, label = '', disabled = false, name = '' } = $props();
</script>

<label class="checkbox-container bg-black/70 p-6 text-2xl/snug text-white">
	<input type="checkbox" bind:checked {disabled} {name} id={name} class="hidden" />
	<label for={name} class="flex items-center gap-4 hover:cursor-pointer">
		<div class="flex aspect-square h-[1.5rem] items-center justify-center bg-white/20">
			{#key checked}
				{#if checked}
					<i class="fa-solid fa-check"></i>
				{/if}
			{/key}
		</div>
		{#if label}
			<span class="label">{@html label}</span>
		{/if}
	</label>
</label>

<style>
</style>
