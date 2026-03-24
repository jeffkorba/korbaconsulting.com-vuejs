import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Main from './Main.vue'
import Router from './router'

import '@/sass/main.scss';

const App = createApp(Main)

App.use(createPinia())
App.use(Router)

Router.beforeEach((to, from) => {

	// if (to.meta.private && !UserStore.isAuthenticated) {

	// 	Router.push({
	// 		name: 'forbidden'
	// 	});
	// }

	if (to.matched.length > 1) {

		document.title = to.meta.title + ' | ' + to.matched[0].meta.title + ' | ' + import.meta.env.VITE_APP_TITLE;
	}
	else {

		document.title = to.meta.title + ' | ' + import.meta.env.VITE_APP_TITLE;
	}

	
});

App.mount('#app')
