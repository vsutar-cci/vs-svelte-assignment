<script lang="ts">
	import { userLogout, resetStore } from '../stores/userStores';
	import { goto } from '$app/navigation';
	let showLinks = false;

	function logout() {
		userLogout.reset();
		resetStore();
		goto('/');
		showLinks = !showLinks;
	}
</script>

<div class="nav-links d-block" id="navLinks">
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="/">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/authors">authors</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/quotes">Quotes</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/quotes">My Quotes</a>
			</li>
		</ul>
		<button on:click={logout} class="btn" class:hide={showLinks}>Logout</button>
		<div class={`links ${showLinks ? '' : 'd-none'}`}>
			<a href="/login" class="badge login">Login</a>
			<a href="/sign-up" class="badge">signup</a>
		</div>
	</div>
</div>
