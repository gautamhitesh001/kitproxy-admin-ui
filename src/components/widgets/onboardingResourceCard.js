import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	resourceStack: ({ isSelected }) => ({
		width: "100%",
		border: isSelected ? "1px solid #F4672A" : "1px solid #CACCCF",
		borderRadius: 8,
		minHeight: 128,
		paddingLeft: 56,
		boxShadow: isSelected ? "0px 9px 17px rgba(244, 103, 42, 0.11)" : "none",
		marginBottom: 24,
	}),
	resourceWrapper: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	textWrapper: {
		width: "33%",
		[theme.breakpoints.down("lg")]: {
			width: "40%",
		},
	},
	extraWrapper: {
		display: "flex",
		justifyContent: "flex-end",
	},
}));

export const OnboardingResourceCard = ({ topMargin, text, cta, isSelected, handleClick, extraComponent }) => {
	const classes = useStyles({ isSelected });

	return (
		<Stack spacing={0} className={classes.resourceStack}>
			<Box mt={topMargin} className={classes.resourceWrapper} onClick={() => handleClick()}>
				<Box className={classes.textWrapper}>
					<Typography variant="subtitle2" color="secondary.70">
						{text}
					</Typography>
				</Box>
				{cta}
			</Box>
			{extraComponent ? <Box className={classes.extraWrapper}>{extraComponent}</Box> : null}
		</Stack>
	);
};

OnboardingResourceCard.propTypes = {
	topMargin: PropTypes.number,
	text: PropTypes.string,
	cta: PropTypes.node,
	isSelected: PropTypes.bool,
	handleClick: PropTypes.func,
	extraComponent: PropTypes.node,
};
