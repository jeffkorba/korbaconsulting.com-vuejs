<template>

	<div class="managed-services-page">

		<Page title="Managed Services">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<div class="card h-100">

							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faBuilding" size="3x" class="mb-3" />

								<h5 class="card-title">Focus on Core Business</h5>

								<p class="card-text">Managed services allow web consultancies to offload routine tasks such as server maintenance, security updates, and monitoring, enabling them to focus on delivering high-value web solutions and strategic consulting to clients.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faLayerGroup" size="3x" class="mb-3" />
								
								<h5 class="card-title">Scalability and Flexibility</h5>

								<p class="card-text">Managed services providers often offer scalable solutions, allowing web consultancies to adapt to changing client needs without the burden of infrastructure management, ensuring they can efficiently handle projects of any size.</p>
								
							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faShield" size="3x" class="mb-3" />
								
								<h5 class="card-title">Enhanced Security and Compliance</h5>

								<p class="card-text">Managed services providers typically have specialized expertise in security and compliance, reducing the risk of data breaches and legal issues for web consultancies and their clients.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faSackDollar" size="3x" class="mb-3" />
								
								<h5 class="card-title">Cost Savings</h5>

								<p class="card-text">By outsourcing various technical and operational aspects, web consultancies can reduce their overhead costs, including hiring and training specialized staff, which can lead to improved profitability and competitive pricing for clients.</p>	
								
							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faArrowsSpin" size="3x" class="mb-3" />
								
								<h5 class="card-title">Continuous Innovation</h5>

								<p class="card-text">Managed services providers often stay on the cutting edge of technology, ensuring that web consultancies and their clients benefit from the latest tools and solutions without the need for constant research and development efforts.</p>												
								
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
import { faArrowsSpin, faBuilding, faLayerGroup, faSackDollar, faShield } from '@fortawesome/free-solid-svg-icons';

import Page from '@/views/layouts/Page.vue';
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
</style>

