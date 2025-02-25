<script lang="ts">
	import RadioCheck from './RadioCheck.svelte';
	import LinkButton from './LinkButton.svelte';
	import type { SvelteComponent } from 'svelte';

	type ChecklistItem = {
		label: string;
		name: string;
		group: string;
		HelperComponent?: SvelteComponent;
	};

	let {
		checklistItems = $bindable<ChecklistItem[]>([]),
		backUrl = '/tech-slack',
		nextUrl = '/tech-slack/join',
		additionalFormData = {}
	} = $props();

	let reqUrl = $derived(() => {
		const data: Record<string, string> = {};

		checklistItems.forEach((item) => {
			data[item.name] = item.group;
		});

		Object.entries(additionalFormData).forEach(([key, value]) => {
			data[key] = value;
		});

		return btoa(JSON.stringify(data));
	});
</script>

<form action="/bot-trap" method="POST" class="flex flex-col gap-6">
	<div class="flex flex-col gap-4">
		{#each checklistItems as item}
			<RadioCheck
				label={item.label}
				name={item.name}
				bind:group={item.group}
				HelperComponent={item.HelperComponent}
			/>
		{/each}

		<div class="flex flex-row flex-wrap justify-between gap-6">
			<LinkButton href={backUrl}>Back</LinkButton>
			<LinkButton href={`${nextUrl}?req=${reqUrl()}`}>Next</LinkButton>
			<LinkButton type="submit" element="button" tabIndex={-1} class="hidden"
				>Submit for Bots Don't Click This</LinkButton
			>
		</div>
	</div>
</form>
