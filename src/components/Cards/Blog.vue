<template>

	<Card hasImage="true" :imageUrl="props.imageUrl" :imageTitle="props.imageTitle" :title="props.title">

		<template v-slot:text>

			<p>{{ props.excerpt }}</p>

		</template>

		<template v-slot:buttons>

			<RouterLink :to="props.buttonUrl" class="btn btn-primary">{{ props.buttonLabel }}</RouterLink>

		</template>

	</Card>

</template>

<script setup>
import Card from '@/components/Card.vue';

const props = defineProps({
	imageUrl: {
		type: String,
		required: true
	},
	imageTitle: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: false
	},
	excerpt: {
		type: String,
		required: false
	},
	buttonUrl: {
		type: String,
		required: true
	},
	buttonLabel: {
		type: String,
		required: true
	}
})
</script>

<style lang="scss" scoped>
</style>