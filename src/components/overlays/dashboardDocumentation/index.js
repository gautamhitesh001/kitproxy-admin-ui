import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { PlayCircle } from "react-feather";
import { PrimaryButton } from "../../buttons/primaryButton";

const useStyles = makeStyles((theme) => ({
	overlayContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		padding: "32px",
	},
	contentWrapper: {
		background: "rgba(241, 241, 241, 0.2)",
		backdropFilter: "blur(5px)",
		minHeight: "100%",
	},
}));

export const DashboardDocumentationOverlay = () => {
	const classes = useStyles();

	return (
		<Box className={classes.overlayContainer}>
			<Stack className={classes.contentWrapper} direction="column" alignItems="center">
				<Typography variant="h3" color="secondary.main" mt={20}>
					Make the most out of your Dashboard
				</Typography>
				<Typography textAlign="center" maxWidth={400} variant="subtitle2" color="secondary.80" mt={1}>
					Take a tour of the features and what you can do while we setup your project.
				</Typography>
				<PrimaryButton variant="contained" btnWidth={320}>
					<PlayCircle />
					<Typography ml={2}>START THE TOUR</Typography>
				</PrimaryButton>
			</Stack>
		</Box>
	);
};
