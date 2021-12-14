import { Button, ButtonBase, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	activeBtn: () => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 55,
		borderRadius: "4px !important",
	}),
}));

export const ConfigSaveButton = (props) => {
	const { btnText } = props;
	const classes = useStyles();

	const getBtnProps = () => {
		let tempProps = { ...props };

		if (tempProps.btnText) {
			delete tempProps.btnText;
		}

		return { ...tempProps };
	};

	return (
		<Button classes={{ root: classes.activeBtn }} {...getBtnProps()}>
			{btnText}
		</Button>
	);
};

ConfigSaveButton.propTypes = {
	btnText: PropTypes.string,
};
