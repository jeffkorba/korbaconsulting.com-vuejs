<template>

	<div class="card">

		<img v-if="props.hasImage" class="card-img-top" :src="props.imageUrl" :alt="props.imageTitle" />

		<div class="card-body">

			<h5 v-if="props.title" class="card-title">{{ props.title }}</h5>

			<p class="card-text">

				<slot name="text"></slot>

			</p>

			<slot name="buttons"></slot>

		</div>

	</div>

</template>

<script setup>
const props = defineProps({
	hasImage: {
		type: Boolean,
		required: false
	},
	imageUrl: {
		type: String,
		required: false
	},
	imageTitle: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: false
	}
})
</script>

<style lang="scss" scoped>
</style>