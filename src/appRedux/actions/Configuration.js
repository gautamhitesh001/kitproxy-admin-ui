import { configurationConstants } from "../constants";
import configurationData from "../../config/data/configurationPageSample.json";
import { getConfigurationData, updateConfigurationData } from "../../services";

export const getConfigurationSettings = (token, onSuccess) => {
	return (dispatch) => {
		dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_REQUEST });
		getConfigurationData(token).then((response) => {
			dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: response.allConfigs.results[0] });
			if (onSuccess) {
				onSuccess();
			}
		});
	};
};

export const updateConfigurationSetting = (data) => {
	return (dispatch) => {
		dispatch({ type: configurationConstants.UPDATE_CONFIGURATION_SETTINGS_REQUEST });
		dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: data });
		// updateConfigurationData(token, {
		// 	[id]: data,
		// }).then((response) => {
		// 	dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: response.config });
		// });

		dispatch({ type: configurationConstants.UPDATE_CONFIGURATION_SETTINGS_SUCCESS });
		// dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: settingsData });
	};
};
