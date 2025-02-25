<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import ChecklistForm from '$lib/ChecklistForm.svelte';
	import CodeOfConductHelper from '$lib/CodeOfConductHelper.svelte';
	let checklistItems = $state([
		{
			label: 'I will post quality job listings with competitive compensation.',
			name: 'I will post quality jobs',
			group: 'No',
		},
		{
			label: 'I will post real jobs that are will be filled in a reasonable amount of time.',
			name: 'I will post real jobs',
			group: 'No',
		},
		{
			label: 'I will post jobs local to Charleston, SC, USA area or that are remote.',
			name: 'I will post local or remote jobs',
			group: 'No',
		},
		{
			label: 'I will job listings in the #job-listings channel only.',
			name: 'I will post in the right channel',
			group: 'No',
		},
		{
			label: 'I will be responsive to questions and comments left by users on my job listings.',
			name: 'I will be responsive',
			group: 'No',
		},
		{
			label: 'If I interview a candidate, I will not ghost them, and I will keep them in the loop, even if they do not ultimately get the job.',
			name: 'I will not ghost candidates',
			group: 'No',
		},
		{
			label: 'I will report for-hire spammers. For example, those that respond to job listings attempting to solicit business.',
			name: 'I will be responsive',
			group: 'No',
		},
		{
			label: 'I agree to abide by the Charleston Technology Code of Conduct',
			name: 'I agree to abide by the Charleston Technology Code of Conduct',
			HelperComponent: CodeOfConductHelper,
			group: 'No',
		}
	]);

</script>

<div class="flex flex-row flex-wrap gap-4">
	<MegaHeader lines={['TECH SLACK', 'RECRUITER SIGNUP']} />
</div>

<Section
	paragraphs={[
		'We welcome recruiters to join our Tech Slack Community.',
		'Please check each box below that you agree with:'
	]}
/>


<ChecklistForm 
	backUrl="/tech-slack"
	nextUrl="/tech-slack/join"
	bind:checklistItems={checklistItems}
	additionalFormData={{
		role: 'recruiter'
	}}
/>
