import { Typography } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { ui_onboardingResourceDeploymentCompleted } from "../../../../config/Constants";

export const DeploymentCompleted = () => {
	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Deployment complete
			</Typography>
			<Typography mt={2} mb={8} variant="subtitle1" color="secondary.90">
				KitProxy deployment is completed, update your DNS to get going.
			</Typography>
			<img src={ui_onboardingResourceDeploymentCompleted} alt="deployment completed" />
			<CustomButton sx={{ mt: "64px !important" }} btnWidth={350} variant="contained">
				UPDATE DNS
			</CustomButton>
		</>
	);
};
