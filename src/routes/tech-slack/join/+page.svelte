<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import Input from '$lib/Input.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import LinkButton from '$lib/LinkButton.svelte';


	let submitDisabled = $state(true);

	function javascriptCallback(e: CustomEvent<{ token: string; preClearanceObtained: boolean; }>) {
		submitDisabled = false;
	}



</script>

<div class="flex flex-col gap-4">
	<MegaHeader lines={['SUBMIT', 'REQUEST', 'TO JOIN', ' CHS TECH SLACK']} />
</div>

<Section
	paragraphs={[
		'Thank you for completing our onboarding checklist.',
		'To wrap up, please sumbit your name and the email you will use to login below. The moderator team will review your request and get back to you with next steps ASAP.'
	]}
/>

<form action="/bot-trap" method="POST" class="flex flex-col gap-6">
	<Input label="Name" name="name" />
	<Input label="Email" name="email" type="email" />

	<Turnstile siteKey="0x4AAAAAAA9dmXoA3cPKy9D7" on:callback={javascriptCallback} size="flexible" />

	<div class="flex flex-row-reverse justify-between gap-6">
		<LinkButton type="submit" disabled={submitDisabled}>Submit</LinkButton>
		<LinkButton href="/">Cancel</LinkButton>
	</div>
</form>