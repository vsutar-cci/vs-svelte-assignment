<script lang="ts">
	// export const loginSignup = document.getElementById('loginSignup');
	// export const anonymous = document.getElementById('anonymous');
</script>

<div class="home-page mt-5">
	<h1 class="text-center fw-bold pt-xl-5 pt-3 mb-5">Welcome to Quotes app</h1>
	<p class="mb-3 mb-xl-5">
		If you have a favourite author, you may have heard of one or more of these quotes before. Those
		who have mastered their craft typically have quotes that are relatable and usable in many
		situations. Here's a list of famous quotes by famous authors
	</p>
	<div class="view-quotes">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="row text-xl-center">
			<div class="col col-xl-6">
				<div class="anonymous">
					<a href="/quotes" class="badge" id="anonymous">View Quotes as an Anonymous user</a>
				</div>
			</div>
			<div class="col col-xl-6">
				<div class="login-signup mt-3 mt-xl-0 d-flex justify-content-xl-center" id="loginSignup">
					<a href="/login" class="badge login">Login</a>
					<a href="/sign-up" class="badge">signup</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
