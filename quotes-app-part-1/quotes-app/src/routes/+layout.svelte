<script lang="ts">
	import Header from '$lib/header.svelte';
</script>

<header>
	<Header></Header>
</header>
<main>
	<div class="container">
		<slot></slot>
	</div>
</main>
<footer>
	<div class="container">
		<p class="text-center">Copyright © 2024 The Quotes App</p>
	</div>
</footer>

<style>
</style>
