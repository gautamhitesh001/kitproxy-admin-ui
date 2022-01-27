import { configurationConstants } from "../constants";

const initialSettings = {
	configurationSettings: {},
	updatedConfigurationSettings: {},
};

const Configuration = (state = initialSettings, action) => {
	switch (action.type) {
		case configurationConstants.GET_CONFIGURATION_SETTINGS_REQUEST:
			return {
				...state,
			};
		case configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS:
			return {
				...state,
				configurationSettings: action.data,
			};
		case configurationConstants.GET_CONFIGURATION_SETTINGS_FAILURE:
			return {
				...state,
			};
		case configurationConstants.UPDATE_CONFIGURATION_SETTINGS:
			return {
				...state,
				configurationSettings: action.data,
			};

		default:
			return state;
	}
};

export default Configuration;
