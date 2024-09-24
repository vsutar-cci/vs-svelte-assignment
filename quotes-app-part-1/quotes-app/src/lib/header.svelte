<script lang="ts">
	import NavLinks from './navLinks.svelte';
	import { accessTokenStore } from '../stores/userStores';
	let token = $accessTokenStore;
	console.log(token, 'yes');
</script>

<div class="header">
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand fw-bold text-white" href="/">Quotes App</a>
		</div>
		{#if !token}
			<div class="view-quotes">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="row text-xl-center">
					<div class="col">
						<div
							class="login-signup mt-3 mt-xl-0 d-flex justify-content-xl-center"
							id="loginSignup"
						>
							<a href="/login" class="badge login">Login</a>
							<a href="/sign-up" class="badge">signup</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{#if token}
			<NavLinks></NavLinks>
		{/if}
	</nav>
</div>
