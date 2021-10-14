import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	resourceWrapper: ({ isSelected }) => ({
		width: "100%",
		border: isSelected ? "1px solid #F4672A" : "1px solid #CACCCF",
		borderRadius: 8,
		height: 128,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 56,
		boxShadow: isSelected ? "0px 9px 17px rgba(244, 103, 42, 0.11)" : "none",
	}),
	textWrapper: {
		width: "33%",
		[theme.breakpoints.down("lg")]: {
			width: "40%",
		},
	},
}));

export const OnboardingResourceCard = ({ topMargin, text, cta, isSelected, handleClick }) => {
	const classes = useStyles({ isSelected });

	return (
		<Box mt={topMargin} className={classes.resourceWrapper} onClick={() => handleClick()}>
			<Box className={classes.textWrapper}>
				<Typography variant="subtitle2" color="secondary.70">
					{text}
				</Typography>
			</Box>
			{cta}
		</Box>
	);
};

OnboardingResourceCard.propTypes = {
	topMargin: PropTypes.number,
	text: PropTypes.string,
	cta: PropTypes.node,
	isSelected: PropTypes.bool,
	handleClick: PropTypes.func,
};
