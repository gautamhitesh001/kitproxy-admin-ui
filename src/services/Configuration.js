import { handleResponse } from ".";

export const getConfigurationData = (token) => {
	const requestOptions = {
		method: "GET",
		headers: { Authorization: "Bearer " + token },
	};

	return fetch(`${process.env.REACT_APP_API_END_POINT}/config/61cae2657707075d2aba7423`, requestOptions).then(handleResponse);
};

export const updateConfigurationData = (token, data) => {
	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
		body: JSON.stringify(data),
	};

	return fetch(`${process.env.REACT_APP_API_END_POINT}/config/61cae2657707075d2aba7423`, requestOptions).then(handleResponse);
};
