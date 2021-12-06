import { AppBar, Avatar, Badge, ButtonBase, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { Bell, ChevronDown, Menu as FeatherIconMenu, Search } from "react-feather";
import { TopbarProjectMenu } from "../../../components/menus/topbarProject";
import { TopbarUserMenu } from "../../../components/menus/topbarUser";
import { ui_kitsuneLogoMain, ui_sampleCompanyLogo } from "../../../config/Constants";
import topbarUserMenu from "../../../config/menu/topbarUserMenu.json";

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		zIndex: theme.zIndex.drawer + 2 + " !important",
	},
	toolbar: {
		paddingLeft: "36px !important",
		paddingRight: "32px !important",
	},
	menuToggle: {
		padding: "0 !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
	logoImg: {
		marginLeft: 32,
	},
	projectTile: {
		padding: "10px 20px !important",
		backgroundColor: theme.palette.grey["10"] + " !important",
		borderRadius: "8px !important ",
		minWidth: 250,
		justifyContent: "normal !important",
	},
	projectTileDropdownIcon: {
		marginLeft: "auto",
		color: "#3A4554",
	},
	projectTileMenu: {
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05) !important",
		border: "1px solid #EDEDED !important",
		borderRadius: "10px !important ",
		marginTop: 4,
		color: theme.palette.black["80"] + " !important",
	},
	ctaWrapper: {
		display: "flex",
		alignItems: "center",
	},
	badge: {
		minWidth: "4px !important",
		height: "4px !important",
	},
	divider: {
		borderColor: "#D6D6D6 !important",
		marginTop: "auto !important",
		marginBottom: "auto !important",
		height: "50px !important",
		marginLeft: "24px !important",
		marginRight: "24px !important",
	},
	userDetails: {
		display: "flex",
		alignItems: "center",
	},
	userAvatar: {
		width: "32px !important",
		height: "32px !important",
	},
}));

const createProjectMenu = (key, icon, title) => {
	return { key, icon, title };
};

const createUserMenu = (key, title) => {
	return { key, title };
};

export const DashboardAppbar = ({ toggleSidebar }) => {
	const classes = useStyles();
	const projectMenuItems = [
		createProjectMenu(1, <img width={40} height="auto" src={ui_sampleCompanyLogo} alt="logo" />, "Care Insurance"),
		createProjectMenu(2, <Avatar>AC</Avatar>, "Accentiv"),
		createProjectMenu(3, <Avatar>BG</Avatar>, "Birla Group"),
	];

	const userMenuItems = topbarUserMenu;

	const [projectMenuAnchor, setProjectMenuAnchor] = useState(null);
	const [userMenuAnchor, setUserMenuAnchor] = useState(null);
	const [activeProjectItem, setActiveProjectItem] = useState(projectMenuItems[0]);

	const showProjectSelectMenu = (event) => {
		setProjectMenuAnchor(event.currentTarget);
	};

	const hideProjectSelectMenu = () => {
		setProjectMenuAnchor(null);
	};

	const handleProjectMenuItemClick = (option) => {
		setActiveProjectItem(option);
		setProjectMenuAnchor(null);
	};

	const showUserMenu = (event) => {
		setUserMenuAnchor(event.currentTarget);
	};

	const hideUserMenu = () => {
		setUserMenuAnchor(null);
	};

	return (
		<AppBar classes={{ root: classes.appBar }} elevation={1}>
			<Toolbar classes={{ root: classes.toolbar }}>
				<IconButton classes={{ root: classes.menuToggle }} disableFocusRipple disableTouchRipple disableRipple onClick={toggleSidebar}>
					<FeatherIconMenu size={20} />
				</IconButton>
				<img className={classes.logoImg} width={128} height="auto" src={ui_kitsuneLogoMain} alt="logo" />
				<Box ml={8}>
					<ButtonBase disableRipple disableTouchRipple classes={{ root: classes.projectTile }} onClick={showProjectSelectMenu}>
						{activeProjectItem.icon}
						<Typography variant="subtitle2" color="black.80" ml={2}>
							{activeProjectItem.title}
						</Typography>
						<ChevronDown className={classes.projectTileDropdownIcon} />
					</ButtonBase>
					<TopbarProjectMenu
						menuAnchor={projectMenuAnchor}
						open={Boolean(projectMenuAnchor)}
						handleProjectMenuItemClick={handleProjectMenuItemClick}
						handleClose={hideProjectSelectMenu}
						menuItems={projectMenuItems}
						activekey={activeProjectItem.key}
					/>
				</Box>
				<Box className={classes.ctaWrapper} marginLeft="auto">
					<Search size={20} />
					<Box mr={5} />
					<Badge classes={{ badge: classes.badge }} color="badge" overlap="circular" badgeContent=" " variant="dot">
						<Bell size={20} />
					</Badge>
				</Box>
				<Divider classes={{ root: classes.divider }} orientation="vertical" variant="middle" flexItem />
				<Box>
					<ButtonBase disableRipple disableTouchRipple classes={{ root: classes.userTile }} onClick={showUserMenu}>
						<Avatar className={classes.userAvatar} />
						<Box display="flex" flexDirection="column" alignItems="flex-start" mr={2} ml={2}>
							<Typography variant="small2" color="common.black">
								John Smith
							</Typography>
							<Typography variant="small1" color="black.80">
								(Admin)
							</Typography>
						</Box>
						<ChevronDown className={classes.projectTileDropdownIcon} />
					</ButtonBase>
					<TopbarUserMenu menuAnchor={userMenuAnchor} open={Boolean(userMenuAnchor)} handleClose={hideUserMenu} menuItems={userMenuItems} />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

DashboardAppbar.propTypes = {
	toggleSidebar: PropTypes.func,
};
