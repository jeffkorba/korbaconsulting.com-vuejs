<template>

	<div class="technology-page">

		<Page title="Technology">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<div class="card h-100">

							<img class="card-img-top" src="/static/images/technology-wordpress.webp" alt="WordPress">
							
							<div class="card-body left">

								<h5 class="card-title">WordPress</h5>

								<p class="card-text">We excel in custom WordPress solutions, tailoring the world's most popular content management system to meet your specific requirements. Whether it's building a corporate website, e-commerce platform, or a blog, we leverage the full potential of WordPress to deliver user-friendly and feature-rich websites.</p>
								
							</div>

						</div>
												
					</div>

					<div class="col">

						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/technology-laravel.webp" alt="Laravel">

							<div class="card-body left">
								
								<h5 class="card-title">Laravel</h5>

								<p class="card-text">Laravel offers clients the advantage of rapid development, robust security features, and an extensive ecosystem of plugins and packages. This results in faster time-to-market, reduced development costs, and the confidence that their web applications will be both feature-rich and highly secure, ultimately enhancing their online presence and user experiences.</p>
								
							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/technology-vuejs.webp" alt="Vue.js">
							
							<div class="card-body left">
								
								<h5 class="card-title">Vue.js</h5>

								<p class="card-text">Vue.js empowers clients with exceptionally responsive and interactive web interfaces, enhancing user engagement and satisfaction. Its modular architecture and strong developer community support ensure that clients receive feature-rich, maintainable web applications that can adapt and scale to meet their evolving business needs.</p>
								
							</div>

						</div>

					</div>

				</div>

			</template>
			
		</Page>

	</div>

</template>

<script setup>
import Page from '@/views/layouts/Page.vue';
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
</style>

