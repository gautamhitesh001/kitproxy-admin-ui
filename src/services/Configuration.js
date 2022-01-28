import { handleResponse } from ".";

export const getConfigurationData = (token, domainName) => {
    const requestOptions = {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    };

    return fetch(`${process.env.REACT_APP_API_END_POINT}/configFrontend/?domainName=${domainName}`, requestOptions).then(handleResponse);
};

export const updateConfigurationData = (token, data, domainName) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.REACT_APP_API_END_POINT}/configFrontend/${domainName}`, requestOptions).then(handleResponse);
};

export const createConfigurationSetting = (token, data, domainName) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify({...data, domainName: domainName }),
    };

    return fetch(`${process.env.REACT_APP_API_END_POINT}/configFrontend`, requestOptions).then(handleResponse);
};