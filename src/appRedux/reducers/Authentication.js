import { authConstants } from "../constants";

const initialSettings = {
	isUserLoggedIn: false,
	loginInfo: {},
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
				loginInfo: action.data,
			};
		case authConstants.LOGIN_FAILURE:
			return {
				...state,
				isUserLoggedIn: false,
			};
		case authConstants.LOGOUT_REQUEST:
			return {
				loginInfo: {},
				isUserLoggedIn: false,
			};
		default:
			return state;
	}
};

export default Authentication;
