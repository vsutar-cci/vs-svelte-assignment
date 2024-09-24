<script lang="ts">
	import Header from '$lib/header.svelte';
</script>

<header>
	<div class="container">
		<Header></Header>
	</div>
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
