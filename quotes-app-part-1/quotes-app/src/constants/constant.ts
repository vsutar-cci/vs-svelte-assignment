export interface LoginForm {
	username: string;
	password: string;
}
export interface AddNewQuote {
	quote: string;
	tags: string;
	author: string;
}
export interface ApiError {
	message: string;
	error: string;
}
export interface AuthResponse {
	access_token: string;
}
export interface AddNewQuoteResponse {
	success: boolean;
	message?: string;
}
export interface Quote {
	id: string;
	text: string;
	author: string;
}
export interface SignupForm {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
export const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
export const userNameRegex: RegExp = /\S+@\S+\.\S+/;
export const nameRegex: RegExp = /^[A-Za-z][A-Za-z '-]*[A-Za-z]$/;
