import { login, register, logout, refreshTokens, forgotPassword, resetPassword, sendVerificationEmail, verifyEmail } from "../../services";
import { authConstants } from "../constants";

export const userLogin = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.LOGIN_REQUEST });
		login(credentials).then((response) => {
			if (!response.code) {
				dispatch({ type: authConstants.LOGIN_SUCCESS, data: response });
			}
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};
export const userRegister = (user, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.REGISTRATION_REQUEST });
		register(user).then((response) => {
			dispatch({ type: authConstants.REGISTRATION_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};

export const userLogout = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.LOGOUT_REQUEST });
		localStorage.clear();
		// logout(credentials).then((response) => {
		// 	dispatch({ type: authConstants.LOGOUT_SUCCESS, data: response });
		// 	if (onSuccess) {
		// 		onSuccess(response);
		// 	}
		// });
	};
};
export const userRefreshTokens = (_refreshTokens, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.REFRESH_TOKENS_REQUEST });
		refreshTokens(_refreshTokens).then((response) => {
			dispatch({ type: authConstants.REFRESH_TOKENS_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};

export const userForgotPassword = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.FORGOT_PASSWORD_REQUEST });
		forgotPassword(credentials).then((response) => {
			dispatch({ type: authConstants.FORGOT_PASSWORD_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};

export const userResetPassword = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.RESET_PASSWORD_REQUEST });
		resetPassword(credentials).then((response) => {
			dispatch({ type: authConstants.RESET_PASSWORD_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};

export const userSendVerificationEmail = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.SEND_VERIFICATION_EMAIL_REQUEST });
		sendVerificationEmail(credentials).then((response) => {
			dispatch({ type: authConstants.SEND_VERIFICATION_EMAIL_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};

export const userVerifyEmail = (credentials, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.VERIFY_EMAIL_REQUEST });
		verifyEmail(credentials).then((response) => {
			dispatch({ type: authConstants.VERIFY_EMAIL_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
	};
};
