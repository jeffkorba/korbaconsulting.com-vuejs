<template>

	<div class="contact-page">

		<Page title="Contact" hasSidebar="true">

			<template v-slot:content>

				<form @submit.prevent="postContact" :class="{'was-validated': form.status.isSubmitted}" novalidate>

					<div class="mb-3">

						<label for="fullName" class="form-label">Full Name<sup>*</sup></label>
						<input type="text" id="fullName" name="fullName" v-model="form.contact.fullName" class="form-control" required>

						<small class="text-danger" v-if="form.contact.fullName == '' && form.status.isSubmitted">
							Please provide a first and last name.
						</small>

					</div>

					<div class="mb-3">

						<label for="companyName" class="form-label">Company Name<sup>*</sup></label>
						<input type="text" id="companyName" name="companyName" v-model="form.contact.companyName" class="form-control" required>

						<small class="text-danger" v-if="form.contact.companyName == '' && form.status.isSubmitted">
							Please provide a company name.
						</small>

					</div>

					<div class="row">

						<div class="col-12 col-md-6 mb-3">

							<div class="form-group">
								<label for="emailAddress" class="form-label">Email Address<sup>*</sup></label>
								<input type="email" id="emailAddress" name="emailAddress" v-model="form.contact.emailAddress" class="form-control" required>
							</div>
							
							<small class="text-danger" v-if="form.contact.emailAddress == '' && form.status.isSubmitted">
								Please provide an email address.
							</small>
							<small class="text-danger" v-else-if="form.contact.emailAddress != '' && !form.contact.isEmailAddressValid">
								Please provide a valid email address.
							</small>

						</div>

						<div class="col-12 col-lg-6 mb-3">

							<div class="form-group">
								<label for="phoneNumber" class="form-label">Phone Number<sup>*</sup></label>
								<input type="tel" id="phoneNumber" name="phoneNumber" v-model="form.contact.phoneNumber" maxlength="13" pattern="[0-9]{10}|[0-9]{13}" class="form-control" required>
							</div>

							<small class="text-danger" v-if="form.contact.phoneNumber == '' && form.status.isSubmitted">
								Please provide a phone number.
							</small>
							<small class="text-danger" v-else-if="form.contact.phoneNumber != '' && !form.contact.isPhoneNumberValid">
								Please provide a valid phone number.
							</small>

						</div>

					</div>

					<div class="mb-3">

						<label for="message" class="form-label">Message<sup>*</sup></label>
						<textarea id="message" name="message" rows="5" class="form-control" v-model="form.contact.message" required></textarea>

						<small class="text-danger" v-if="form.contact.message == '' && form.status.isSubmitted">
							Please provide a message.
						</small>

					</div>

					<button type="submit" class="btn btn-primary" :disabled="form.status.isProcessing">
						Submit
						<span v-show="form.status.isProcessing"><i class="fa-solid fa-circle-notch fa-spin ms-2"></i></span>
					</button>

				</form>

			</template>

			<template v-slot:sidebar>

				<SidebarSocial />

			</template>
			
		</Page>

	</div>

</template>

<script setup>
import { reactive, watch } from 'vue';
import http from 'axios';

import Page from '@/views/layouts/Page.vue';
import SidebarSocial from '@/views/layouts/SidebarSocial.vue';

const form = reactive({
	contact: {
		fullName: '',
		companyName: '',
		emailAddress: '',
		phoneNumber: '',
		message: '',
		isEmailAddressValid: null,
		isPhoneNumberValid: null
	},
	status: {
		isSubmitted: false,
		isProcessing: false
	}
})

watch(form.contact.emailAddress, () => {

	isEmailAddressValid = document.getElementById('emailAddress').checkValidity();
});

watch(form.contact.phoneNumber, () => {

	isPhoneNumberValid = document.getElementById('phoneNumber').checkValidity();
});

function postContact () {

	form.status.isSubmitted = true;
	form.status.isProcessing = true;

	if (form.contact.fullName == '' ||
		form.contact.companyName == '' ||
		form.contact.emailAddress == '' ||
		form.contact.phoneNumber == '' ||
		form.contact.message == '' ||
		!form.contact.isEmailAddressValid ||
		!form.contact.isPhoneNumberValid) {
	
		form.status.isProcessing = false;

		return false;
	}

	grecaptcha.ready(() => {

		let data = {
			action: 'submit'
		}

		grecaptcha.execute(process.env.VUE_APP_RECAPTCHA_SITE_KEY, data)
			.then((token) => {

				let payload = {
					fullName: form.contact.fullName,
					companyName: form.contact.companyName,
					emailAddress: form.contact.emailAddress,
					phoneNumber: form.contact.phoneNumber,
					message: form.contact.message,
					token: token
				}

				http.post('/wp-json/forms/contact', payload)
					.then((response) => {

						fullName = '';
						companyName = '';
						emailAddress = '';
						phoneNumber = '';
						message = '';
						isProcessing = false;
						isSubmitted = false;
					})
					.catch((error) => {

						form.status.isProcessing = false;
					});
			});
	});
}
</script>

<style lang="scss" scoped>
</style>

