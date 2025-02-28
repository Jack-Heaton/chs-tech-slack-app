<script lang="ts">
	let { children } = $props();
</script>

<div class="flex flex-col items-center p-6">
	<div class="flex max-w-4xl flex-col gap-6 text-5xl/tight text-white sm:text-6xl/tight">
		{@render children()}
	</div>
</div>
