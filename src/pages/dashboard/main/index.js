import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { DashboardLayout } from "../../../layouts/dashboard";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	successContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	},
}));

export const Dashboard = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	return (
		<DashboardLayout>
			<h1>Dashboard</h1>
		</DashboardLayout>
	);
};
