import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_logo } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		width: "100vw",
		height: "100vh",
		backgroundImage: "url(" + ui_logo + ")",
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		position: "relative",
		overflow: "auto",
	},
	overlayContainer: {
		width: "100%",
		minHeight: "100vh",
		backgroundColor: "rgba(0,0,0,0.6)",
		position: "absolute",
		top: 0,
		left: 0,
		overflow: "hidden",
		padding: "50px 150px",
	},
	card: {
		height: "100%",
		width: "100%",
	},
	contentHeading: {
		marginTop: "200px !important",
	},
	tagsWrapper: {
		marginTop: "64px",
	},
}));

export const RegistrationLayout = ({ children }) => {
	const classes = useStyles();
	return (
		<Grid className={classes.layoutContainer}>
			<Grid container className={classes.overlayContainer}>
				<Grid container spacing={12}>
					<Grid container item xs={5} sx={{ pr: 2 }}>
						<Paper className={classes.card} variant="outlined">
							{children}
						</Paper>
					</Grid>
					<Grid item container xs={7} columnSpacing={1} direction="column" alignItems="center" justifyItems="flex-start">
						<Typography className={classes.contentHeading} variant="h1" color="common.white">
							Accelerate Your Website With Kitsune
						</Typography>
						<Grid container className={classes.tagsWrapper}>
							<Grid item xs={4}>
								<Typography variant="h5" color="text.disabled">
									Customise
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography variant="h5" color="text.disabled">
									Apply
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography variant="h5" color="text.disabled">
									Get Going
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

RegistrationLayout.propTypes = {
	children: PropTypes.node,
};
