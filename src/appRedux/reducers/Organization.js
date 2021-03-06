import { organizationConstants } from "../constants";

const initialValues = {
	isOrganizationCreated: false,
	organizationInfo: {},
};

const Organization = (state = initialValues, action) => {
	switch (action.type) {
		case organizationConstants.CREATE_ORGANIZATION_REQUEST:
		case organizationConstants.GET_ORGANIZATION_REQUEST:
			return {
				organizationInfo: {},
				isOrganizationCreated: false,
			};
		case organizationConstants.CREATE_ORGANIZATION_SUCCESS:
		case organizationConstants.GET_ORGANIZATION_SUCCESS:
			return {
				...state,
				isOrganizationCreated: true,
				organizationInfo: action.data,
			};
		default:
			return state;
	}
};

export default Organization;
