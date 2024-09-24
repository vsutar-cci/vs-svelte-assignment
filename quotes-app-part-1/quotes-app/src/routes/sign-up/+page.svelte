<script lang="ts">
	import { type SignupForm } from '../../constants/constant';
	import { isObjectNotEmpty, hideClass, showClass } from '../../utilityCode/utility';
	import { validatePassword, validateUserName, validateName } from '../../utilityCode/validate';

	import { getResponse } from '../../apiResponse/signupResponse';

	let newUserData: SignupForm = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};
	function verifyNewUser(event: Event) {
		event.preventDefault(); // Prevent default form submission behavior
		let getInputData = isObjectNotEmpty(newUserData);
		if (getInputData) {
			validatePassword(newUserData.password)
				? hideClass('passwordError')
				: showClass('passwordError');

			validateUserName(newUserData.email) ? hideClass('userNameError') : showClass('userNameError');

			validateName(newUserData.firstName)
				? hideClass('firstNameError')
				: showClass('firstNameError');

			validateName(newUserData.lastName) ? hideClass('lastNameError') : showClass('lastNameError');
			if (
				validatePassword(newUserData.password) &&
				validateUserName(newUserData.email) &&
				validateName(newUserData.firstName) &&
				validateName(newUserData.lastName) == true
			) {
				getResponse(newUserData);
			}
		}
	}
</script>

<div class="main-sign-up">
	<h2 class="pb-4">Please Sign up</h2>
	<form class="signup-form" on:submit={verifyNewUser}>
		<div>
			<div class="mb-4">
				<label for="username">Firstname:</label>
				<input
					type="text"
					id="firstname"
					required
					bind:value={newUserData.firstName}
					placeholder="Enter your firstname"
				/>
				<p id="firstNameError" class="d-none error">Invalid firstname Entered</p>
			</div>
			<div class="mb-4">
				<label for="password">lastname:</label>
				<input
					type="text"
					id="lastname"
					required
					bind:value={newUserData.lastName}
					placeholder="Enter your lastname"
				/>
				<p id="lastNameError" class="d-none error">Invalid lastname Entered</p>
			</div>
			<div class="mb-4">
				<label for="password" class="d-block">Email:</label>
				<input
					type="text"
					id="username"
					required
					bind:value={newUserData.email}
					autocomplete="username"
					placeholder="Enter your username"
				/>
				<p id="usernameError" class="d-none error">Invalid username Entered</p>
			</div>
			<div class="mb-4">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					required
					bind:value={newUserData.password}
					autocomplete="current-password"
					placeholder="Enter your password"
				/>
				<p id="passwordError" class="d-none error">Invalid Password Entered</p>
			</div>
			<button type="submit" class="submit mb-4">SignUp</button>
			<div class="div">
				<a href="/" class="cancel">Cancel</a>
				<span>Already have an account? </span><a href="/login" class="login">Login here</a>
			</div>
			<p id="showErrorMessage" class="d-none error">User already exists</p>
			<p id="success" class="d-none">You're registered.</p>
		</div>
	</form>
</div>
