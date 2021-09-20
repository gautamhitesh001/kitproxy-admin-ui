import { authConstants } from "../constants";

export const userLogin = (data, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.LOGIN_REQUEST });
		// call login service
	};
};
