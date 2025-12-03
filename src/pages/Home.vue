<script lang="ts">
import {wait} from '@/utils';
import {defineBasicLoader} from 'unplugin-vue-router/data-loaders/basic';

export const usePosts = defineBasicLoader('posts', async (to, {signal}) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {signal});
	const json = await response.json();
	await wait();
	return json;
});
</script>

<script setup lang="ts">
const {data:posts} = usePosts();
</script>

<template>
	<h1>Posts</h1>
	<ul>
		<li v-for="post in posts">
			<RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
		</li>
	</ul>
</template>