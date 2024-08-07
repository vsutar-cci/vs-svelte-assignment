// functions related to login

export function showClass(element: string) {
	const userNameError = document.getElementById(element);
	if (userNameError) {
		userNameError.classList.remove('d-none');
	}
}

export function hideClass(element: string) {
	const passwordError = document.getElementById(element);

	if (passwordError) {
		passwordError.classList.add('d-none');
	}
}

export function isObjectNotEmpty(obj: object): boolean {
	return Object.keys(obj).length > 0;
}
