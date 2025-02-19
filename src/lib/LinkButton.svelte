<script lang="ts">
	let {  children, component = 'a', ...rest } = $props();
</script>

<svelte:element this={component} {...rest} class={["relative w-fit bg-black/70 p-8", rest?.disabled ? 'text-gray-500' : 'text-white', rest.class]}>
	{@render children()}
	<div class={["gradient-halo gradient-background absolute inset-0 text-white", rest?.disabled ? 'filter grayscale transition-filter duration-500' : '']}></div>
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
