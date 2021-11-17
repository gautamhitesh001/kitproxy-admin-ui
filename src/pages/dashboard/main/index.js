import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { DashboardLayout } from "../../../layouts/dashboard";
import { DashboardOnboardingStatus } from "../../../components/dashboardOnboardingStatus";

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

	const [showSuccess, setShowSuccess] = useState(false);

	return (
		<DashboardLayout>
			<h1>Dashboard</h1>
			{/* <DashboardOnboardingStatus /> */}
		</DashboardLayout>
	);
};
