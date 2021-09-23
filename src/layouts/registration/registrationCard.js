import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { ui_registrationLayoutLogo } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		width: "100%",
		boxShadow: "0px 21px 25px rgba(0, 0, 0, 0.25);",
	},
	contentWrapper: {
		padding: "55px 40px",
		height: "100%",
		width: "100%",
		alignItems: "center",
	},

	logoImg: {
		marginBottom: 64,
	},
}));

export const RegistrationCard = ({ displayComponent }) => {
	const classes = useStyles();

	return (
		<Paper variant="outlined" className={classes.card}>
			<Grid container direction="column" className={classes.contentWrapper}>
				<img className={classes.logoImg} src={ui_registrationLayoutLogo} alt="logo" />
				{displayComponent}
			</Grid>
		</Paper>
	);
};

RegistrationCard.propTypes = {
	displayComponent: PropTypes.node,
};
