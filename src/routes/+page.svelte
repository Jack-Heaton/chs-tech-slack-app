<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-6">
	<div class="flex max-w-3xl flex-col gap-6 text-6xl sm:text-[8rem]/tight">
		<MegaHeader lines={['CHS', 'TECH']} />

		<Section
			paragraphs={[
				'We are a community of technology adjacent humans in the Charleston, South Carolina, USA area.'
			]}
		/>
		<div class="flex flex-col gap-4">
			<LinkButton href="/tech-slack">
				<div class="flex flex-row items-center gap-2">
					<i class="fa-brands fa-slack fa-fw" data-fa-transform="grow-6"></i>
					<span class="ps-2">Charleston Tech Slack</span>
				</div>
			</LinkButton>

			<LinkButton href="/meet-up-calendar">
				<div class="flex flex-row items-center gap-2">
					<i class="fa-solid fa-calendar fa-fw" data-fa-transform="grow-6"></i>
					<span class="ps-2">Community Meetup Calendar</span>
				</div>
			</LinkButton>
		</div>
	</div>
</div>
