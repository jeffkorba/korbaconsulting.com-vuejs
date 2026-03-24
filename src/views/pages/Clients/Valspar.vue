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
		imageUrl: '/static/images/valspar-ask-val.jpg',
		imageTitle: 'Ask Val',
		title: 'Ask Val',
		excerpt: 'This site was intended to help market paint colors by taking user selected swatches and pairing them with the respective equivalent paint color.',
		badges: ['ASP.NET MVC', 'C#', 'CSS', 'Git', 'HTML', 'JavaScript', 'jQuery']
	}
]
</script>

<style lang="scss" scoped>
</style>