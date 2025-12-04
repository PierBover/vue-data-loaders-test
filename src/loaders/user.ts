import {wait} from '@/utils';
import {defineBasicLoader} from 'unplugin-vue-router/data-loaders/basic';

export const useUser = defineBasicLoader('post', async (to, {signal}) => {
	console.log('useUser');
	const url = `https://jsonplaceholder.typicode.com/users/1`;
	const response = await fetch(url, {signal});
	const json = await response.json();
	await wait();
	return json;
});