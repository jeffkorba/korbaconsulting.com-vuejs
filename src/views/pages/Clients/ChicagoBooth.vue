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
		imageUrl: '/static/images/chicago-booth-neilsen-datasets.webp',
		imageTitle: 'Nielsen Datasets',
		title: 'Nielsen Datasets',
		excerpt: 'This application was designed to accept project proposals which would go under a review process for later approval.',
		badges: ['CSS', 'HTML', 'JavaScript', 'jQuery', 'MySQL', 'PHP']
	}
]
</script>

<style lang="scss" scoped>
</style>