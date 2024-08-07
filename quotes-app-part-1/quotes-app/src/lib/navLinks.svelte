<script lang="ts">
	import { userLogout, resetStore } from '../stores/userStores';
	import { goto } from '$app/navigation';
	function logout() {
		userLogout.reset();
		resetStore();
		goto('/');
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
		<button on:click={logout} class="btn">Logout</button>
	</div>
</div>
