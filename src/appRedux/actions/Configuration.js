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
