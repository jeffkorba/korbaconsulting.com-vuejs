<template>

	<div class="consulting-page">

		<Page title="Consulting">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<div class="card h-100">

							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faRankingStar" size="3x" class="mb-3" />
								
								<h5 class="card-title">Performance-Driven KPI Analysis</h5>

								<p class="card-text">We meticulously analyze key performance indicators (KPIs) to measure the effectiveness of your web solutions. Our data-driven approach helps you make informed decisions and optimize your online presence for maximum ROI.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faChartLine" size="3x" class="mb-3" />
								
								<h5 class="card-title">ROI-Centric Strategies</h5>

								<p class="card-text">Our services are designed with ROI in mind. We develop and implement strategies that not only enhance your web presence but also deliver tangible returns on your investment, ensuring every dollar spent counts.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">
								
								<i class="fa-solid fa-bars-progress fa-3x mb-3"></i>

								<FontAwesomeIcon :icon="faBarsProgress" size="3x" class="mb-3" />
								
								<h5 class="card-title">Streamlined Processes</h5>

								<p class="card-text">We optimize web development processes to ensure efficiency and cost-effectiveness. By eliminating bottlenecks and enhancing workflows, we save you time and resources while delivering high-quality solutions on time.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faMagnifyingGlassChart" size="3x" class="mb-3" />
								
								<h5 class="card-title">Data-Backed Insights</h5>

								<p class="card-text">We leverage effective analysis techniques to provide you with actionable insights. Our data-driven recommendations and continuous monitoring enable you to adapt and improve your web strategies for sustained success.</p>

							</div>

						</div>

					</div>

					<div class="col">

						<div class="card h-100">
							
							<div class="card-body text-center">

								<FontAwesomeIcon :icon="faGears" size="3x" class="mb-3" />
								
								<h5 class="card-title">Customized Solutions</h5>

								<p class="card-text">We understand that one size doesn't fit all. Our services are tailored to your unique business needs, ensuring that your web solutions align perfectly with your goals, industry, and target audience.</p>
								
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
import { faBarsProgress, faChartLine, faGears, faMagnifyingGlassChart, faRankingStar } from '@fortawesome/free-solid-svg-icons';


import Page from '@/views/layouts/Page.vue';
import Card from '@/components/Card.vue';
</script>

<style lang="scss" scoped>
</style>

