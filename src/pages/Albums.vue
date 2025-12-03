<script lang="ts">
import {wait} from '@/utils';
import {defineBasicLoader} from 'unplugin-vue-router/data-loaders/basic';

export const useAlbums = defineBasicLoader('albums', async (to, {signal}) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/albums', {signal});
	const json = await response.json();
	await wait();
	return json;
});
</script>

<script setup lang="ts">
const {data:albums} = useAlbums();
</script>

<template>
	<h1>Albums</h1>
	<ul>
		<li v-for="album in albums">
			{{ album.title }}
		</li>
	</ul>
</template>