<template>

	<div class="clients-page">

		<Page title="Clients">

			<template v-slot:content>

				<div class="row row-cols-auto row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-gap-4">

					<div class="col">

						<RouterLink to="/portfolio/clients/farm-journal">
							<img class="img-fluid rounded border" src="/static/images/farm-journal.webp" alt="Farm Journal">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/the-fellowship">
							<img class="img-fluid rounded border" src="/static/images/the-fellowship.webp" alt="The Fellowship">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/follett">
							<img class="img-fluid rounded border" src="/static/images/follett.webp" alt="Follett">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/humana">
							<img class="img-fluid rounded border" src="/static/images/humana.webp" alt="Humana">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/betty-crocker">
							<img class="img-fluid rounded border" src="/static/images/betty-crocker.webp" alt="Betty Crocker">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/allstate">
							<img class="img-fluid rounded border" src="/static/images/allstate.webp" alt="Allstate">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/supercuts">
							<img class="img-fluid rounded border" src="/static/images/supercuts.webp" alt="Supercuts">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/peak6">
							<img class="img-fluid rounded border" src="/static/images/peak6.webp" alt="Peak6">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/ncsa">
							<img class="img-fluid rounded border" src="/static/images/ncsa.webp" alt="NCSA">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/valspar">
							<img class="img-fluid rounded border" src="/static/images/valspar.webp" alt="Valspar">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/chicago-booth">
							<img class="img-fluid rounded border" src="/static/images/chicago-booth.webp" alt="Chicago Booth">
						</RouterLink>

					</div>

					
					<div class="col">

						<RouterLink to="/portfolio/clients/northern-trust">
							<img class="img-fluid rounded border" src="/static/images/northern-trust.webp" alt="Northern Trust">
						</RouterLink>

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

