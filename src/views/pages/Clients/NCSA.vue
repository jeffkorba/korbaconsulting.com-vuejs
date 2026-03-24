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
		imageUrl: '/static/images/ncsa-team-edition.png',
		imageTitle: 'Team Edition',
		title: 'Team Edition',
		excerpt: 'Team Edition was designed to let coaches and clubs track and guide their athletes\' recruitment process.',
		badges: ['AngularJS', 'CSS', 'HTML', 'JavaScript', 'React']
	}
]
</script>

<style lang="scss" scoped>
</style>