import { Typography, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_registrationLayoutLogo } from "../../config/Constants";

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
		marginTop: 60,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export const RegistrationCard = ({ children, headingText, linkText, linkTitleText }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" className={classes.container}>
			<img className={classes.logoImg} src={ui_registrationLayoutLogo} alt="logo" />
			<Box display="flex" alignItems="center" flexDirection="column" flexGrow={1} width="100%">
				<Typography variant="h3" color="secondary.100">
					{headingText}
				</Typography>
				<Typography justifySelf="self-end" variant="subtitle2" mt={2}>
					{linkTitleText}
					<Link color="primary" underline="none">
						{linkText}
					</Link>
				</Typography>
				<Box className={classes.contentWrapper}>{children}</Box>
			</Box>
		</Grid>
	);
};

RegistrationCard.propTypes = {
	children: PropTypes.node,
	headingText: PropTypes.string,
	linkTitleText: PropTypes.string,
	linkText: PropTypes.string,
};
