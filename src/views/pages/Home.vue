<template>

	<div class="home">

		<div class="banner" @mouseover="carousel.isPaused = true" @mouseout="carousel.isPaused = false">

			<div class="container">

				<div id="carouselIndicators" class="carousel slide">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselIndicators" v-for="(slide, index) in carousel.slides" :class="{active: index == carousel.currentIndex}"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item" v-for="(slide, index) in carousel.slides" :class="{active: index == carousel.currentIndex}">
							<div class="carousel-body">
								<div class="carousel-title">{{ slide.title }}</div>
								<div class="carousel-subtitle">{{ slide.subtitle }}</div>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" @click="previousSlide()" >
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" @click="nextSlide()">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>

			</div>

		</div>

		<div class="featured-work">

			<div class="container">

				<div class="row">

					<div class="col-12">

						<h5>Featured Work</h5>

						<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

							<div class="col" v-for="client in clients">

								<RouterLink :to="client.linkUrl"><img class="img-fluid rounded border" :src="client.imageUrl" :alt="client.name" /></RouterLink>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

		<div class="notifications">

			<div class="container">

				<div class="row">

					<div class="col-lg-4 col-md-4 col-sm-12 mb-3">

						<h5>Blog</h5>

						<List :items="blog" />

					</div>

					<div class="col-lg-4 col-md-4 col-sm-12 mb-3">

						<h5>Events</h5>

						<List :items="events" />

					</div>

					<div class="col-lg-4 col-md-4 col-sm-12 mb-3">

						<h5>Updates</h5>

						<List :items="updates" />

					</div>

				</div>

			</div>

		</div>

	</div>

</template>

<script setup>
import { onMounted, reactive } from 'vue';

import List from '@/components/List.vue';

const carousel = reactive({
	currentIndex: 0,
	isPaused: false,
	slides: [
		{
			title: 'Process-Oriented Development',
			subtitle: 'Creating a process specific to the requirements of a business helps to model a development lifecycle that is time efficient and cost effective.'
		},
		{
			title: 'Scalable Architectural Patterns',
			subtitle: 'Systems need to scale. Using architectural patterns like MVC and MVVM help enforce architecture that allows your system to scale seamlessly.'
		},
		{
			title: 'Less Is More',
			subtitle: 'Systems can be complex, but the underlying architecture doesn\'t need to be. Reducing complexity, helps reduce the time and cost of future development.'
		}
	]
});

const clients = reactive([
	{
		name: 'Peak6',
		imageUrl: '/static/images/peak6.webp',
		linkUrl: '/portfolio/clients/peak6'
	},
	{
		name: '',
		imageUrl: '/static/images/chicago-booth.webp',
		linkUrl: '/portfolio/clients/chicago-booth'
	},
	{
		name: '',
		imageUrl: '/static/images/northern-trust.webp',
		linkUrl: '/portfolio/clients/northern-trust'
	}
]);

const blog = reactive([
	{
		title: 'The 10 Year Project',
		description: 'I dive into the how and why this site took nearly 10 years to develop and complete.',
		date: null,
		linkUrl: ''
	}
]);

const events = reactive([
	{
		title: 'AWS Summit Chicago',
		description: '',
		startDate: null,
		endDate: null,
		location: 'McCormick Place West',
		linkUrl: 'https://aws.amazon.com/summits/chicago'
	},
	{
		title: 'Styling WooCommerce',
		description: '',
		startDate: null,
		endDate: null,
		location: 'Holiday Club',
		linkUrl: 'https://www.meetup.com/Chicago-WordPress-Meetup/events/253584084'
	}
]);

const updates = reactive([
	{
		title: 'Theme Tweaks',
		description: 'Updated site dependencies, reorganized theme structure and added support for project details.',
		date: null,
		linkUrl: ''
	},
	{
		title: 'Content Updates',
		description: 'Added more details behind the individual projects between each client.',
		date: null,
		linkUrl: ''
	}
]);

onMounted(() => {

	cycleSlides();
})

function cycleSlides () {

	setInterval(() => {

		if (!carousel.isPaused) {

			nextSlide();
		}

	}, 3000);
}

function nextSlide () {

	if (carousel.currentIndex == carousel.slides.length - 1) {

		carousel.currentIndex = 0;
	}
	else {

		carousel.currentIndex++;
	}
}

function previousSlide () {

	if (carousel.currentIndex == 0) {

		carousel.currentIndex = carousel.slides.length - 1;
	}
	else {

		carousel.currentIndex--;
	}
}
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as vars;

.carousel-item {

	min-height: 20rem;
	padding: 4rem 0;

	.carousel-body {

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		text-align: center;
		min-height: inherit;
	}

	.carousel-title {

		font-size: 2.25rem;
		margin-bottom: 1rem;
		color: #fff;
		text-transform: uppercase;
	}

	.carousel-subtitle {

		font-size: 1.5rem;
		color: vars.$lightBlue;
		width: 66%;
		text-transform: uppercase;
	}
}

.banner {

		padding: 2rem 0;
		background-color: vars.$blue;

		h1 {

			margin: 0;
			color: #fff;
		}
	}

.home {

	.banner {

	    background-color: vars.$blue;
	}

	.featured-work {

		padding: 2rem 0;
		color: #666;
	}

	.notifications {

		padding: 2rem 0;
		background-color: #666;
		color: #fff;
	}
}
</style>