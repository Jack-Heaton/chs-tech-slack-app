<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex max-w-3xl flex-col gap-6 text-[10rem]/tight">
		<div class="flex flex-col gap-4">
			<MegaHeader lines={['CHS', 'TECH']} />
		</div>

		<Section
			paragraphs={[
				'We are a community of technology adjacent humans in the Charleston, South Carolina, USA area.'
			]}
		/>
		<div class="flex flex-col gap-4 text-2xl/tight font-medium text-white">
			<LinkButton href="/tech-slack">
				<i class="fa-brands fa-slack fa-fw" data-fa-transform="grow-6"></i>
				<span class="ps-2">Charleston Tech Slack</span>
			</LinkButton>

			<LinkButton href="https://www.meetup.com/charleston-tech-meetup/">
				<i class="fa-solid fa-calendar fa-fw" data-fa-transform="grow-6"></i>
				<span class="ps-2">Community Meetup Calendar</span>
			</LinkButton>
		</div>
	</div>
</div>
