<template>

	<div class="portfolio-page">

		<Page title="Portfolio">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">
						
						<div class="card h-100">
	
							<img class="card-img-top" src="/static/images/depositphotos_41918063-stock-photo-business-people-meeting-in-office.webp" alt="Clients">
							
							<div class="card-body left">
								
								<h5 class="card-title">Clients</h5>

								<p class="card-text">View the clients worked with and the projects that were delivered to them.</p>

								<RouterLink to="/portfolio/clients" class="btn btn-primary">View Clients</RouterLink>
								
							</div>

						</div>
												
					</div>

					<div class="col">
						
						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/technology.webp" alt="Technology">
							
							<div class="card-body left">
								
								<h5 class="card-title">Technology</h5>

								<p class="card-text">Learn about the core technologies used to develop sites and applications for clients.</p>

								<RouterLink to="/portfolio/technology" class="btn btn-primary">Learn More</RouterLink>
								
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

