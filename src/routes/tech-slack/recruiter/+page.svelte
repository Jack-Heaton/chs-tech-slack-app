<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import ChecklistForm from '$lib/ChecklistForm.svelte';
	import CodeOfConductHelper from '$lib/CodeOfConductHelper.svelte';
	let checklistItems = $state([
		{
			label: 'I will post quality jobs',
			name: 'qualityJobs',
			group: 'No',
		},
		{
			label: 'I will post real jobs',
			name: 'realJobs',
			group: 'No',
		},
		{
			label: 'I will post local or remote jobs',
			name: 'localOrRemoteJobs',
			group: 'No',
		},
		{
			label: 'I will post in the right channel',
			name: 'rightChannel',
			group: 'No',
		},
		{
			label: 'I will be responsive',
			name: 'responsive',
			group: 'No',
		},
		{
			label: 'I will not ghost candidates',
			name: 'noGhosting',
			group: 'No',
		},
		{
			label: 'I agree to abide by the Charleston Tech Slack Code of Conduct',
			name: 'codeOfConduct',
			HelperComponent: CodeOfConductHelper,
			group: 'No',
		}
	]);

</script>

<div class="flex flex-row flex-wrap gap-4">
	<MegaHeader lines={['TECH SLACK', 'RECRUITER', 'SIGNUP']} />
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
/>
