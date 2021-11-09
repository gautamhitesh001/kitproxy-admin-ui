import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { DashboardSidebar } from "./sidebar";
import { DashboardAppbar } from "./topbar";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		minHeight: "100vh",
		backgroundColor: "#F5F6F8",
		overflow: "auto",
		display: "flex",
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
		padding: 32,
	},
	childWrapper: {
		display: "flex",
		flexDirection: "column",
		minHeight: `calc(100% - 80px) !important`,
	},
}));

export const DashboardLayout = ({ children }) => {
	const [open, setOpen] = useState(false);

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
				<Box className={classes.childWrapper}>{children}</Box>
			</Box>
		</Box>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.node,
};
