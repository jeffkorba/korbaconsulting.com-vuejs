<template>

	<Card hasImage="true" :imageUrl="props.imageUrl" :imageTitle="props.imageTitle" :title="props.title">

		<template v-slot:text>

			<p>{{ props.excerpt }}</p>

			<span v-for="badge in props.badges" class="badge text-bg-secondary me-1">{{ badge }}</span>

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
	badges: {
		type: Array,
		required: false
	}
})
</script>

<style lang="scss" scoped>
</style>