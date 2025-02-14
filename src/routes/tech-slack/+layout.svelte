<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-screen w-screen flex-col items-center py-16">
	<div class="flex max-w-3xl flex-col gap-6 text-[5rem]/tight">
		{@render children()}
	</div>
</div>
