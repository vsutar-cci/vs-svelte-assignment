import { isObjectNotEmpty, hideClass, showClass } from '../../utilityCode/utility';
import { validatePassword, validateUserName, validateName } from '../../utilityCode/validate';

import { getResponse } from '../../apiResponse/signupResponse';

function verifyDetails(newUserData: object) {
	validatePassword(newUserData.password) ? hideClass('passwordError') : showClass('passwordError');

	validateUserName(newUserData.email) ? hideClass('userNameError') : showClass('userNameError');

	validateName(newUserData.firstName) ? hideClass('firstNameError') : showClass('firstNameError');

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
