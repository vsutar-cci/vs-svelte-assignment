<script lang="ts">
	import type { LoginForm } from '../../constants/constant';
	import { isObjectNotEmpty, hideClass, showClass } from '../../utilityCode/utility';
	import { validatePassword, validateUserName } from '../../utilityCode/validate';
	import { getResponse } from '../../apiResponse/loginApiRespnse';

	let inputUserData: LoginForm = {
		username: '',
		password: ''
	};

	function verifyUser(event: Event) {
		event.preventDefault(); // Prevent default form submission behavior
		let getInputData = isObjectNotEmpty(inputUserData);
		console.log(getInputData, inputUserData);
		if (getInputData) {
			validatePassword(inputUserData.password)
				? hideClass('passwordError')
				: showClass('passwordError');

			validateUserName(inputUserData.username)
				? hideClass('userNameError')
				: showClass('userNameError');
			if (
				validatePassword(inputUserData.password) &&
				validateUserName(inputUserData.username) == true
			) {
				getResponse(inputUserData);
			}
		}
	}
</script>

<div class="login-page">
	<h2 class="mb-5">Please login</h2>

	<form class="login-form" on:submit={verifyUser}>
		<div class="mb-5">
			<label for="username">Username:</label>
			<input
				type="text"
				id="username"
				required
				bind:value={inputUserData.username}
				autocomplete="username"
				placeholder="Enter your username"
			/>
			<p id="userNameError" class="d-none error">Invalid userName Entered</p>
		</div>
		<div class="pb-5">
			<label for="password">Password:</label>
			<input
				type="password"
				id="password"
				required
				bind:value={inputUserData.password}
				autocomplete="current-password"
				placeholder="Enter your password"
			/>
			<p id="passwordError" class="d-none error">Invalid Password Entered</p>
		</div>
		<button type="submit" class="submit">Submit</button>
		<div class="pt-4">
			<a href="/" class="cancel">Cancel</a>
			<a href="/sign-up" class="sign-up pl-2">SignUp</a>
		</div>

		<p id="successMessage" class="d-none">You're logged in</p>
		<p id="showErrorMessage" class="d-none error">Please enter valid Password or Email</p>
	</form>
</div>
