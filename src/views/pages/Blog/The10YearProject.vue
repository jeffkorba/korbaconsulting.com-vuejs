<template>

	<div class="blog-page">

		<Page title="Blog" hasSidebar="true">

			<template v-slot:content>

				<h3>The 10 Year Project</h3>

				<p><strong>Jeff Korba</strong> &nbsp;|&nbsp; September 5, 2023</p>

				<div class="mb-4">

					<p>Well... Its been a very long haul to get to this point, but it's finally finished. It may have taken nearly 10 years to complete, but Korba Consulting has officially launched. Its nothing short of embarrassing as this project will stand as my longest running project ever. I suppose the old adage "The painter's house is never painted," couldn't be any more fitting in this case.</p>

					<p>When I originally had the idea to start my own consultancy (back in January of 2014), I took about 5-6 months off to strategize my technical stack, target markets and ultimately settle on a logo and design for a website. The ironic part of this effort is that I actually accomplished those tasks within that time period. The only remaining issues were to build out the site and start compiling the content. There was just one problem, I had just picked up a big client.</p>

					<p>Over the next 10 years this would become somewhat of a recurring theme where I was either working on a contract or in my free time sourcing leads to get another. Admittedly this is just the nature of consulting when you don't have a dedicated sales or marketing team that can take on those efforts. That said, I still don't really have an excuse. There have been plenty of scenarios where I had legitimate downtime, the biggest issue by far was motivation.</p>

					<p>Historically contractors don't really need to have a portfolio site. Any engagement you are going to find yourself in the organization (if they are smart) will want to vet your credentials instead of relying on some screenshot that really can't speak to your contributions or skill level. However, once you start pushing over the $100/hour mark it becomes a lot more relevant. People will still want to validate your credentials, but they will also want to see there is some crossover between what they want you to do and what you have done in the past. After all, there is no sense in paying someone that kind of rate if they can't deliver or what they do deliver isn't a sustainable product.</p>

					<p>Beyond motivation, one of the other challenges with completing this project was keeping things current. Your site or application just like the sites or applications you develop for others need to stay up-to-date. Many of the core dependencies or assets are constantly being updated with new features, breaking changes and security releases. After even a year your site can look antiquated depending on the new design approaches, branding or lack of features present. In some cases, the workload to keep things modern are entire efforts in of themselves.</p>

					<p>For example, while the core design for this site hasn't changed much in 10 years. Its implementation, the underlying dependencies, the build process have all gone several iterations of change behind the scenes. The theme this site was originally released with still works on a modern version of WordPress, but it also doesn't take advantage of a great deal of new features that have been added since that time. Even simple things like asset builders have gone through a few cycles of change.</p>

					<p>Originally this site used a Gulp build process for all the Sass and vendor assets. This would later be changed to Webpack as that technology was trending for many frameworks and libraries. However, I would eventually move things back to Gulp for maintainability and scalability reasons. Webpack was just too complicated for its own good and keeping its configuration and dependencies maintained became somewhat of a chore. It also wasn't very intuitive so I often found myself having to relearn how it worked.</p>

					<p>In any event, its done. I feel happy with where its landed. I'm also hoping this means I will be doing more writing. I have several half finished posts ranging from tutorials to commentary on the industry that I'd still like to update and publish. So that will be the next effort. In the mean time I'm hoping the effort put into this thing has a pay off. Stay tuned.</p>

				</div>

				<h5>Tags</h5>

				<span class="badge text-bg-secondary me-1">Consulting</span>
				<span class="badge text-bg-secondary">Development</span>

			</template>

			<template v-slot:sidebar>

				<figure class="border rounded">

					<img src="https://korbaconsulting.com/wp-content/themes/korbaconsulting/static/images/korba-consulting-logo-800x533.png" alt="The 10 Year Project" class="img-fluid rounded" />
					
				</figure>

			</template>
			
		</Page>

	</div>

</template>

<script setup>
import Page from '@/views/layouts/Page.vue';
</script>

<style lang="scss" scoped>
</style>

