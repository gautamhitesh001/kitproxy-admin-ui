import { settingConstants } from "../constants";

const initialSettings = {
	showDashboardInfoNotification: false,
	dashboardNotificationDetails: {},
};

const Settings = (state = initialSettings, action) => {
	switch (action.type) {
		case settingConstants.SHOW_DASHBOARD_NOTIFICATION:
			return {
				...state,
				showDashboardInfoNotification: true,
				dashboardNotificationDetails: action.data,
			};
		case settingConstants.HIDE_DASHBOARD_NOTIFICATION:
			return {
				...state,
				showDashboardInfoNotification: false,
				dashboardNotificationDetails: {},
			};

		default:
			return state;
	}
};

export default Settings;
