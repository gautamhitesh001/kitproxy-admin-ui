import { CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	progress: {
		transform: "rotate(0deg) !important",
	},
}));

export const CircularProgressWithLabel = ({ size, value }) => {
	const classes = useStyles();

	return (
		<Box position="relative" display="inline-flex">
			<CircularProgress classes={{ root: classes.progress }} variant="determinate" size={size} value={value} />
			<Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
				<Typography variant="subtitle1" component="div" color="primary.main">
					{value}
					<Typography variant="small3">%</Typography>
				</Typography>
			</Box>
		</Box>
	);
};

CircularProgressWithLabel.propTypes = {
	size: PropTypes.number,
	value: PropTypes.number,
};
