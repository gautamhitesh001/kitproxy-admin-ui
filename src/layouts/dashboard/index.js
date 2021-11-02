import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { Inbox, Mail } from "react-feather";
import { ui_kitsuneLogoMain } from "../../config/Constants";

const drawerWidth = 250;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: 80,
});

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
		marginLeft: open ? drawerWidth : 80,
		width: open ? `calc(100% - ${drawerWidth}px) !important` : "calc(100% - 80px) !important",
	}),
	sideBar: ({ open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	}),
	contentWrapper: {
		flexGrow: 1,
		padding: 32,
	},
	childWrapper: {
		display: "flex",
		flexDirection: "column",
		minHeight: "calc(100% - 80px) !important",
	},
}));

export const DashboardLayout = ({ children }) => {
	const [open, setOpen] = useState(false);

	const classes = useStyles({ open });

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box className={classes.layoutContainer}>
			<AppBar classes={{ root: classes.appBar }} elevation={1}>
				<Toolbar>
					<h4>Toolbar Header</h4>
				</Toolbar>
			</AppBar>
			<Drawer classes={{ root: classes.sideBar }} variant="permanent" open={open}>
				<Toolbar />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
							{/* <ListItemText primary={text} /> */}
						</ListItem>
					))}
				</List>
			</Drawer>
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
