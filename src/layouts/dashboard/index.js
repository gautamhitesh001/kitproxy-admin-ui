import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { ui_kitsuneLogoMain } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		minHeight: "100vh",
		backgroundColor: theme.palette.black["5"],
		overflow: "auto",
	},
	toolBar: {
		minHeight: "80px !important",
		paddingLeft: "40px !important",
		paddingRight: "40px !important",
	},
	contentWrapper: {
		paddingTop: 100,
		paddingBottom: 64,
		paddingLeft: 40,
		paddingRight: 40,
		minHeight: "100vh",
	},
}));

export const DashboardLayout = ({ children, showWebsite, website }) => {
	const classes = useStyles();

	return (
		<Box className={classes.layoutContainer}>
			<AppBar elevation={0}>
				<Toolbar classes={{ root: classes.toolBar }}>
					<Box flex={1}>
						<img src={ui_kitsuneLogoMain} alt="logo" />
					</Box>
				</Toolbar>
			</AppBar>
			<Box className={classes.contentWrapper}>{children}</Box>
		</Box>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.node,
	showWebsite: PropTypes.bool,
	website: PropTypes.string,
};
