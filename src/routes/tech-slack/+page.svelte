<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>

<div class="flex flex-col gap-4">
	<MegaHeader lines={['CHARLESTON', 'TECH SLACK']} />
</div>

<Section
	paragraphs={[
		'Participate in discourse on all things Charleston, technology, and more by joining our Slack.',
		'To get access, please run throught our quick onboarding process.'
	]}
/>

<Section paragraphs={[' To start: Which of the following best describes you?']} />
<div class="flex flex-col gap-4 text-2xl/tight text-white">
	<LinkButton href="/tech-slack/professional">I'm a technology professional.</LinkButton>
	<LinkButton href="/tech-slack/student">I'm a student in a technology field.</LinkButton>
	<LinkButton href="/tech-slack/interested">I'm interested in technology.</LinkButton>
	<LinkButton href="/tech-slack/recruiter">I'm a recruiter of technology professionals.</LinkButton>
	<LinkButton href="/tech-slack/spammer">I'm a spammy spammer.</LinkButton>
	<LinkButton href="/tech-slack/other">I'm something else.</LinkButton>
</div>
