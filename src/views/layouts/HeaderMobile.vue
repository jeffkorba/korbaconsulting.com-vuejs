<template>

	<div class="mobile d-lg-none">
				
		<div class="logo">

			<RouterLink to="/"><img src="/static/images/korba-consulting-logo-750x750.png" alt="Korba Consulting"></RouterLink>

		</div>

		<div class="menu-toggle" @click="toggleMenu()">

			<FontAwesomeIcon v-show="!isActive" :icon="faBars" size="2x" />

			<FontAwesomeIcon v-show="isActive" :icon="faXmark" size="2x" />

		</div>

		<nav :class="{active: isActive}">

			<ul>

				<li><RouterLink to="/">Home</RouterLink></li>

				<li><RouterLink to="/services">Services</RouterLink></li>

				<li><RouterLink to="/portfolio">Portfolio</RouterLink></li>

				<li><RouterLink to="/company">Company</RouterLink></li>

				<li><RouterLink to="/contact">Contact</RouterLink></li>

			</ul>

		</nav>

	</div>

</template>

<script setup>
import { ref } from 'vue';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const isActive = ref(false);

function toggleMenu () {

	isActive.value = !isActive.value;
}
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as vars;

.mobile {

	position: fixed;
	width: 100%;
	height: 60px;
	z-index: 1100;
	background-color: vars.$darkBlue;
	top: 0;
	left: 0;
	right: 0;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, .25);

	.menu-toggle {

		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: inherit;
		width: 60px;
		user-select: none;
		color: #fff;
		cursor: pointer;
	}

	.logo {

		position: absolute;
		top: 0;
		left: 0;

		img {
			width: 60px;
			height: 60px;
		}
	}	

	nav {

		display: block;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 60px;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 1100;
		background-color: rgba(0, 0, 0, .75);
		visibility: hidden;
		opacity: 0;
		transition: all .25s ease-in-out;

		&.active {

			visibility: visible;
			opacity: 1;

			ul {

				transform: translateX(0);
			}
		}

		ul {

			list-style: none;
			background-color: rgba(vars.$blue, .90);
			position: fixed;
			top: 60px;
			left: 0;
			width: 85%;
			height: 100vh;
			transform: translateX(-100%);
			transition: all .25s ease-in-out;
			padding: 1rem;

			li {

				width: 100%;

				&:not(:last-of-type) {

					border-bottom: 1px solid rgba(255, 255, 255, .25);
				}

				&:hover, &.active {

					a {
						background-color: rgba(255, 255, 255, .10);
						color: #fff;
						font-weight: 700;
						text-decoration: none;
						border-left: 5px solid #fff;
					}
				}

				a {
					display: block;
					color: #fff;
					width: 100%;
					height: 100%;
					padding: 1rem;
					font-size: 1.5rem;
					transition: all .15s ease-in-out;
				}
			}
		}
	}
}
</style>