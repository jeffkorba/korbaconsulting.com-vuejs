<template>

	<div class="desktop d-none d-sm-none d-md-none d-lg-block">

		<div class="container">

			<div class="row">

				<div class="col-3">

					<div class="logo">

						<RouterLink to="/"><img src="/static/images/korba-consulting-logo-500x200.png" alt="Korba Consulting"></RouterLink>

					</div>

				</div>

				<div class="col-9">

					<nav>

						<ul>

							<li class="tab" :class="{'active': Route.name == 'home'}">

								<RouterLink to="/">Home</RouterLink>

							</li>

							<li class="tab" :class="{'active': Route.name == 'services'}">

								<RouterLink to="/services">Services</RouterLink>

								<ul id="menu-services" class="menu-dropdown">
									<li class="menu-item"><RouterLink to="/services/consulting">Consulting</RouterLink></li>
									<li class="menu-item"><RouterLink to="/services/development">Development</RouterLink></li>
									<li class="menu-item"><RouterLink to="/services/design">Design</RouterLink></li>
									<li class="menu-item"><RouterLink to="/services/managed-services">Managed Services</RouterLink></li>
								</ul>

							</li>

							<li class="tab" :class="{'active': Route.name == 'portfolio'}">

								<RouterLink to="/portfolio">Portfolio</RouterLink>

								<ul id="menu-portfolio" class="menu-dropdown">
									<li class="menu-item"><RouterLink to="/portfolio/clients">Clients</RouterLink></li>
									<li class="menu-item"><RouterLink to="/portfolio/technology">Technology</RouterLink></li>
								</ul>

							</li>

							<li class="tab" :class="{'active': Route.name == 'company'}">

								<RouterLink to="/company">Company</RouterLink>

								<ul id="menu-company" class="menu-dropdown">
									<li class="menu-item"><RouterLink to="/blog">Blog</RouterLink></li>
									<li class="menu-item"><RouterLink to="/company/about">About</RouterLink></li>
								</ul>

							</li>

							<li class="tab" :class="{'active': Route.name == 'contact'}">

								<RouterLink to="/contact">Contact</RouterLink>

							</li>

						</ul>

					</nav>

				</div>

			</div>

		</div>

	</div>

</template>

<script setup>
import { useRoute } from 'vue-router';

const Route = useRoute();
</script>

<style lang="scss" scoped>
@use '@/sass/_variables.scss' as vars;

.desktop {

	width: 100%;
	height: 110px;

	.logo {

		img {
		
			height: 80px;
		}
	}

	nav {

		ul {

			float: right;
			list-style: none;
			margin: 0;
			padding: 0;

			.tab {

				display: inline-block;
				margin-left: 1px;
				color: #999;

				a {

					display: block;
					padding: .75rem 1rem;
					color: inherit;
					text-decoration: none;
				}

				&:hover {

					color: #000;
					border-bottom: 1px solid #000;

					.menu-dropdown {

						opacity: 1;
						visibility: visible;
					}
				}

				&.active {

					font-weight: 700;
					color: #000;
					border-bottom: 2px solid #000;
				}

				.menu-dropdown {

					list-style: none;
					margin: 0;
					padding: 0;
					opacity: 0;
					visibility: hidden;
					position: absolute;
					z-index: 1000;
					background-color: rgba(vars.$darkBlue, .9);
					width: 200px;
					padding: .5rem;
					box-shadow: 2px 2px 8px rgba(0, 0, 0, .25);
					border-top: 1px solid #fff;

					a {

						display: block;
						color: #fff;
						padding: .5rem;
						font-weight: 400;

						&:hover {

							background-color: rgba(255, 255, 255, .25);
							color: #fff;
						}
					}
				}
			}
		}
	}
}
</style>