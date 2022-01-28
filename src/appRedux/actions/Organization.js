import { organizationConstants } from "../constants";
import { createOrganization, getOrganizationInfo } from "../../services/Organization";

export const createOrg = (organization, token, onSuccess) => {
    return (dispatch) => {
        dispatch({ type: organizationConstants.CREATE_ORGANIZATION_REQUEST });
        createOrganization(organization, token).then((response) => {
            dispatch({ type: organizationConstants.CREATE_ORGANIZATION_SUCCESS, data: response });
            if (onSuccess) {
                onSuccess(response);
            }
        });
    };
};

export const getOrganization = (token, userId, onSuccess) => {
    return (dispatch) => {
        // dispatch({ type: organizationConstants.GET_ORGANIZATION_REQUEST });
        getOrganizationInfo(token, userId).then(response => {
            dispatch({ type: organizationConstants.GET_ORGANIZATION_SUCCESS, data: response });
            if (onSuccess) {
                onSuccess(response);
            }
        });
    };
};