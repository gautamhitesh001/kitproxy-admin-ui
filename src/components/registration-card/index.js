import { Typography, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_registrationLayoutLogo } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	contentWrapper: {
		width: "100%",
		maxWidth: 400,
		alignItems: "center",
	},
	logoImg: {
		marginBottom: 40,
	},
}));

export const RegistrationCard = ({ headingText, linkText, bottomText }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.contentWrapper}>
			<img className={classes.logoImg} src={ui_registrationLayoutLogo} alt="logo" />
			<Box display="flex" alignItems="center" flexDirection="column" flexGrow={1}>
				<Typography variant="h3" color="secondary.100">
					{headingText}
				</Typography>
			</Box>
		</Grid>
	);
};

RegistrationCard.propTypes = {
	headingText: PropTypes.string,
	bottomText: PropTypes.string,
	linkText: PropTypes.string,
};
