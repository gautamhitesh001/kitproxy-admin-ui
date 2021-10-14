import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	btn: (props) => ({
		paddingTop: "15px !important",
		paddingBottom: "15px !important",
		marginTop: props.topMargin ? props.topMargin : "32px !important",
		width: props.btnWidth ? props.btnWidth : "auto",
	}),
}));

export const CustomButton = (props) => {
	const { btnWidth, topMargin, children } = props;
	const classes = useStyles({ btnWidth, topMargin });

	const getBtnProps = () => {
		let tempProps = { ...props };
		if (tempProps.btnWidth) {
			delete tempProps.btnWidth;
		}
		if (tempProps.topMargin) {
			delete tempProps.topMargin;
		}

		return { ...tempProps };
	};

	return (
		<Button className={classes.btn} {...getBtnProps()}>
			{children}
		</Button>
	);
};

CustomButton.propTypes = {
	children: PropTypes.node,
	btnWidth: PropTypes.number,
	topMargin: PropTypes.string,
};
