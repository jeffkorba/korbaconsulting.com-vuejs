<template>

	<div class="list-group">

		<div class="list-item" v-for="item in props.items">
			<a :href="item.linkUrl">
				<h6 class="widget-title">{{ item.title }}</h6>
				<div v-if="item.description">{{ item.description }}</div>
				<div v-if="item.location">{{ item.location }}</div>
			</a>
		</div>
		
	</div>

</template>

<script setup>
const props = defineProps({
	items: {
		type: Array,
		default: []
	}
});
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as vars;

.list-group {

	color: #fff;

	.list-item {

		background-color: #222;
		line-height: 24px;

		&:not(:last-of-type) {
		
			margin-bottom: 1px;
		}

		a {

			&:link, &:visited {

				display: block;
				color: #fff;
				padding: 1rem;
				text-decoration: none;
			}

			&:hover, &:active {

				text-decoration: none;
				background-color: rgba(255, 255, 255, .05);
			}
		}

		.list-title {

			color: vars.$lightBlue;
			font-size: 1.1rem;
			font-weight: 700;
			margin-bottom: .25rem;
		}
	}
}
</style>