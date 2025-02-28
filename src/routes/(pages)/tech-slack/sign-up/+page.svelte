<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>

<MegaHeader lines={['CHARLESTON', 'TECH SLACK']} />

<Section
	paragraphs={[
		'To get access, please run throught our quick onboarding process.',
		'To start: Which of the following best describes you?'
	]}
/>
<div class="flex flex-col gap-4 text-2xl/tight text-white">
	<LinkButton href="/tech-slack/sign-up/professional" class="w-full"
		>I'm a technology professional.</LinkButton
	>
	<LinkButton href="/tech-slack/sign-up/student" class="w-full"
		>I'm a student in a technology field.</LinkButton
	>
	<LinkButton href="/tech-slack/sign-up/interested" class="w-full"
		>I'm interested in technology.</LinkButton
	>
	<LinkButton href="/tech-slack/sign-up/recruiter" class="w-full"
		>I'm a recruiter of technology professionals.</LinkButton
	>
	<LinkButton href="https://www.linkedin.com/" class="w-full">I'm a spammy spammer.</LinkButton>
	<LinkButton href="/tech-slack/sign-up/other" class="w-full">I'm something else.</LinkButton>
	<LinkButton href="/tech-slack" class="w-full">Go Back</LinkButton>
</div>
