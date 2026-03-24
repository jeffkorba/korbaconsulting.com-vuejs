<template>

	<HeaderDesktop />

	<HeaderMobile />

	<main>

		<RouterView />

	</main>

	<Footer />

</template>

<script setup>
import Footer from '@/views/layouts/Footer.vue';
import HeaderDesktop from '@/views/layouts/HeaderDesktop.vue';
import HeaderMobile from '@/views/layouts/HeaderMobile.vue';
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as vars;

main {

	article {

		padding: 2rem 0;
	}
}
</style>
