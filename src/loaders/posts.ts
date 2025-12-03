import {defineBasicLoader} from 'unplugin-vue-router/data-loaders/basic';

export default defineBasicLoader('posts', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await response.json();
});