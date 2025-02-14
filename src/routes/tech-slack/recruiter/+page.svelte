<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import Checkbox from '$lib/Checkbox.svelte';

	const handleSubmit = (event: Event) => {
		event.preventDefault();
		console.log('submitted');
	};
</script>

<div class="flex flex-col gap-4">
	<MegaHeader lines={['TECH SLACK', 'RECRUITER SIGNUP']} />
</div>

<Section
	paragraphs={[
		'We welcome recruiters to join our Tech Slack Community.',
		'Please check each box below that you agree with:'
	]}
/>

<form action="/tech-slack/join" method="POST" class="flex flex-col gap-4">
	<Checkbox
		label="I am recruiting for <strong>quality</strong> technology jobs."
		name="I will post quality jobs"
	/>
	<Checkbox
		label="I am recruiting for <strong>real</strong> jobs that will be filled immediately or very soon."
		name="I will post real jobs"
	/>
	<Checkbox
		label="I'm recruiting for jobs that are either in the <strong>Charleston, South Carolina, USA</strong> area or are otherwise <strong>fully remote</strong>."
		name="I will post local or remote jobs"
	/>
	<Checkbox
		label="I will post jobs in the <strong>#job-postings</strong> channel and not spam other channels. It's okay and we welcome you to have real conversations about the job in other channels."
		name="I will post in the right channel"
	/>
	<Checkbox
		label="When a post a job, I will monitor the post, respond to any questions, and will respond to direct messages."
		name="I will be responsive"
	/>
	<Checkbox
		label="If I interview a candidate sourced from this Slack community, I will not ghost them. I will let them know the status of the interview and the next steps."
		name="I will not ghost candidates"
	/>
	<button type="submit">Join</button>
</form>
