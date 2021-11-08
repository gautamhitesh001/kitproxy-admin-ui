import { Drawer, List, ListItem, ListItemIcon, Toolbar } from "@mui/material";
import { Inbox, Mail } from "react-feather";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const drawerMaxWidth = 250;
const drawerMinWidth = 88;

const openedMixin = (theme) => ({
	width: drawerMaxWidth,
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
	width: drawerMinWidth,
});

const useStyles = makeStyles((theme) => ({
	sideBar: ({ open }) => ({
		width: drawerMaxWidth,
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
}));

export const DashboardSidebar = ({ open }) => {
	const classes = useStyles({ open });
	return (
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
	);
};

DashboardSidebar.propTypes = {
	open: PropTypes.bool,
};
