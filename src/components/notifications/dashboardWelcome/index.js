import { Box } from "@mui/system";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { X } from "react-feather";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	contentWrapper: {
		margin: "40px 30px 0px 30px",
		padding: "30px 30px 60px 30px",
		backgroundColor: "#DBECFC",
	},
}));

export const DashboardWelcomeNotification = ({ handleClose }) => {
	const classes = useStyles();
	return (
		<Stack className={classes.contentWrapper} direction="column" justifyContent="center" alignItems="center">
			<Box width="100%" textAlign="end">
				<ButtonBase onClick={handleClose} disableRipple disableFocusRipple disableTouchRipple>
					<X />
				</ButtonBase>
			</Box>
			<Typography mt={2} textAlign="center" variant="h4" color="secondary.main" maxWidth={700}>
				Welcome to your Dashboard, you can track details of your website Care Insurance here.
			</Typography>
			<Typography textAlign="center" mt={2} variant="subtitle2" color="secondary.80" maxWidth={500}>
				You will be notified as soon as the setup is complete. It will take atleast a day for the dashboard to reflect the actual values from the servers.
			</Typography>
		</Stack>
	);
};

DashboardWelcomeNotification.propTypes = {
	handleClose: PropTypes.func,
};
