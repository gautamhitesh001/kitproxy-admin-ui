import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

export const VerifyDNS = () => {
	const classes = useStyles();

	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Verifying DNS
			</Typography>
			<Typography mt={2} variant="subtitle1" color="secondary.90">
				Please wait while we verify your DNS records. This might take few minutes.
			</Typography>
			<LinearProgress variant="determinate" value={80} color="primary" classes={{ root: classes.progress, bar: classes.bar }} />
		</>
	);
};
