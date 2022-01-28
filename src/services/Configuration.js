import { handleResponse } from ".";

export const getConfigurationData = (token) => {
    const requestOptions = {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    };

    return fetch(`${process.env.REACT_APP_API_END_POINT}/configFrontend/?page=1&limit=10&domainName=www.example1.com`, requestOptions).then(handleResponse);
};

export const updateConfigurationData = (token, data, domainName) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.REACT_APP_API_END_POINT}/configFrontend/${domainName}`, requestOptions).then(handleResponse);
};