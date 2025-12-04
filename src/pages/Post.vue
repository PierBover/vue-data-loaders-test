<script lang="ts">
import {wait} from '@/utils';
import {defineBasicLoader} from 'unplugin-vue-router/data-loaders/basic';
import Nav from '@/components/Nav.vue';

export const usePost = defineBasicLoader('post', async (to, {signal}) => {
	const url = `https://jsonplaceholder.typicode.com/posts/${to.params.id}`;
	const response = await fetch(url, {signal});
	const json = await response.json();
	await wait();
	return json;
});
</script>

<script setup lang="ts">
const {data:post} = usePost();
</script>

<template>
	<Nav></Nav>
	<h1>{{post.title}}</h1>
	<p>{{post.body}}</p>
</template>