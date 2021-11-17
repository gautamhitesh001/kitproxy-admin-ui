import { Typography } from "@mui/material";
import { PrimaryButton } from "../../../../components/buttons";
import { ui_onboardingVerificationCompleted } from "../../../../config/Constants";

export const VerificationComplete = () => {
	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Verification Complete!
			</Typography>
			<Typography mt={2} mb={8} variant="subtitle1" color="secondary.90">
				You’re all set! It will take upto 48 hrs for the records to reflect in your project dashboard.
			</Typography>
			<img src={ui_onboardingVerificationCompleted} alt="deployment in progress" />
			<PrimaryButton sx={{ mt: "64px !important" }} btnWidth={350} variant="contained">
				VIEW PROJECT DASHBOARD
			</PrimaryButton>
		</>
	);
};
