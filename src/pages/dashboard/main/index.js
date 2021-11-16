import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { DashboardLayout } from "../../../layouts/dashboard";
import { DashboardOnboardingStatus } from "../../../components/dashboardOnboardingStatus";
import { useDispatch } from "react-redux";
import { showDashboardInfoNotification } from "../../../appRedux/actions";

const useStyles = makeStyles((theme) => ({
	bottomContainer: {
		width: 325,
		position: "fixed",
		bottom: 70,
		right: 70,
		display: "flex",
		flexDirection: "column",
	},
}));

export const Dashboard = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [showSuccess, setShowSuccess] = useState(false);

	useEffect(() => {
		// dispatch(
		// 	showDashboardInfoNotification(
		// 		"error",
		// 		"There’s an unusual spike in your CPU utilisation. Please take action",
		// 		"Open CPU Stats",
		// 		() => {},
		// 		"Remind me later",
		// 		() => {}
		// 	)
		// );
	}, []);

	return (
		<DashboardLayout>
			<h1>Dashboard</h1>
			{/* <DashboardOnboardingStatus /> */}
		</DashboardLayout>
	);
};
