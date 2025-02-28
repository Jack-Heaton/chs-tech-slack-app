<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
</script>

<div class="flex flex-row flex-wrap gap-4">
	<MegaHeader lines={['THANK YOU']} />
</div>

<Section
	paragraphs={[
		'The moderator team will review your request and get back to you via email with next steps ASAP.'
	]}
/>

<LinkButton href="/">Return Home</LinkButton>
