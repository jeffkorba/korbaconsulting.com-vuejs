<template>

	<Page title="Projects">

		<template v-slot:content>

			<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

				<div v-for="project in projects" class="col">

					<ProfileCard class="h-100" :imageUrl="project.imageUrl" :imageTitle="project.imageTitle" :title="project.title" :excerpt="project.excerpt" :badges="project.badges" />

				</div>

			</div>

		</template>
		
	</Page>

</template>

<script setup>
import Page from '@/views/layouts/Page.vue';
import ProfileCard from '@/components/Cards/Project.vue';

const projects = [
	{
		imageUrl: '/static/images/northern-trust-125-year-anniversary.png',
		imageTitle: '125 Year Anniversary',
		title: '125 Year Anniversary',
		excerpt: 'This microsite was designed to showcase a timeline of 125 years of corporate achievements. The biggest challenge was implementing a responsive design in a legacy browser environment.',
		badges: ['Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'jQuery']
	},
	{
		imageUrl: '/static/images/northern-trust-achieve-greater.webp',
		imageTitle: 'Corporate Rebrand - Phase 1',
		title: 'Corporate Rebrand - Phase 1',
		excerpt: 'Phase 1 was a microsite geared toward the rebranding effort for the company. Initially the visibility included the 14,000+ people employed worldwide but would later be released to the public.',
		badges: ['AngularJS', 'Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript']
	},
	{
		imageUrl: '/static/images/northern-trust-rebrand.webp',
		imageTitle: 'Corporate Rebrand - Phase 2',
		title: 'Corporate Rebrand - Phase 2',
		excerpt: 'Phase 2 included two efforts. The first was to create a CSS frameowrk based on the theme built during Phase 1. The second was to integrate this framework on top of an internal application.',
		badges: ['AngularJS', 'Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript']
	}
]
</script>

<style lang="scss" scoped>
</style>