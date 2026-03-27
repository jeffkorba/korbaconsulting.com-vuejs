import { createRouter, createWebHistory } from 'vue-router';

import Blog from '@/views/pages/Blog.vue';
import BlogThe10YearProject from '@/views/pages/Blog/The10YearProject.vue';
import Company from '@/views/pages/Company.vue';
import CompanyAbout from '@/views/pages/About.vue';
import Contact from '@/views/pages/Contact.vue';
import Home from '@/views/pages/Home.vue';
import Services from '@/views/pages/Services.vue';
import ServicesConsulting from '@/views/pages/Consulting.vue';
import ServicesDesign from '@/views/pages/Design.vue';
import ServicesDevelopment from '@/views/pages/Development.vue';
import ServicesManagedServices from '@/views/pages/ManagedServices.vue';
import PageNotFound from '@/views/pages/PageNotFound.vue';
import Portfolio from '@/views/pages/Portfolio.vue';
import PortfolioClients from '@/views/pages/Clients.vue';
import PortfolioTechnology from '@/views/pages/Technology.vue';
import ClientsAllstate from '@/views/pages/Clients/Allstate.vue';
import ClientsBettyCrocker from '@/views/pages/Clients/BettyCrocker.vue';
import ClientsChicagoBooth from '@/views/pages/Clients/ChicagoBooth.vue';
import ClientsFarmJournal from '@/views/pages/Clients/FarmJournal.vue';
import ClientsFollett from '@/views/pages/Clients/Follett.vue';
import ClientsHumana from '@/views/pages/Clients/Humana.vue';
import ClientsNCSA from '@/views/pages/Clients/NCSA.vue';
import ClientsNorthernTrust from '@/views/pages/Clients/NorthernTrust.vue';
import ClientsPeak6 from '@/views/pages/Clients/Peak6.vue';
import ClientsSupercuts from '@/views/pages/Clients/Supercuts.vue';
import ClientsTheFellowship from '@/views/pages/Clients/TheFellowship.vue';
import ClientsValspar from '@/views/pages/Clients/Valspar.vue';
import Privacy from '@/views/pages/Privacy.vue';

const Router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {

			return savedPosition;
		}
		else {

			return {
				top: 0
			}
		}
	},
	routes: [
		{
			path: '/',
			name: 'home',
	  		component: Home,
			meta: {
				title: 'Innovative, Flexible and Scalable Web Solutions',
				private: false
			}
		},
		{
			path: '/blog',
			name: 'blog',
	  		component: Blog,
			meta: {
				title: 'Blog',
				private: false
			}
		},
		{
			path: '/blog/the-10-year-project',
			name: 'the-10-year-project',
	  		component: BlogThe10YearProject,
			meta: {
				title: 'The 10 Year Project',
				private: false
			}
		},
		{
			path: '/company',
			name: 'company',
	  		component: Company,
			meta: {
				title: 'Company',
				private: false
			}
		},
		{
			path: '/company/about',
			name: 'about',
			component: CompanyAbout,
			meta: {
				title: 'About',
				private: false
			}
		},
		{
			path: '/contact',
			name: 'contact',
	  		component: Contact,
			meta: {
				title: 'Contact',
				private: false
			}
		},
		{
			path: '/portfolio',
			name: 'portfolio',
	  		component: Portfolio,
			meta: {
				title: 'Portfolio',
				private: false
			}
		},
		{
			path: '/portfolio/clients',
			name: 'clients',
			component: PortfolioClients,
			meta: {
				title: 'Clients',
				private: false
			}
		},
		{
			path: '/portfolio/clients/allstate',
			name: 'allstate',
			component: ClientsAllstate,
			meta: {
				title: 'Allstate',
				private: false
			}
		},
		{
			path: '/portfolio/clients/betty-crocker',
			name: 'betty-crocker',
			component: ClientsBettyCrocker,
			meta: {
				title: 'Betty Crocker',
				private: false
			}
		},
		{
			path: '/portfolio/clients/chicago-booth',
			name: 'chicago-booth',
			component: ClientsChicagoBooth,
			meta: {
				title: 'Chicago Booth',
				private: false
			}
		},
		{
			path: '/portfolio/clients/farm-journal',
			name: 'farm-journal',
			component: ClientsFarmJournal,
			meta: {
				title: 'Farm Journal',
				private: false
			}
		},
		{
			path: '/portfolio/clients/follett',
			name: 'follett',
			component: ClientsFollett,
			meta: {
				title: 'Follett',
				private: false
			}
		},
		{
			path: '/portfolio/clients/humana',
			name: 'humana',
			component: ClientsHumana,
			meta: {
				title: 'Humana',
				private: false
			}
		},
		{
			path: '/portfolio/clients/ncsa',
			name: 'ncsa',
			component: ClientsNCSA,
			meta: {
				title: 'NCSA',
				private: false
			}
		},
		{
			path: '/portfolio/clients/northern-trust',
			name: 'northern-trust',
			component: ClientsNorthernTrust,
			meta: {
				title: 'Northern Trust',
				private: false
			}
		},
		{
			path: '/portfolio/clients/peak6',
			name: 'peak6',
			component: ClientsPeak6,
			meta: {
				title: 'Peak6',
				private: false
			}
		},
		{
			path: '/portfolio/clients/supercuts',
			name: 'supercuts',
			component: ClientsSupercuts,
			meta: {
				title: 'Supercuts',
				private: false
			}
		},
		{
			path: '/portfolio/clients/the-fellowship',
			name: 'the-fellowship',
			component: ClientsTheFellowship,
			meta: {
				title: 'The Fellowship',
				private: false
			}
		},
		{
			path: '/portfolio/clients/valspar',
			name: 'valspar',
			component: ClientsValspar,
			meta: {
				title: 'Valspar',
				private: false
			}
		},
		{
			path: '/portfolio/technology',
			name: 'technology',
			component: PortfolioTechnology,
			meta: {
				title: 'Technology',
				private: false
			}
		},
		{
			path: '/privacy',
			name: 'privacy',
	  		component: Privacy,
			meta: {
				title: 'Privacy',
				private: false
			}
		},
		{
			path: '/services',
			name: 'services',
	  		component: Services,
			meta: {
				title: 'Services',
				private: false
			}
		},
		{
			path: '/services/consulting',
			name: 'consulting',
			component: ServicesConsulting,
			meta: {
				title: 'Consulting',
				private: false
			}
		},
		{
			path: '/services/design',
			name: 'design',
			component: ServicesDesign,
			meta: {
				title: 'Design',
				private: false
			}
		},
		{
			path: '/services/development',
			name: 'development',
			component: ServicesDevelopment,
			meta: {
				title: 'Development',
				private: false
			}
		},
		{
			path: '/services/managed-services',
			name: 'managed-services',
			component: ServicesManagedServices,
			meta: {
				title: 'Managed Services',
				private: false
			}
		},
		{
			path: '/:catchAll(.*)',
			name: 'page-not-found',
			component: PageNotFound,
			meta: {
				title: 'Page Not Found',
				private: false
			}
		}
	]
});

export default Router;
