import { ButtonBase, Stack, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { RotateCw } from "react-feather";
import { ui_networkError } from "../../../config/Constants";

const useStyles = makeStyles((theme) => ({
	overlayWrapper: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		background: "rgba(157, 160, 170, 0.3)",
		backdropFilter: "blur(5px)",
	},
	contentWrapper: {
		minHeight: "calc(100% - 80px) !important",
	},
	refreshBtn: {
		color: theme.palette.common.white + " !important",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "12px 24px !important",
		width: 150,
		backgroundColor: theme.palette.secondary["90"] + " !important",
		borderRadius: "4px !important",
		marginTop: "24px !important",
	},
}));

export const NetworkLostOverlay = () => {
	const classes = useStyles();

	const handleRefresh = () => {
		window.location.reload();
	};

	return (
		<Box className={classes.overlayWrapper}>
			<Toolbar />
			<Stack className={classes.contentWrapper} direction="row" justifyContent="center" alignItems="center">
				<Stack maxWidth={500} direction="column" alignItems="center">
					<img src={ui_networkError} alt="network error" />
					<Typography mt={3} variant="h4" color="secondary.main" fontWeight={700}>
						Network Lost
					</Typography>
					<Typography textAlign="center" variant="h6" color="secondary.main" mt={2}>
						Something went wrong. Please check your network and refresh the page.
					</Typography>
					<ButtonBase disableRipple disableTouchRipple className={classes.refreshBtn} onClick={handleRefresh}>
						<RotateCw />
						<Typography sx={{ textTransform: "none" }} variant="button" ml={1}>
							Refresh
						</Typography>
					</ButtonBase>
				</Stack>
			</Stack>
		</Box>
	);
};
