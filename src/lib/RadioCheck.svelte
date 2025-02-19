<script lang="ts">
	let { falseValue = 'No', trueValue = 'Yes', label = '', disabled = false, name = '', group = $bindable(falseValue), HelperComponent = null } = $props();


</script>


<div class="flex flex-col gap-4 bg-black/70 p-6 text-2xl/snug text-white">
<button type="button" class="checkbox-container  text-start hover:cursor-pointer" onclick={() => group = group === trueValue ? falseValue : trueValue}>
	<label for={name} class="hidden items-center gap-4 hover:cursor-pointer"><span class="label">{@html label}</span></label>
	<input type="radio" bind:group value={trueValue} {disabled} {name} id={name} class="hidden" />
	<input type="radio" bind:group value={falseValue} {disabled} {name} id={name} class="hidden" />
	<div class="flex items-center gap-4 hover:cursor-pointer" >
		<div class="flex aspect-square h-[1.5rem] items-center justify-center bg-white/20">
			{#key group}
				{#if group === trueValue}
					<i class="fa-solid fa-check"></i>
				{/if}
			{/key}
		</div>
		{#if label}
			<span class="label">{@html label}</span>
		{/if}
	</div>

</button>
{#if HelperComponent}
<div class="text-xl">
	<HelperComponent />
</div>
{/if}
</div>

<style>
</style>
