import { Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Popover, Toolbar, Typography } from "@mui/material";
import { DollarSign, Inbox, Layers, Mail, Settings, Sliders, Tool, TrendingUp, Users } from "react-feather";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

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
	list: {
		flexGrow: 1,
		padding: "48px 15px 32px 15px  !important",
		display: "flex",
		flexDirection: "column",
	},
	listItem: {
		borderRadius: "8px !important",
		marginBottom: "10px  !important",
		justfyContent: "center !important",
		backgroundColor: "transparent !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
	activeListItem: {
		borderRadius: "8px !important",
		marginBottom: "10px  !important",
		justfyContent: "center !important",
		backgroundColor: theme.palette.grey["10"] + " !important",
		"&:hover": {
			backgroundColor: theme.palette.grey["10"] + " !important",
		},
	},
	menuIcon: ({ isActive }) => ({
		minWidth: "0 !important",
		"& svg": {
			color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
			width: 20,
			height: 20,
		},
	}),
	listItemText: ({ isActive }) => ({
		marginLeft: "20px",
		color: isActive ? theme.palette.primary.main : theme.palette.secondary["80"],
	}),
	divider: {
		marginTop: "auto !important",
	},
	lastItem: {
		marginTop: "24px !important",
	},
	popover: {
		background: "rgba(255, 255, 255, 0.95) !important",
		border: "1px solid #EDEDED !important",
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05) !important",
		marginLeft: "75px !important",
		padding: "16px 20px !important",
		borderRadius: "10px !important",
	},
}));

const sidebarMenuItems = [
	{ title: "Analytics", icon: <TrendingUp /> },
	{ title: "Configurations", icon: <Tool /> },
	{ title: "Customization", icon: <Sliders /> },
	{ title: "User management", icon: <Users /> },
	{ title: "Billing", icon: <DollarSign /> },
	{ title: "Audit Log", icon: <Layers /> },
];

const SideBarMenuItem = ({ isActive, open, icon, title, isLastItem, setActiveKey }) => {
	const classes = useStyles({ isActive });
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			<ListItem
				key={title}
				disableTouchRipple
				disableRipple
				className={isLastItem ? classes.lastItem : ""}
				classes={{ root: isActive ? classes.activeListItem : classes.listItem }}
				button
				onClick={() => setActiveKey(title)}
				onMouseEnter={handlePopoverOpen}
				onMouseLeave={handlePopoverClose}
			>
				<ListItemIcon className={classes.menuIcon}>{icon}</ListItemIcon>
				{open ? (
					<ListItemText className={classes.listItemText}>
						<Typography variant="subtitle2">{title}</Typography>
					</ListItemText>
				) : null}
			</ListItem>
			<Popover
				id="mouse-over-popover"
				sx={{
					pointerEvents: "none",
				}}
				classes={{ paper: classes.popover }}
				open={!open && Boolean(anchorEl)}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "center",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "center",
					horizontal: "right",
				}}
				onClose={handlePopoverClose}
				disableRestoreFocus
			>
				<Typography variant="subtitle2" color="black.80">
					{title}
				</Typography>
			</Popover>
		</Box>
	);
};

export const DashboardSidebar = ({ open }) => {
	const classes = useStyles({ open });
	const [activeKey, setActiveKey] = useState("Analytics");

	const onMenuItemClick = (key) => {
		setActiveKey(key);
	};

	return (
		<Drawer classes={{ root: classes.sideBar }} variant="permanent" open={open}>
			<Toolbar />
			<List classes={{ root: classes.list }}>
				{sidebarMenuItems.map((item, index) => (
					<SideBarMenuItem setActiveKey={onMenuItemClick} key={item.title + index} open={open} icon={item.icon} title={item.title} isActive={item.title === activeKey} />
				))}
				<Divider className={classes.divider} variant="middle" />
				<SideBarMenuItem setActiveKey={onMenuItemClick} open={open} icon={<Settings />} title="Settings" isActive={activeKey === "Settings"} isLastItem={true} />
			</List>
		</Drawer>
	);
};

DashboardSidebar.propTypes = {
	open: PropTypes.bool,
};

SideBarMenuItem.propTypes = {
	isActive: PropTypes.bool,
	isLastItem: PropTypes.bool,
	icon: PropTypes.node,
	title: PropTypes.string,
	setActiveKey: PropTypes.func,
	open: PropTypes.bool,
};
