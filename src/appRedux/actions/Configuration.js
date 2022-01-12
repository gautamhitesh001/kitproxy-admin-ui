import { configurationConstants } from "../constants";
import configurationData from "../../config/data/configurationPageSample.json";

export const getConfigurationSettings = (organizationId, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_REQUEST });
		dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: configurationData });
		if (onSuccess) {
			onSuccess();
		}
		// call login service
	};
};

export const updateConfigurationSetting = (originalObj, objId, data, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: configurationConstants.UPDATE_CONFIGURATION_SETTINGS_REQUEST });

		let settingsData = { ...originalObj };
		settingsData[objId] = data;
		dispatch({ type: configurationConstants.UPDATE_CONFIGURATION_SETTINGS_SUCCESS });
		dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: settingsData });
	};
};
