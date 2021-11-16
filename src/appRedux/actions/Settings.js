import { settingConstants } from "../constants";

export const showDashboardInfoNotification = (
	type = "info",
	notificationText,
	primaryBtnText = "",
	primaryBtnAction = () => {},
	secondaryBtnText = "",
	secondaryBtnAction = () => {}
) => {
	return (dispatch) => {
		dispatch({ type: settingConstants.SHOW_DASHBOARD_NOTIFICATION, data: { type, notificationText, primaryBtnText, primaryBtnAction, secondaryBtnText, secondaryBtnAction } });
	};
};

export const hideDashboardInfoNotification = () => {
	return (dispatch) => {
		dispatch({ type: settingConstants.HIDE_DASHBOARD_NOTIFICATION });
	};
};
