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
		imageUrl: '/static/images/allstate-fortify-digital-safety.webp',
		imageTitle: 'Fortify Digital Safety',
		title: 'Fortify Digital Safety',
		excerpt: 'This was a web-based mobile application that served as a proof-of-concept for a digital safety product. It would eventually evolve into a real service.',
		badges: ['AngularJS', 'CSS', 'Git', 'HTML', 'JavaScript', 'Trello']
	}
]
</script>

<style lang="scss" scoped>
</style>