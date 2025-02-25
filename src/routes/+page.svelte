<script lang="ts">
	import MegaHeader from '$lib/MegaHeader.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import Section from '$lib/Section.svelte';
</script>


		<MegaHeader lines={['CHS', 'TECH']} />

		<Section
			paragraphs={[
				'We are a community of technology adjacent humans in the Charleston, South Carolina, USA area.'
			]}
		/>
		<div class="flex flex-col gap-4">
			<LinkButton href="/tech-slack">
				<div class="flex flex-row gap-2 items-center">
					<i class="fa-brands fa-slack fa-fw" data-fa-transform="grow-6"></i>
					<span class="ps-2">Charleston Tech Slack</span>
				</div>
			</LinkButton>

			<LinkButton href="https://www.meetup.com/charleston-tech-meetup/">
				<div class="flex flex-row gap-2 items-center">
					<i class="fa-solid fa-calendar fa-fw" data-fa-transform="grow-6"></i>
					<span class="ps-2">Community Meetup Calendar</span>
				</div>
			</LinkButton>
		</div>
