import { InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Search } from "react-feather";

const useStyles = makeStyles((theme) => ({
	searchWrapper: {
		position: "relative",
		borderRadius: 4,
		border: "1px solid #E6E6E6",
		backgroundColor: theme.palette.white.main,
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
	},
	iconWrapper: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#B0B5BB",
	},
	input: {
		color: "inherit",
		"& .MuiInputBase-input": {
			padding: theme.spacing(2, 2, 2, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			width: "100%",
		},
	},
}));

export const ConfigurationSidebarSearch = () => {
	const classes = useStyles();

	return (
		<Box className={classes.searchWrapper}>
			<Box className={classes.iconWrapper}>
				<Search />
			</Box>
			<InputBase classes={{ root: classes.input }} placeholder="Search in configuration" />
		</Box>
	);
};
