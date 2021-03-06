import { handleResponse } from ".";

export const createOrganization = (organization, token) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
		body: JSON.stringify({
			...organization,
		}),
	};
	return fetch(`${process.env.REACT_APP_API_END_POINT}/organization/createOrganization`, requestOptions).then(handleResponse);
};

export const getOrganizationInfo = (token, userid) => {
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
	};
	return fetch(`${process.env.REACT_APP_API_END_POINT}/organization/getAllOrganizations?createdBy=${userid}&isActive=true`, requestOptions).then(handleResponse);
};
