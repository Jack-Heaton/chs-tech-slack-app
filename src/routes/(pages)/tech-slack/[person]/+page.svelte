<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import ChecklistForm from '$lib/ChecklistForm.svelte';
	import CodeOfConductHelper from '$lib/CodeOfConductHelper.svelte';
	import { page } from '$app/state';
	let checklistItems = $state([
		{
			label: 'I agree to abide by the Charleston Technology Code of Conduct',
			name: 'I agree to abide by the Charleston Technology Code of Conduct',
			HelperComponent: CodeOfConductHelper,
			group: 'No',
		}
	]);

</script>

<div class="flex flex-row flex-wrap gap-4">
	<MegaHeader lines={['TECH SLACK', 'SIGNUP']} />
</div>

<Section
	paragraphs={[
		'We welcome recruiters to join the CHS Tech Slack Community.',
		'Please check each box below that you agree with:'
	]}
/>


<ChecklistForm 
	backUrl="/tech-slack"
	nextUrl="/tech-slack/join"
	bind:checklistItems={checklistItems}
	additionalFormData={{
		role: page.params.person
	}}
/>
