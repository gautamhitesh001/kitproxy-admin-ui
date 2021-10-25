import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import { DashboardLayout } from "../../../layouts/dashboard";
import { Box } from "@mui/system";
import { Card, CardHeader, IconButton, Typography } from "@mui/material";
import { Maximize2, MoreVertical } from "react-feather";

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
	const history = useHistory();

	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	return (
		<DashboardLayout>
			<h1>Dashboard</h1>
			<Card className={classes.bottomContainer}>
				<CardHeader
					action={
						<>
							<IconButton>
								<Maximize2 />
							</IconButton>
							<IconButton>
								<MoreVertical />
							</IconButton>
						</>
					}
					title={
						<Typography variant="h5" color="secondary.main">
							mywebsite.com
						</Typography>
					}
				/>
			</Card>
		</DashboardLayout>
	);
};
