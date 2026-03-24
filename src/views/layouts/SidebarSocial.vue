<template>

	<div class="card">

		<div class="card-body">

			<h5 class="card-title">Let's Connect</h5>

			<div class="card-text">

				<ul class="list-group list-group-flush">

					<li class="list-group-item">
						<FontAwesomeIcon :icon="faLinkedin" class="me-2" />
						<a href="https://www.linkedin.com/company/korbaconsulting" target="_blank">linkedin.com/company/korbaconsulting</a>
					</li>

					<li class="list-group-item">
						<FontAwesomeIcon :icon="faXTwitter" class="me-2" />
						<a href="https://x.com/korbaconsulting" target="_blank">x.com/korbaconsulting</a>
					</li>

					<li class="list-group-item">
						<FontAwesomeIcon :icon="faEnvelope" class="me-2" />
						<a :href="'mailto:' + defaultEmailAddress">{{ defaultEmailAddress }}</a>
					</li>

					<li class="list-group-item">
						<FontAwesomeIcon :icon="faPhone" class="me-2" />
						<a href="tel:+13127722642">312.772.2642</a>
					</li>

				</ul>

			</div>
			
		</div>
		
	</div>

</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const defaultEmailAddress = import.meta.env.VITE_APP_DEFAULT_EMAIL_ADDRESS;
</script>