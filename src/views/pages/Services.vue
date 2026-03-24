<template>

	<div class="services-page">

		<Page title="Services">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">
						
						<div class="card h-100">
	
							<img class="card-img-top" src="/static/images/consulting.jpg" alt="Consulting">
							
							<div class="card-body left">
								
								<h5 class="card-title">Consulting</h5>

								<p class="card-text">Understanding a client's business is only the start to earning their confidence. Being able to develop strategies that drive innovation and foster growth are requisites to maintaining a long-term client relationship.</p>

								<RouterLink to="/services/consulting/" class="btn btn-primary">Learn More</RouterLink>
								
							</div>

						</div>

					</div>

					<div class="col">
						
						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/development.jpg" alt="Development">
							
							<div class="card-body left">
								
								<h5 class="card-title">Development</h5>

								<p class="card-text">If you want to build quality software, you have to build a solid foundation for each system layer to rest upon. That means focusing on the bigger picture and not simply features and functionality.</p>

								<RouterLink to="/services/development/" class="btn btn-primary">Learn More</RouterLink>
								
							</div>

						</div>

					</div>

					<div class="col">
						
						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/design.jpg" alt="Design">
							
							<div class="card-body left">
								
								<h5 class="card-title">Design</h5>

								<p class="card-text">Properly organizing content and strategically choosing what information to present is vital to achieving a user-friendly, visually appealing experience, that promotes engagement and realizes business goals.</p>

								<RouterLink to="/services/design/" class="btn btn-primary">Learn More</RouterLink>
								
							</div>

						</div>

					</div>

					<div class="col">
						
						<div class="card h-100">
								
							<img class="card-img-top" src="/static/images/managed-services.jpg" alt="Managed Services">
							
							<div class="card-body left">
								
								<h5 class="card-title">Managed Services</h5>

								<p class="card-text">Not all businesses need or want to invest the time and energy maintaining their site or application. Providing application support as well as managing infrastructure are crucial to reducing a business's overhead and costs.</p>

								<RouterLink to="/services/managed-services/" class="btn btn-primary">Learn More</RouterLink>
								
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

