<template>

	<div class="company-page">

		<Page title="Company">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<div class="card h-100">
	
							<img class="card-img-top" src="/static/images/blog.jpg" alt="Blog">
							
							<div class="card-body left">
								
								<h5 class="card-title">Blog</h5>

								<p class="card-text">Find out the latest news and technology updates.</p>

								<RouterLink to="/blog/" class="btn btn-primary">View Blog</RouterLink>
								
							</div>

						</div>
												
					</div>

					<div class="col">

						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/korba-consulting-logo-800x533.png" alt="About">
							
							<div class="card-body left">
								
								<h5 class="card-title">About</h5>

								<p class="card-text">Learn about what the company does as well as how its development strategies empower its clients.</p>

								<RouterLink to="/company/about/" class="btn btn-primary">Learn More</RouterLink>
								
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
</script>

<style lang="scss" scoped>
</style>

