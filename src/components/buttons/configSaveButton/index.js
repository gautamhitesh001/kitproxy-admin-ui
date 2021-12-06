import { Button, ButtonBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	disabledBtn: ({ isActive }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 60,
		backgroundColor: "#F4F4F4 !important",
		border: "1px solid #E6E6E6 !important",
		color: theme.palette.secondary["50"] + " !important",
		borderRadius: "4px !important",
	}),
	activeBtn: ({ isActive }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 60,
		backgroundColor: "#5797EC !important",
		border: "1px solid #E6E6E6 !important",
		color: theme.palette.common.white + " !important",
		borderRadius: "4px !important",
	}),
}));

export const ConfigSaveButton = (props) => {
	const { isActive, btnText } = props;
	const classes = useStyles({ isActive });

	const getBtnProps = () => {
		let tempProps = { ...props };
		if (tempProps.isActive) {
			delete tempProps.isActive;
		}
		if (tempProps.btnText) {
			delete tempProps.btnText;
		}

		return { ...tempProps };
	};

	return (
		<ButtonBase disableTouchRipple disableRipple {...getBtnProps()} classes={{ root: isActive ? classes.activeBtn : classes.disabledBtn, disabled: classes.disabledBtn }}>
			<Typography variant="body1">{btnText}</Typography>
		</ButtonBase>
	);
};

ConfigSaveButton.propTypes = {
	btnText: PropTypes.string,
	isActive: PropTypes.bool,
};
