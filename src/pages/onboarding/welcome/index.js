import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { CustomButton } from "../../../components/custom-button";
import { ui_onboardingWelcome } from "../../../config/Constants";
import { OnboardingLayout } from "../../../layouts/onboarding";

const useStyles = makeStyles((theme) => ({
	contentWrapper: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		justifyContent: "center",
	},
}));

export const OnboardingWelcome = () => {
	const classes = useStyles();

	return (
		<OnboardingLayout>
			<Box className={classes.contentWrapper}>
				<Typography variant="h3" color="secondary.main">
					Welcome Vivek!
				</Typography>
				<Typography textAlign="center" mt={2} mb={8} variant="subtitle2" color="secondary.70">
					Accelerate and secure your website with Kitproxy.
					<br />
					Run Web Vitals Analysis to get customised recommendations in four simple steps
				</Typography>
				<img src={ui_onboardingWelcome} alt="welcome" />
				<CustomButton topMargin="64px !important" btnWidth={350} variant="contained">
					GET STARTED
				</CustomButton>
			</Box>
		</OnboardingLayout>
	);
};
