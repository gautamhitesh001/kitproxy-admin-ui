import { authConstants } from "../constants";

const initialSettings = {
	isUserLoggedIn: false,
};

const Authentication = (state = initialSettings, action) => {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return {
				...state,
				isUserLoggedIn: false,
			};
		case authConstants.LOGIN_SUCCESS:
			return {
				...state,
				isUserLoggedIn: true,
			};
		case authConstants.LOGIN_FAILURE:
			return {
				...state,
				isUserLoggedIn: false,
			};

		default:
			return state;
	}
};

export default Authentication;
