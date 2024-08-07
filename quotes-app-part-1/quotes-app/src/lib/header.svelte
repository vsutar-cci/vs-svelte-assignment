<script lang="ts">
	import NavLinks from './navLinks.svelte';
	import { accessTokenStore } from '../stores/userStores';
	let token = $accessTokenStore;
	console.log(token, 'yes');
</script>

<div class="header bg-info">
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand fw-bold text-white" href="/">Quotes App</a>
		</div>
		{#if token}
			<NavLinks></NavLinks>
		{/if}
	</nav>
</div>
