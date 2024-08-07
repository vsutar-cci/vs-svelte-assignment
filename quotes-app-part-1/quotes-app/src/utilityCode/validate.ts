import { passwordPattern, userNameRegex, nameRegex } from '../constants/constant';

export function validatePassword(password: string): boolean {
	return passwordPattern.test(password);
}
export function validateUserName(userName: string): boolean {
	return userNameRegex.test(userName);
}

export function validateName(name: string): boolean {
	return nameRegex.test(name);
}
