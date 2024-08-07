<script lang="ts">
	import { fetchData } from '../../apiRequest/callAPI';
	import EnvConfig from '../../constants/env';
	import { showClass } from '../../utilityCode/utility';
	import { addNewQuote } from '../../quotesDisplayData/addNewQuotes';
	import { displayQuotes, useToken } from '../../quotesDisplayData/displayQuotes';
	import { type AddNewQuote, type AddNewQuoteResponse } from '../../constants/constant';
	import { accessTokenStore } from '../../stores/userStores';

	const myHeaders = new Headers({
		'content-type': 'application/json'
	});
	let token = $accessTokenStore;

	const quotesURL = EnvConfig.VITE_QUOTES_URL; // replace with your actual URL
	let newQuote: AddNewQuote = { quote: '', tags: '', author: '' };

	let headerData = {
		method: 'GET',
		headers: myHeaders
	};
	console.log(token, 'ff');
	if (token) {
		useToken(token, quotesURL);
		const anonymous = document.querySelector('#anonymous');
		const loginSignup = document.querySelector('#loginSignup');
		anonymous?.remove();
		loginSignup?.remove();
	} else {
		const quotesPromise = fetchData(quotesURL, headerData);
		quotesPromise.then((data) => {
			if (data.statusCode > 200 || data.status > 200) {
				showClass('showLoginBlock');
			}
			console.log(data.statusCode);
		});
		displayQuotes(quotesPromise);
	}
	// if (token.length > 0) {
	// 	useToken(token, quotesURL);
	// 	const anonymous = document.querySelector('#anonymous');
	// 	const loginSignup = document.querySelector('#loginSignup');
	// 	anonymous?.remove();
	// 	loginSignup?.remove();
	// } else {
	// const quotesPromise = fetchData(quotesURL, headerData);
	// quotesPromise.then((data) => {
	// 	if (data.statusCode > 200) {
	// 		showClass('showLoginBlock');
	// 	}
	// 	console.log(data.statusCode);
	// });
	// displayQuotes(quotesPromise);
	// }
	function addNewQuoteData() {
		// showClass('newQuoteContainer');
		showClass('closeBtn');
	}
	function saveQuote() {
		addNewQuote(newQuote, token, quotesURL);
		setInterval(() => {
			(newQuote = {
				quote: '',
				tags: '',
				author: ''
			}),
				2000;
		});
	}
	// function closeNewQuoteData() {
	// 	document.getElementById('newQuoteContainer')?.classList.add('d-none');
	// 	document.getElementById('closeBtn')?.classList.add('d-none');
	// }
</script>

{#if token}
	<div class="new-quote-block">
		<button
			id="addQuote"
			type="button"
			class="d-block btn addQuotebtn"
			data-bs-toggle="modal"
			data-bs-target="#newQuoteContainer"
			on:click={addNewQuoteData}
		>
			Add Quotes
		</button>
		<!-- <button id="closeBtn" class="d-none" on:click={closeNewQuoteData}>close</button> -->
	</div>
{/if}

<div
	class="modal fade"
	id="newQuoteContainer"
	tabindex="-1"
	aria-labelledby="newQuoteContainerLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="newQuoteContainerLabel">You can add a new Quote</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div id="newQuoteContainer" class="d-block">
					<div>
						<label for="quote" class="d-block">Quote:</label>
						<textarea
							id="quote"
							bind:value={newQuote.quote}
							required
							placeholder="Enter your Quote"
							rows="5"
							cols="33"
							class="w-100"
						/>
					</div>
					<div class="mt-4">
						<label for="author" class="d-block">tags:</label>
						<input
							type="text"
							id="author"
							bind:value={newQuote.tags}
							required
							placeholder="Enter Author name"
							class="w-100"
						/>
					</div>
					<div class="mt-4">
						<label for="author" class="d-block">Author:</label>
						<input
							type="text"
							id="author"
							bind:value={newQuote.author}
							required
							placeholder="Enter Author name"
							class="w-100"
						/>
					</div>
					<!-- <button id="saveQuote" class="d-block" on:click={saveQuote}>Save</button> -->
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" id="saveQuote" class="btn btn-primary" on:click={saveQuote}>
					Save changes
				</button>
			</div>
		</div>
	</div>
</div>

<div id="newQuoteContainer" class="d-none">
	<label for="quote">quote:</label>
	<input
		type="text"
		id="quote"
		bind:value={newQuote.quote}
		required
		placeholder="Enter your Quote"
	/>
	<label for="author">Author:</label>
	<input
		type="text"
		id="author"
		bind:value={newQuote.author}
		required
		placeholder="Enter Author name"
	/>
	<button id="saveQuote" class="d-block" on:click={saveQuote}>Save</button>
</div>
<div id="quotes-container" class="quotes-container-block"></div>
<div id="showLoginBlock" class="d-none">
	<p>You have exhausted the API calls limit. Please login or signup to view Quotes.</p>
	<div class="login-signup d-flex">
		<a href="/login">Login/</a>
		<a href="/sign-up">signup</a>
	</div>
</div>
