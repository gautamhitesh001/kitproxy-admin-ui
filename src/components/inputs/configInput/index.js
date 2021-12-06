import { Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	input: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#E6E6E6",
			},
			"&:hover fieldset": {
				borderColor: "#E6E6E6",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#E6E6E6",
			},
		},
	},
}));

export const ConfigInput = (props) => {
	const { inputLabel, inputWidth } = props;
	const classes = useStyles({ inputWidth });

	return (
		<Stack width="100%" maxWidth={!inputWidth ? "100%" : inputWidth + "px"} direction="column">
			<Typography marginBottom="4px" variant="subtitle1" color="secondary.60">
				{inputLabel}
			</Typography>
			<TextField classes={{ root: classes.input }} {...props} />
		</Stack>
	);
};

ConfigInput.propTypes = {
	inputLabel: PropTypes.string,
	inputWidth: PropTypes.number,
};
