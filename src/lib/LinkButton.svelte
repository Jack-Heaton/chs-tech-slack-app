<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} class="relative w-fit bg-black/70 p-8 text-white">
	{@render children()}
	<div class="gradient-halo gradient-background absolute inset-0 text-white"></div>
</a>

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
