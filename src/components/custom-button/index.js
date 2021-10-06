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
	const classes = useStyles(props);
	const { children } = props;

	return (
		<Button className={classes.btn} {...props}>
			{children}
		</Button>
	);
};

CustomButton.propTypes = {
	children: PropTypes.node,
};
