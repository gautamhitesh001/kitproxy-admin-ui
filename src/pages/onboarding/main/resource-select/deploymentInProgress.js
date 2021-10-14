import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ui_onboardingResourceDeploymentInProgress } from "../../../../config/Constants";

const useStyles = makeStyles((theme) => ({
	progress: {
		height: "10px !important",
		borderRadius: 5,
		width: 375,
		marginTop: 40,
		marginBottom: 75,
	},
	bar: {
		borderRadius: 5,
	},
}));

export const DeploymentInProgress = () => {
	const classes = useStyles();

	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Deployment in progress
			</Typography>
			<Typography mt={2} variant="subtitle1" color="secondary.90">
				Please wait while we deploy your resources. This might take few minutes.
			</Typography>
			<LinearProgress variant="determinate" value={80} color="primary" classes={{ root: classes.progress, bar: classes.bar }} />
			<img src={ui_onboardingResourceDeploymentInProgress} alt="deployment in progress" />
		</>
	);
};
