<template>

	<div class="design-page">

		<Page title="Design">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<div class="card h-100">

							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faObjectGroup" size="3x" class="mb-3" />
								
								<h5 class="card-title">Enhanced User Experience (UX)</h5>

								<p class="card-text"> Implementing quality design principles ensures that websites and applications are intuitive, visually appealing, and user-friendly, resulting in higher user satisfaction and engagement.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faSwatchbook" size="3x" class="mb-3" />
								
								<h5 class="card-title">Improved Brand Image</h5>

								<p class="card-text">Quality design helps convey a professional and trustworthy brand image, instilling confidence in visitors and potential customers, which can positively impact conversion rates.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faHandHoldingDollar" size="3x" class="mb-3" />
								
								<h5 class="card-title">Reduced Development Costs</h5>

								<p class="card-text">By adhering to design principles from the outset, web consultancies can avoid costly redesigns and modifications down the road, saving clients both time and money.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">

							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faUniversalAccess" size="3x" class="mb-3" />

								<h5 class="card-title">Better Accessibility and Inclusivity</h5>

								<p class="card-text">Quality design considers accessibility standards, making web content available to a wider audience, including those with disabilities, which aligns with ethical and legal obligations.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faPersonRunning" size="3x" class="mb-3" />
								
								<h5 class="card-title">Competitive Advantage</h5>

								<p class="card-text">Well-designed websites and applications stand out in a crowded online landscape, giving clients a competitive edge by attracting and retaining users and customers.</p>
								
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
import { faHandHoldingDollar, faObjectGroup, faPersonRunning, faSwatchbook, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

import Page from '@/views/layouts/Page.vue';
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
</style>

