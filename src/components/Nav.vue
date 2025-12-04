<script setup lang="ts">
import {useUser} from '@/loaders/user';

const {data:user} = useUser();
</script>

<template>
	<nav>
		<RouterLink to="/">Posts</RouterLink> ·
		<RouterLink to="/albums">Albums</RouterLink> ·
		{{ user.email }}
	</nav>
</template>