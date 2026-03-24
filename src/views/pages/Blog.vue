<template>

	<div class="blog-page">

		<Page title="Blog">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div v-for="post in posts" class="col">

						<BlogCard class="h-100" :imageUrl="post.imageUrl" :imageTitle="post.imageTitle" :title="post.title" :excerpt="post.excerpt" :buttonUrl="post.buttonUrl" :buttonLabel="post.buttonLabel" />

					</div>

				</div>

			</template>
			
		</Page>

	</div>

</template>

<script setup>
import Page from '@/views/layouts/Page.vue';
import BlogCard from '@/components/Cards/Blog.vue';

const posts = [
	{
		imageUrl: '/static/images/korba-consulting-logo-800x533.png',
		imageTitle: 'The 10 Year Project',
		title: 'The 10 Year Project',
		excerpt: 'I dive into the how and why this site took nearly 10 years to develop and complete.',
		buttonUrl: '/blog/the-10-year-project',
		buttonLabel: 'Read More'
	}
]
</script>

<style lang="scss" scoped>
</style>

