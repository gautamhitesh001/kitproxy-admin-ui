import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { DashboardWelcomeNotification } from "../../components/notifications";
import { NetworkLostOverlay } from "../../components/overlays/networkLost";
import { DashboardSidebar } from "./sidebar";
import { DashboardAppbar } from "./topbar";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		minHeight: "100vh",
		backgroundColor: "#F5F6F8",
		overflow: "auto",
		display: "flex",
		position: "relative",
	},
	appBar: ({ open }) => ({
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		zIndex: theme.zIndex.drawer + 2 + " !important",
	}),
	toolbar: {
		paddingLeft: "48px !important",
		paddingRight: "32px !important",
		"& img": {
			marginLeft: 32,
		},
	},
	contentWrapper: {
		flexGrow: 1,
		position: "relative",
	},
	childWrapper: {
		display: "flex",
		flexDirection: "column",
		minHeight: "calc(100% - 80px) !important",
		padding: 32,
		position: "relative",
	},
}));

export const DashboardLayout = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [hasNetworkIssue, setHasNetworkIssue] = useState(false);
	const [showWelcomeNotification, setShowWelcomeNotification] = useState(true);

	const classes = useStyles({ open });

	const toggleSidebar = () => {
		setOpen(!open);
	};

	return (
		<Box className={classes.layoutContainer}>
			<DashboardAppbar toggleSidebar={toggleSidebar} />
			<DashboardSidebar open={open} />
			<Box component="main" className={classes.contentWrapper}>
				<Toolbar />
				{
					showWelcomeNotification ?
						<DashboardWelcomeNotification handleClose={() => setShowWelcomeNotification(false)} /> : null
				}
				<Box className={classes.childWrapper}>{children}</Box>
				{hasNetworkIssue ? <NetworkLostOverlay /> : null}
			</Box>
		</Box>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.node,
};
