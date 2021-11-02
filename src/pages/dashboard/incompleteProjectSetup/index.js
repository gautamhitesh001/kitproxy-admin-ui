import { makeStyles } from "@mui/styles";
import { DashboardLayout } from "../../../layouts/dashboard";
import { DashboardInfoWrapper } from "../../../components/widgets/dashboardInfoWrapper";
import { Typography } from "@mui/material";
import { PrimaryButton } from "../../../components/primaryButton";
import { ui_sampleCompanyLogo } from "../../../config/Constants";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	btnLink: {
		marginTop: "16px !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
	companyBadge: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.common.white,
		border: "1px solid #CECECE",
		borderRadius: 4,
		padding: "10px 20px",
	},
}));

export const IncompleteProjectSetup = () => {
	const classes = useStyles();
	const maxWidth = 600;

	return (
		<DashboardLayout>
			<DashboardInfoWrapper>
				<Box mt={4} className={classes.companyBadge}>
					<img src={ui_sampleCompanyLogo} alt="profile" />
					<Typography ml={2} variant="h6" color="grey.main">
						Care Insurance
					</Typography>
				</Box>
				<Typography mt={4} maxWidth={maxWidth} variant="h4" textAlign="center">
					Welcome to your Dashboard, you can track details of your website example.com here.
				</Typography>
				<Typography maxWidth={maxWidth} mt={2} variant="subtitle2" textAlign="center">
					Finish setup for careinsurance.com to start working on your project.
				</Typography>
				<PrimaryButton btnWidth={250} isTextTransformNone={true} disableRipple={true} disableFocusRipple={true} variant="contained">
					Resume your project Setup
				</PrimaryButton>
			</DashboardInfoWrapper>
		</DashboardLayout>
	);
};
