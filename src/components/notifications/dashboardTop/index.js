import { Button, ButtonBase, Slide, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { AlertTriangle, CheckSquare, Info, X, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { hideDashboardInfoNotification } from "../../../appRedux/actions";

const useStyles = makeStyles((theme) => ({
	container: ({ bgColor, primaryColor }) => ({
		height: 72,
		display: "flex",
		alignItems: "center",
		backgroundColor: bgColor,
		padding: "0 25px",
		color: primaryColor,
	}),
	notificationText: ({ textColor }) => ({
		color: textColor,
		marginLeft: "24px !important",
	}),
	primaryBtn: ({ primaryColor }) => ({
		border: "2px solid " + primaryColor,
		padding: "12px 16px !important",
		borderRadius: "4px !important",
		"& span": {
			textTransform: "none !important",
			color: primaryColor + " !important",
		},
	}),
	secondaryBtn: ({ primaryColor }) => ({
		marginRight: "32px !important",
		"& span": {
			textTransform: "none !important",
			color: primaryColor + " !important",
		},
	}),
}));

export const DashboardNotificationTop = () => {
	const { showDashboardInfoNotification, dashboardNotificationDetails } = useSelector(({ settings }) => settings);
	const { type, notificationText, primaryBtnText, primaryBtnAction, secondaryBtnText, secondaryBtnAction } = dashboardNotificationDetails;
	const dispatch = useDispatch();

	const getNotificationColors = () => {
		switch (type) {
			case "success":
				return { bgColor: "#67AC5B", textColor: "#FFFFFF", primaryColor: "#FFFFFF" };
			case "error":
				return { bgColor: "#DD4942", textColor: "#FFFFFF", primaryColor: "#FFFFFF" };
			case "warning":
				return { bgColor: "#EDB63F", textColor: "#6D5112", primaryColor: "#70500C" };
			case "info":
				return { bgColor: "#D1E4FC", textColor: "#2A4E7F", primaryColor: "#0C3364" };
		}
	};

	const getNotificationIcon = () => {
		switch (type) {
			case "success":
				return <CheckSquare size={20} />;
			case "error":
				return <XCircle size={20} />;
			case "warning":
				return <AlertTriangle size={20} />;
			case "info":
				return <Info size={20} />;
		}
	};

	const hideNotification = () => {
		dispatch(hideDashboardInfoNotification());
	};

	const classes = useStyles({ ...getNotificationColors() });

	return (
		<Slide direction="down" in={showDashboardInfoNotification} mountOnEnter unmountOnExit>
			<Box className={classes.container}>
				{getNotificationIcon()}
				<Typography variant="body1" className={classes.notificationText}>
					{notificationText}
				</Typography>
				<Box marginLeft="auto" />

				{primaryBtnText ? (
					<ButtonBase onClick={primaryBtnAction} sx={{ mr: 3 }} disableRipple disableTouchRipple>
						<Box className={classes.primaryBtn}>
							<Typography variant="button">{primaryBtnText}</Typography>
						</Box>
					</ButtonBase>
				) : null}
				{secondaryBtnText ? (
					<Button variant="text" classes={{ root: classes.secondaryBtn }} disableRipple disableTouchRipple onClick={secondaryBtnAction}>
						<Typography variant="button">{secondaryBtnText}</Typography>
					</Button>
				) : null}

				<ButtonBase disableRipple disableTouchRipple onClick={hideNotification}>
					<X size={24} />
				</ButtonBase>
			</Box>
		</Slide>
	);
};
