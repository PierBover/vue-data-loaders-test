import {useUser} from '@/loaders/user';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			// the component needs to be lazy loaded for the data loader to work as expected
			component: () => import('@/pages/Home.vue'),
			meta: {
				loaders: [useUser]
			}
		},
		{
			path: '/albums',
			component: () => import('@/pages/Albums.vue'),
			meta: {
				loaders: [useUser]
			}
		},
		{
			path: '/post/:id',
			component: () => import('@/pages/Post.vue'),
			meta: {
				loaders: [useUser]
			}
		},
	]
})

export default router;