<template>

	<div class="development-page">

		<Page title="Development">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4 mb-4">

					<div class="col">

						<div class="card h-100">


							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faCubes" size="3x" class="mb-3" />
								
								<h5 class="card-title">Scalable Architectural Patterns</h5>

								<p class="card-text">Scalable architectural patterns empower clients with the flexibility to expand their web applications seamlessly as their user base grows. This scalability ensures that clients can handle increased traffic, maintain consistent performance, and evolve their digital presence in alignment with their business objectives, ultimately maximizing their online success.</p>
								
							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faMicrochip" size="3x" class="mb-3" />
								
								<h5 class="card-title">Microservice Mindset</h5>

								<p class="card-text">This approach offers clients increased agility and scalability by breaking down complex systems into smaller, independent services that can be developed, deployed, and scaled individually. By enabling clients to efficiently adapt to changing market demands, it ultimately ensures the long-term success and competitiveness of their web applications.</p>
								
							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">
								
								<FontAwesomeIcon :icon="faAtom" size="3x" class="mb-3" />
								
								<h5 class="card-title">Core Technologies</h5>

								<p class="card-text">We specialize in JavaScript and PHP, offering unparalleled expertise in these core technologies. We harness the power of JavaScript for dynamic front-end experiences and PHP for server-side functionality, ensuring seamless integration and performance optimization.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faJira" size="3x" class="mb-3" />
								
								<h5 class="card-title">Agile Development Process</h5>

								<p class="card-text">Our consultancy follows a typical Agile development process, emphasizing collaboration and adaptability. With iterative development cycles, frequent client feedback, and a commitment to client-centric solutions, we ensure that your evolving needs are met efficiently and effectively throughout the project lifecycle.</p>
								
							</div>

						</div>

					</div>

				</div>

			</template>
			
		</Page>

	</div>

</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faCubes, faMicrochip } from '@fortawesome/free-solid-svg-icons';

import Page from '@/views/layouts/Page.vue';
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
</style>

