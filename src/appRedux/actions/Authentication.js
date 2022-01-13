import { login } from "../../services";
import { authConstants } from "../constants";

export const userLogin = (onSuccess) => {
	return (dispatch) => {
		dispatch({ type: authConstants.LOGIN_REQUEST });
		login().then((response) => {
			dispatch({ type: authConstants.LOGIN_SUCCESS, data: response });
			if (onSuccess) {
				onSuccess(response);
			}
		});
		// call login service
	};
};
