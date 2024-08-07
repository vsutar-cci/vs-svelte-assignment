import { writable } from 'svelte/store';

const initialState = '';
const browser = typeof window !== 'undefined'; // Check if running in a browser

let storedToken = '';
if (browser) {
	storedToken = localStorage.getItem('authToken') || '';
}

export const accessTokenStore = writable(storedToken);

if (browser) {
	accessTokenStore.subscribe((value) => {
		localStorage.setItem('authToken', value);
	});
}

export const isLoggedIn = writable(false);

const { subscribe, set } = writable(storedToken);

// Function to reset the token
function reset() {
	set('');
	if (browser) {
		localStorage.removeItem('authToken');
	}
}

export const userLogout = {
	subscribe,
	set,
	reset
};

// Function to reset the store
export function resetStore() {
	accessTokenStore.set(initialState);
}
