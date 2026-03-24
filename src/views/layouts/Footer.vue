<template>

	<footer>

		<div class="container">

			<div class="row">

				<div class="col col-lg-9">

					<div class="row">

						<div class="col-lg-3 mb-3">

							<h5>Services</h5>

							<ul id="menu-services" class="menu-list">
								<li class="menu-item"><RouterLink to="/services/consulting/">Consulting</RouterLink></li>
								<li class="menu-item"><RouterLink to="/services/development/">Development</RouterLink></li>
								<li class="menu-item"><RouterLink to="/services/design/">Design</RouterLink></li>
								<li class="menu-item"><RouterLink to="/services/managed-services/">Managed Services</RouterLink></li>
							</ul>

						</div>

						<div class="col-lg-3 mb-3">

							<h5>Portfolio</h5>

							<ul id="menu-portfolio" class="menu-list">
								<li class="menu-item"><RouterLink to="/portfolio/clients/">Clients</RouterLink></li>
								<li class="menu-item"><RouterLink to="/portfolio/technology/">Technology</RouterLink></li>
							</ul>

						</div>

						<div class="col-lg-3 mb-3">

							<h5>Company</h5>

							<ul id="menu-company" class="menu-list">
								<li class="menu-item"><RouterLink to="/blog/">Blog</RouterLink></li>
								<li class="menu-item"><RouterLink to="/company/about/">About</RouterLink></li>
							</ul>

						</div>

					</div>

				</div>

				<div class="col col-lg-3 text-end mb-3">
					<h5>Contact</h5>
					
					<ul class="social-icons float-end mb-1">
					
						<li class="me-2">
							<a href="https://www.facebook.com/korbaconsulting" target="_blank">
								<FontAwesomeIcon :icon="faSquareFacebook" size="3x" widthAuto />
							</a>
						</li>
						<li class="me-2">
							<a href="https://x.com/korbaconsulting" target="_blank">
								<FontAwesomeIcon :icon="faSquareXTwitter" size="3x" widthAuto />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/company/korbaconsulting" target="_blank">
								<FontAwesomeIcon :icon="faSquareLinkedin" size="3x" widthAuto />
							</a>
						</li>
					</ul><br />

					<a :href="'mailto:' + defaultEmailAddress">{{ defaultEmailAddress }}</a><br />
					<RouterLink to="tel:+13127722642">312.772.2642</RouterLink>
				</div>

			</div>

			<div class="row">
				<div class="col-lg-12">
					&copy; {{ new Date().getFullYear() }} {{ companyName }} &nbsp;|&nbsp; <RouterLink to="/privacy">Privacy Policy</RouterLink>
				</div>
			</div>

		</div>

	</footer>

</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareFacebook, faSquareLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

const companyName = import.meta.env.VITE_APP_TITLE;
const defaultEmailAddress = import.meta.env.VITE_APP_DEFAULT_EMAIL_ADDRESS;
</script>

<style lang="scss" scoped>
footer {

	min-height: 375px;
	padding: 2rem 0;
	background-color: #333;
	color: #fff;
	line-height: 2;

	a {

		&:link, &:visited {
		
			color: #fff;
		}	
	}

    .menu-list {

        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: 0;
    }

	.social-icons {

		list-style: none;
		padding: 0;
		margin: 0;

		li {

			float: left;

			a {

				opacity: .85;

				&:hover {

					opacity: 1;
				}
			}
		}
	}
}
</style>