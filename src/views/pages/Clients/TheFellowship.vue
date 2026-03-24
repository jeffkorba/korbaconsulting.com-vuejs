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
		imageUrl: '/static/images/the-fellowship-rabbi-eckstein.webp',
		imageTitle: 'Rabbi Eckstein Memorial',
		title: 'Rabbi Eckstein Memorial',
		excerpt: 'A microsite designed to memorialize the life and mission of Rabbi Yechiel Eckstein.',
		badges: ['Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'Jira', 'Vue.js']
	},
	{
		imageUrl: '/static/images/the-fellowship-united-states.webp',
		imageTitle: 'IFCJ - United States',
		title: 'IFCJ - United States',
		excerpt: 'The main site for The Fellowship to engage with their donor base as well as promote their mission and outreach.',
		badges: ['Azure', 'Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'Jira', 'PHP', 'Vue.js', 'WordPress']
	},
	{
		imageUrl: '/static/images/the-fellowship-korea.webp',
		imageTitle: 'IFCJ - Korea',
		title: 'IFCJ - Korea',
		excerpt: 'A site designed for the opening of the new South Korean office of The Fellowship.',
		badges: ['CSS', 'HTML', 'PHP', 'WordPress']
	},
	{
		imageUrl: '/static/images/korba-consulting-logo-800x533.png',
		imageTitle: 'Newsletter Generator',
		title: 'Newsletter Generator',
		excerpt: 'This tool was designed to streamline the generation of newsletters by changing how data was input.',
		badges: ['CSS', 'HTML', 'PHP']
	},
	{
		imageUrl: '/static/images/the-fellowship-web-services.webp',
		imageTitle: 'Web Services',
		title: 'Web Services',
		excerpt: 'Web Services was an application designed to manage form data for donations and surveys.',
		badges: ['Azure', 'Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'Laravel', 'MySQL', 'PHP', 'Vue.js']
	},
	{
		imageUrl: '/static/images/the-fellowship-web-forms.webp',
		imageTitle: 'Web Forms',
		title: 'Web Forms',
		excerpt: 'Web Forms was an application designed to promote various programs or campaigns to The Fellowship donor base.',
		badges: ['Azure', 'Bootstrap', 'CSS', 'Git', 'HTML', 'JavaScript', 'Jira', 'Laravel', 'MySQL', 'PHP', 'Vue.js']
	},
	{
		imageUrl: '/static/images/korba-consulting-logo-800x533.png',
		imageTitle: 'Donor Portal',
		title: 'Donor Portal',
		excerpt: 'Donor Portal was an application designed to allow donors to manage their accounts with The Fellowship.',
		badges: ['ASP.NET Core', 'Bootstrap', 'C#', 'CSS', 'Git', 'HTML', 'JavaScript', 'Jira', 'PHP', 'Vue.js']
	}
]
</script>

<style lang="scss" scoped>
</style>