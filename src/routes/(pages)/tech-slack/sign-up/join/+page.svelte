<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import Section from '$lib/Section.svelte';
	import Input from '$lib/Input.svelte';
	import { Turnstile } from 'svelte-turnstile';
	import LinkButton from '$lib/LinkButton.svelte';
	import { PUBLIC_TURNSTILE_SITEKEY } from '$env/static/public';
	import { page } from '$app/state';
	import { redirect } from '@sveltejs/kit';

	const req = page.url.searchParams.get('req');

	if (!req) {
		redirect(302, '/tech-slack');
	}

	try {
		JSON.parse(atob(req));
	} catch {
		redirect(302, '/tech-slack');
	}

	let callbackSuccess = $state(false);

	let name = $state('');
	let email = $state('');

	function javascriptCallback(e: CustomEvent<{ token: string; preClearanceObtained: boolean }>) {
		callbackSuccess = true;
	}

	let submitDisabled = $derived(() => {
		return !callbackSuccess || !name || !email;
	});
</script>

<div class="flex flex-col gap-4">
	<MegaHeader lines={['SUBMIT', 'REQUEST TO JOIN']} />
</div>

<Section
	paragraphs={[
		'Thank you for completing our onboarding checklist.',
		'To wrap up, please submit your name and the email you will use to login below. The moderator team will review your request and get back to you with next steps ASAP.'
	]}
/>

<form action="/tech-slack/sign-up/request-complete" method="POST" class="flex flex-col gap-6">
	<Input label="Name" name="name" bind:value={name} />
	<Input label="Email" name="email" type="email" bind:value={email} />

	<input type="hidden" name="requestData" value={req} />

	<Turnstile siteKey={PUBLIC_TURNSTILE_SITEKEY} on:callback={javascriptCallback} size="flexible" />

	<div class="flex flex-row-reverse justify-between gap-6">
		<LinkButton element="button" type="submit" disabled={submitDisabled()}>Submit</LinkButton>
		<LinkButton href="/tech-slack">Cancel</LinkButton>
	</div>
</form>
