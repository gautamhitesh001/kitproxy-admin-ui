import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_kitsuneLogoMain } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		maxWidth: 400,
		alignItems: "center",
	},
	logoImg: {
		marginBottom: 40,
	},
	contentWrapper: {
		width: "100%",
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export const RegistrationCard = ({ children, headingText, subTextComponent, contentTopMargin }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.container}>
			<img className={classes.logoImg} src={ui_kitsuneLogoMain} alt="logo" />
			<Box display="flex" alignItems="center" flexDirection="column" flexGrow={1} width="100%">
				<Typography variant="h3" color="secondary.100">
					{headingText}
				</Typography>
				{subTextComponent ? subTextComponent : null}

				<Box marginTop={contentTopMargin || 4} className={classes.contentWrapper}>
					{children}
				</Box>
			</Box>
		</Grid>
	);
};

RegistrationCard.propTypes = {
	children: PropTypes.node,
	subTextComponent: PropTypes.node,
	headingText: PropTypes.string,
	contentTopMargin: PropTypes.number,
};
