<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col items-center p-16">
	<div class="flex max-w-4xl flex-col gap-6 text-[4rem]/tight">
		{@render children()}
	</div>
</div>
