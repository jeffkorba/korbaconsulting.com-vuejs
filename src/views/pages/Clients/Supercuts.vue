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
		imageUrl: '/static/images/supercuts-rock-the-cut.png',
		imageTitle: 'Rock the Cut',
		title: 'Rock the Cut',
		excerpt: 'This was a microsite designed to promote a Supercuts marketing campaign.',
		badges: ['CSS', 'HTML', 'JavaScript', 'MySQL', 'PHP']
	}
]
</script>

<style lang="scss" scoped>
</style>