<script lang="ts">
	let {  children, element = 'a', ...rest } = $props();
</script>

<svelte:element this={element} {...rest} class={["relative w-fit bg-black/70 p-10 text-2xl/tight sm:text-3xl/tight font-bold uppercase transition-all duration-700", rest?.disabled ? 'text-gray-500' : 'text-white cursor-pointer', rest.class]}>
	{@render children()}
	<div class={["gradient-halo gradient-background absolute inset-0 text-white transition-all duration-700", rest?.disabled ? 'filter grayscale ' : '']}></div>
</svelte:element>

<style>
	.gradient-halo {
		clip-path: polygon(
			0 0,
			100% 0,
			100% 100%,
			0 100%,
			0 10px,
			10px 10px,
			10px calc(100% - 10px),
			calc(100% - 10px) calc(100% - 10px),
			calc(100% - 10px) 10px,
			0 10px
		);
	}
</style>
