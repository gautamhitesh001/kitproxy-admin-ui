import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	input: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"&:hover fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"& .Mui-disabled": {
				"-webkit-text-fill-color": "#898F98 !important",
			},
		},
	},
}));

export const ConfigInput = (props) => {
	const classes = useStyles();

	return <TextField classes={{ root: classes.input }} {...props} />;
};
