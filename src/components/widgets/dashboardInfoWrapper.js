import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	infoWrapper: {
		backgroundColor: "#FAFAFA",
		marginTop: "auto",
		marginBottom: "auto",
		alignSelf: "center",
		width: "100%",
		paddingBottom: 72,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

export const DashboardInfoWrapper = ({ children }) => {
	const classes = useStyles();

	return <Box className={classes.infoWrapper}>{children}</Box>;
};

DashboardInfoWrapper.propTypes = {
	children: PropTypes.node,
};
