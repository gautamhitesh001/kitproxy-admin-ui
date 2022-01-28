import { handleResponse } from ".";

export const login = ({ email, password }) => {
    console.log(email, password);
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/login`, requestOptions).then(handleResponse);
};
export const register = ({ name, email, phoneNumber, password }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            email,
            phoneNumber,
            password
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/register`, requestOptions).then(handleResponse);
};
export const logout = ({ refreshToken }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            refreshToken
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/logout`, requestOptions).then(handleResponse);
};
export const refreshTokens = ({ refreshToken }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            refreshToken
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/refresh-token`, requestOptions).then(handleResponse);
};
export const forgotPassword = ({ email }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/forgot-password`, requestOptions).then(handleResponse);
};
export const resetPassword = ({ password }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            password
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/reset-password`, requestOptions).then(handleResponse);
};
export const sendVerificationEmail = ({ email }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/send-verification-email`, requestOptions).then(handleResponse);
};
export const verifyEmail = ({ email }) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email
        }),
    };
    return fetch(`${process.env.REACT_APP_API_END_POINT}/auth/verify-email`, requestOptions).then(handleResponse);
};