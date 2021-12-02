import { ButtonBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	btnWrapper: ({ isTabActive }) => ({
		flex: 1,
	}),
	tabBtn: {
		flex: 1,
		backgroundColor: "#FFFFFF !important",
		border: "1px solid #E6E6E6 !important",
		paddingTop: "20px !important",
		paddingBottom: "20px !important",
		color: theme.palette.secondary.main,
	},
	activeTabBtn: {
		flex: 1,
		backgroundColor: "#FFFFFF !important",
		border: "1px solid #F4672A !important",
		paddingTop: "20px !important",
		paddingBottom: "20px !important",
		color: theme.palette.primary.main,
	},
}));

export const TabButton = ({ isTabActive, handleTabChange, label, index }) => {
	const classes = useStyles();

	return (
		<ButtonBase className={classes.btnWrapper} onClick={() => handleTabChange(index)} disableRipple disableTouchRipple>
			<Box className={isTabActive ? classes.activeTabBtn : classes.tabBtn}>
				<Typography variant="subtitle1">{label}</Typography>
			</Box>
		</ButtonBase>
	);
};

TabButton.propTypes = {
	isTabActive: PropTypes.bool,
	handleTabChange: PropTypes.func,
	label: PropTypes.string,
	index: PropTypes.number,
};
