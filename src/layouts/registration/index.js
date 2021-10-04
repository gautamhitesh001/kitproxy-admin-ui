import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_registrationLayoutIllustration } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		width: "100vw",
		minHeight: "100vh",
		background: "linear-gradient(90.77deg, #2D3948 17.47%, #3A4554 89.94%)",
		overflow: "auto",
	},
	contentTextWrapper: {
		marginTop: "80px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	illustrationImg: {
		maxWidth: 400,
	},
	card: {
		height: "100%",
		width: "100%",
		borderRadius: "0 !important",
		boxShadow: "none !important",
	},
}));

export const RegistrationLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid container className={classes.layoutContainer} direction={{ xs: "column", xl: "row" }}>
			<Grid flexGrow={1} bgcolor="common.white" container item xs={12} xl={6} alignItems="center" justifyContent="center" pt={10} pb={5}>
				{children}
			</Grid>
			<Grid alignSelf="center" item container xs={12} xl={6} alignItems="center" direction="column" py={10} display={{ xs: "none", xl: "flex" }}>
				<img className={classes.illustrationImg} src={ui_registrationLayoutIllustration} alt="illustration" />
				<Box className={classes.contentTextWrapper}>
					<Typography variant="h2" color="secondary.10">
						Customise. Track. Analyse.
					</Typography>
					<Typography mt={4} variant="subtitle1" color="secondary.10">
						Make the most out of your website with Kitsune
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

RegistrationLayout.propTypes = {
	children: PropTypes.node,
};
