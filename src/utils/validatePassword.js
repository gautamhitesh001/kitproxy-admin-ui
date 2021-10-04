import { findIndex } from "lodash";

export const passwordValidationArray = [
	{ key: "has8Characters", label: "Atleast 8 characters", value: false },
	{ key: "hasUpperCase", label: "Atleast one uppercase", value: false },
	{ key: "hasLowerCase", label: "Atleast one lowercase", value: false },
	{ key: "hasNumber", label: "Atleast one number", value: false },
	{ key: "hasSpecialCharacter", label: "Atleast one special character", value: false },
];

const setPasswordValidation = (validationArray, key, flag) => {
	let tempDataValidation = [...validationArray];
	tempDataValidation[findIndex(tempDataValidation, { key })].value = flag;
	return [...tempDataValidation];
};

export const checkPasswordValidation = (password) => {
	let passwordArray = [...passwordValidationArray];

	let upperCasePattern = new RegExp("(?=.*?[A-Z])");
	let lowerCasePattern = new RegExp("(?=.*?[a-z])");
	let numberPattern = new RegExp("(?=.*?[0-9])");
	// eslint-disable-next-line
	let specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	passwordArray = setPasswordValidation(passwordArray, "has8Characters", password.length >= 8);
	passwordArray = setPasswordValidation(passwordArray, "hasUpperCase", upperCasePattern.test(password));
	passwordArray = setPasswordValidation(passwordArray, "hasLowerCase", lowerCasePattern.test(password));
	passwordArray = setPasswordValidation(passwordArray, "hasNumber", numberPattern.test(password));
	passwordArray = setPasswordValidation(passwordArray, "hasSpecialCharacter", specialCharacterPattern.test(password));

	return passwordArray;
};
