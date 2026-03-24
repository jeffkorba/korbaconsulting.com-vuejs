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
		imageUrl: '/static/images/optionshouse.webp',
		imageTitle: 'OptionsHouse',
		title: 'OptionsHouse',
		excerpt: 'The site was designed to showcase the company’s platform and services. The site required various data layers to be integrated as well as rewriting the front-end authentication layer for customer logins.',
		badges: ['CSS', 'Foundation', 'Git', 'HTML', 'JavaScript', 'Jira', 'jQuery', 'PHP', 'WordPress']
	},
	{
		imageUrl: '/static/images/apex-clearing.png',
		imageTitle: 'Apex Clearing',
		title: 'Apex Clearing',
		excerpt: 'This site was built to promote the launch of Apex Clearing, a business designed to facilitate the exchange of payments, securities, or derivatives transactions.',
		badges: ['CSS', 'Foundation', 'HTML', 'PHP', 'WordPress']
	}
]
</script>

<style lang="scss" scoped>
</style>