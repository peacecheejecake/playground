import VueRouter from 'vue-router';

import { HomePage, HelloWorld } from './pages';

const routes = [
	{ path: '/', component: HomePage },
	{ path: '/hello', component: HelloWorld },
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
