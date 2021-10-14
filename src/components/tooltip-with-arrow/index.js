import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	modalContainer: {
		padding: "36px !important",
	},
	topCta: {
		color: theme.palette.secondary.main,
		textAlign: "right",
	},
	arrow: {
		color: theme.palette.common.white + " !important",
		"&::before": {
			border: "1px solid #EDEDED",
		},
	},
	tooltip: ({ maximumWidth }) => ({
		background: "rgba(255, 255, 255, 0.95) !important",
		border: "1px solid #EDEDED !important",
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05)",
		padding: "24px !important",
		borderRadius: "10px !important",
		maxWidth: maximumWidth ? maximumWidth + "px !important" : "none",
	}),
}));

export const TooltipWithArrow = ({ children, placement, maximumWidth, tooltipContent }) => {
	const classes = useStyles({ maximumWidth });

	return (
		<Tooltip title={tooltipContent} arrow placement={placement} classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}>
			{children}
		</Tooltip>
	);
};

TooltipWithArrow.propTypes = {
	children: PropTypes.node,
	tooltipContent: PropTypes.node,
	maximumWidth: PropTypes.number,
	placement: PropTypes.string,
};
