<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center p-6">
	<div class="flex max-w-3xl flex-col gap-6  text-6xl sm:text-[8rem]/tight">
		{@render children()}
	</div>
</div>
