<template>

	<div class="page">

		<div class="banner">

			<div class="container">

				<div class="row">

					<div class="col-lg-12">

						<h1 class="title">{{ props.title }}</h1>

					</div>

				</div>

			</div>

		</div>

		<div class="container">

			<div class="row">

				<div class="col-lg-12">

					<article v-if="!props.hasSidebar">

						<slot name="content"></slot>

					</article>

					<article v-else>

						<div class="row">

							<div class="col-md-12 col-lg-8">

								<section>

									<slot name="content"></slot>

								</section>

							</div>

							<div class="col-md-12 col-lg-4">

								<aside>

									<slot name="sidebar"></slot>

								</aside>

							</div>

						</div>						

					</article>

				</div>

			</div>

		</div>

	</div>

</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	hasSidebar: {
		type: Boolean,
		required: false,
		default: false
	}
})
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as variables;

main {

	.banner {

		padding: 2rem 0;
		background-color: variables.$blue;

		h1 {

			margin: 0;
			color: #fff;
		}
	}

	article {

		padding: 2rem 0;
	}
}
</style>