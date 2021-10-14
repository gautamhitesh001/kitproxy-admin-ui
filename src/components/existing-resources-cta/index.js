import { ButtonBase, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { TooltipWithArrow } from "../tooltip-with-arrow";

const useStyles = makeStyles((theme) => ({
	existingResourceWrapper: {
		marginRight: 32,
		backgroundColor: "#f4f4f4 !important",
		borderRadius: 4,
	},
	existingResourceCTA: {
		width: 110,
		height: 70,
		"&:nth-child(2)": {
			borderRight: "1px solid #E8E8E8",
			borderLeft: "1px solid #E8E8E8",
		},
		"&:hover, &:focus": {
			border: "1px solid #F4672A",
			boxShadow: "0px 4px 16px rgba(244, 103, 42, 0.1)",
			backgroundColor: "#F9F9FA",
			borderRadius: "4px !important",
		},
		"& img": {
			margin: "auto",
		},
	},
}));

export const ExistingResourcesCTA = ({ isActive, ctaArray, handleAwsLogin }) => {
	const classes = useStyles();

	const handleCtaClick = (key) => {
		if (key === "aws") {
			handleAwsLogin();
		}
	};

	return (
		<Box className={classes.existingResourceWrapper}>
			{ctaArray.map((value, index) => {
				if (value.hasTooltip) {
					return (
						<TooltipWithArrow
							key={value.key + index}
							tooltipContent={
								<Typography variant="body2" color="black.80">
									{value.tooltipText}
								</Typography>
							}
							placement="bottom-start"
							maximumWidth={450}
						>
							<ButtonBase onClick={() => handleCtaClick(value.key)} disabled={!isActive} disableRipple className={classes.existingResourceCTA}>
								<img src={value.icon} />
							</ButtonBase>
						</TooltipWithArrow>
					);
				}
				return (
					<ButtonBase key={value.key + index} disabled={!isActive} disableRipple className={classes.existingResourceCTA}>
						<img src={value.icon} />
					</ButtonBase>
				);
			})}
		</Box>
	);
};

ExistingResourcesCTA.propTypes = {
	isActive: PropTypes.bool,
	ctaArray: PropTypes.array,
	handleAwsLogin: PropTypes.func,
};
