import { handleResponse } from ".";

export const login = () => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email: "dipanshu@gmail.com",
			password: "password1",
		}),
	};

	return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/login`, requestOptions).then(handleResponse);
};
