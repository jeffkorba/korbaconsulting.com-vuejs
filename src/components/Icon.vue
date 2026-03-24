<template>

	<div class="list-group">

		<div class="list-item" v-for="item in props.items">
			<a :href="item.linkUrl">
				<h6 class="widget-title">{{ item.title }}</h6>
				{{ item.description }}
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
.icon-16x16 {

	width: 16px;
	height: 16px;
	display: inline-block;
}

.icon-32x32 {

	width: 32px;
	height: 32px;
	display: inline-block;
}

.icon-48x48 {

	width: 48px;
	height: 48px;
	display: inline-block;
}

.icon-64x64 {

	width: 64px;
	height: 64px;
	display: inline-block;
}
</style>