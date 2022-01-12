import { Dialog, DialogContent, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { X } from "react-feather";

const useStyles = makeStyles((theme) => ({
	modalContainer: {
		padding: "36px !important",
	},
	topCta: {
		color: theme.palette.secondary.main,
	},
	crossBtn: {
		marginLeft: "32px !important",
		padding: "0 !important",
		"&:hover": {
			backgroundColor: "none !important",
		},
	},
	childWrapper: {
		maxHeight: 600,
		overflowY: "auto",
	},
}));

export const ConfigurationModal = ({ open, handleClose, title, children }) => {
	const classes = useStyles();

	return (
		<Dialog open={open} onClose={handleClose} scroll="paper" fullWidth={true} maxWidth="lg">
			<DialogContent classes={{ root: classes.modalContainer }}>
				<Stack direction="column" spacing={0}>
					<Stack direction="row" alignItems="center" className={classes.topCta}>
						<Typography variant="h5" color="secondary.90" flexGrow={1}>
							{title}
						</Typography>
						<IconButton disableRipple onClick={handleClose} classes={{ root: classes.crossBtn }}>
							<X size={20} />
						</IconButton>
					</Stack>
					<Box className={classes.childWrapper}>{children}</Box>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

ConfigurationModal.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	title: PropTypes.string,
};
