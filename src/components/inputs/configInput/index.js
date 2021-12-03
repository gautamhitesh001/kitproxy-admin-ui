import { ButtonBase, Stack, TextField, Typography } from "@mui/material";
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

export const ConfigInput = (props) => {
	const { inputLabel, inputWidth } = props;
	const classes = useStyles({ inputWidth });

	return (
		<Stack maxWidth={!inputWidth ? "65%" : inputWidth + "px"} direction="column">
			<Typography marginBottom="4px" variant="subtitle1" color="secondary.60">
				{inputLabel}
			</Typography>
			<TextField {...props} />
		</Stack>
	);
};

ConfigInput.propTypes = {
	inputLabel: PropTypes.string,
	inputWidth: PropTypes.number,
};
