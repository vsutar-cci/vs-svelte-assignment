/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchData } from '../apiRequest/callAPI';
import EnvConfig from '../constants/env';
import { accessTokenStore, isLoggedIn } from '../stores/userStores';
import { onDestroy } from 'svelte';
import { goto } from '$app/navigation';

export function checkLoginStatus(): Promise<boolean> {
	return new Promise((resolve) => {
		const unsubscribe = isLoggedIn.subscribe((value) => {
			resolve(value);
		});
		onDestroy(unsubscribe);
	});
}

const loginURL = EnvConfig.VITE_LOGIN_URL;

function createHeaders(username: string, password: string) {
	const encodedData = window.btoa(`${username}:${password}`);
	return new Headers({
		'Content-Type': 'application/json',
		Authorization: `Basic ${encodedData}`
	});
}

export async function getResponse(formData: { username: string; password: string }) {
	const headers = createHeaders(formData.username, formData.password);
	const headerData = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(formData),
		redirect: 'follow'
	};

	try {
		const response = await fetchData(loginURL, headerData);
		const data = response;
		const token = data.access_token;
		if (data.statusCode > 390) {
			const errorMessage = document.getElementById('showErrorMessage');
			errorMessage?.classList.remove('d-none');
		}
		if (token) {
			handleLogin(token);
		} else {
			document.getElementById('showErrorMessage')?.classList.remove('d-none');
		}
	} catch (error: any) {
		console.error('Error:', error);
	}
}

function handleLogin(token: string) {
	if (token) {
		// Set token and login status in stores
		isLoggedIn.set(true);
		accessTokenStore.set(token);
		console.log('Access token saved:', token);
		// Handle nav tabs display
		displayNavTabs();
		// Redirect to homepage
		document.getElementById('successMessage')?.classList.remove('d-none');
		setTimeout(() => {
			goto('/');
		}, 3000);
	} else {
		console.error('Access token not found in response');
	}
}

function displayNavTabs() {
	const navLinks = document.getElementById('navLinks');
	if (navLinks) {
		navLinks.classList.remove('d-none');
	}
}
