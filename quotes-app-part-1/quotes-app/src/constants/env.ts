/// <reference types="vite/client" />

interface EnvConfig {
	VITE_QUOTES_URL: string;
	VITE_LOGIN_URL: string;
	VITE_SIGNUP_URL: string;
}

const env: EnvConfig = {
	VITE_QUOTES_URL: import.meta.env.VITE_QUOTES_URL,
	VITE_LOGIN_URL: import.meta.env.VITE_LOGIN_URL,
	VITE_SIGNUP_URL: import.meta.env.VITE_SIGNUP_URL
};

export default env;
