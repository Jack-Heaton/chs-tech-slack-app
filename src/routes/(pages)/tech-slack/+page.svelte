<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>

<MegaHeader lines={['CHARLESTON', 'TECH SLACK']} />

<Section
	paragraphs={[
		'Participate in discourse on all things Charleston, technology, and more by joining our Slack.',
		'To get access, please run throught our quick onboarding process.'
	]}
/>

<LinkButton href="/tech-slack/sign-up">Get Access</LinkButton>
<LinkButton href="/tech-slack/channel-guide">Channel Guide</LinkButton>
<LinkButton href="/">Return Home</LinkButton>
