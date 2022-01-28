import { configurationConstants } from "../constants";
import { getConfigurationData, updateConfigurationData, createConfigurationSetting } from "../../services";

export const getConfigurationSettings = (token, domainName, onSuccess) => {
    return (dispatch) => {
        dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_REQUEST });
        getConfigurationData(token, domainName).then((response) => {
            dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: response.allConfigs.results[0] });
            if (onSuccess) {
                onSuccess();
            }
        });
    };
};

export const createConfigurationSettings = (token, config, domainName) => {
    return (dispatch) => {
        createConfigurationSetting(token, config, domainName).then((response) => {
            dispatch(getConfigurationSettings(token));
        })
    };
};

export const updateConfigurationSetting = (updatedFieldsData) => {
    return (dispatch) => {
        dispatch({ type: configurationConstants.CONFIGURATION_CHANGE_REQUEST, data: updatedFieldsData });
    };
};

export const deployConfigurationSetting = (token, data, domainName, onSuccess) => {
    return (dispatch) => {
        dispatch({ type: configurationConstants.DEPLOY_CONFIGURATION_SETTINGS_REQUEST });
        updateConfigurationData(token, data, domainName).then((response) => {
            dispatch({ type: configurationConstants.GET_CONFIGURATION_SETTINGS_SUCCESS, data: response.config });
        });

        dispatch({ type: configurationConstants.DEPLOY_CONFIGURATION_SETTINGS_SUCCESS });
    };
};