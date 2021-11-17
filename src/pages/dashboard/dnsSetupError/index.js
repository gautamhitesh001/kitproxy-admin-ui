import { makeStyles } from "@mui/styles";
import { DashboardLayout } from "../../../layouts/dashboard";
import { DashboardInfoWrapper } from "../../../components/widgets/dashboardInfoWrapper";
import { Typography } from "@mui/material";
import { PrimaryButton } from "../../../components/buttons";

const useStyles = makeStyles((theme) => ({
	btnLink: {
		marginTop: "16px !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
}));

export const DnsSettingError = () => {
	const classes = useStyles();
	const maxWidth = 500;

	return (
		<DashboardLayout>
			<DashboardInfoWrapper>
				<Typography mt={9} maxWidth={maxWidth} variant="h4" textAlign="center">
					Complete your DNS Settings to start working on your project
				</Typography>
				<Typography maxWidth={maxWidth} mt={2} variant="subtitle2" textAlign="center">
					There was an error updating your Cloud Services. Please verify your credentials or continue with Kitusne for a hassle free experience
				</Typography>
				<PrimaryButton btnWidth={220} disableRipple={true} disableFocusRipple={true} variant="contained">
					Check my DNS
				</PrimaryButton>
				<PrimaryButton classes={{ root: classes.btnLink }} disableRipple={true} disableFocusRipple={true} isTextTransformNone={true}>
					Use Kitsune instead
				</PrimaryButton>
			</DashboardInfoWrapper>
		</DashboardLayout>
	);
};
