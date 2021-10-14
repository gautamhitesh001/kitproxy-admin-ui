import { Dialog, DialogContent, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { AlertCircle, X } from "react-feather";
import { TooltipWithArrow } from "../tooltip-with-arrow";

const useStyles = makeStyles((theme) => ({
	modalContainer: {
		padding: "36px !important",
	},
	topCta: {
		color: theme.palette.secondary.main,
		display: "flex",
		alignItems: "center",
		justifyContent: "right",
	},
	crossBtn: {
		marginLeft: "32px !important",
		padding: "0 !important",
		"&:hover": {
			backgroundColor: "none !important",
		},
	},
}));

export const AccessKeyModal = ({ open, handleClose, tooltipInfo, logo, children }) => {
	const classes = useStyles();

	return (
		<Dialog open={open} onClose={handleClose} scroll="paper" fullWidth={true} maxWidth="xs">
			<DialogContent classes={{ root: classes.modalContainer }}>
				<Stack spacing={0}>
					<Box className={classes.topCta}>
						<TooltipWithArrow
							tooltipContent={
								<Typography variant="body2" color="black.80">
									{tooltipInfo}
								</Typography>
							}
							placement="bottom-start"
						>
							<AlertCircle size={20} />
						</TooltipWithArrow>
						<IconButton disableRipple onClick={handleClose} classes={{ root: classes.crossBtn }}>
							<X size={20} />
						</IconButton>
					</Box>
					<Box display="flex" justifyContent="center" mt={4}>
						<img src={logo} alt="resource logo" />
					</Box>
					<Box>{children}</Box>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

AccessKeyModal.propTypes = {
	children: PropTypes.node,
	logo: PropTypes.node,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	tooltipInfo: PropTypes.string,
};
