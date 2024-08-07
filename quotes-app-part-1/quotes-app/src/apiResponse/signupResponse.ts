import { goto } from '$app/navigation';
import { fetchData } from '../apiRequest/callAPI';
import EnvConfig from '../constants/env';
const signupURL = EnvConfig.VITE_SIGNUP_URL;

// function to sign up a user
export async function getResponse(formData: {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}) {
	console.log('Form Data:', formData);

	const requestOptions: RequestInit = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: '*/*'
		},
		body: JSON.stringify(formData),
		redirect: 'follow'
	};

	try {
		const response = await fetchData(signupURL, requestOptions);
		const data = response;
		if (data.created_at && data.id) {
			document.getElementById('success')?.classList.remove('d-none');
			setTimeout(() => {
				goto('/login');
			}, 3000);
		} else {
			document.getElementById('showErrorMessage')?.classList.remove('d-none');
		}
	} catch (error) {
		console.error('Error:', error);
	}
}
