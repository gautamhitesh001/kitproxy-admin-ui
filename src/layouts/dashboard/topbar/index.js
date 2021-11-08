import { AppBar, ButtonBase, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDown, Menu as FeatherIconMenu } from "react-feather";
import { ui_kitsuneLogoMain, ui_sampleCompanyLogo } from "../../../config/Constants";

const useStyles = makeStyles((theme) => ({
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
	},
	logoImg: {
		marginLeft: 32,
	},
	projectTile: {
		padding: "10px 20px !important",
		backgroundColor: theme.palette.grey["10"] + " !important",
		borderRadius: "8px !important ",
		minWidth: 250,
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
}));

const options = ["Show some love to MUI", "Show all notification content", "Hide sensitive notification content", "Hide all notification content"];

export const DashboardAppbar = ({ toggleSidebar }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index, option) => {
		setSelectedIndex(index);
		setAnchorEl(null);
		console.log(option);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar classes={{ root: classes.appBar }} elevation={1}>
			<Toolbar classes={{ root: classes.toolbar }}>
				<IconButton disableRipple onClick={toggleSidebar}>
					<FeatherIconMenu size={18} />
				</IconButton>
				<img className={classes.logoImg} width={128} height="auto" src={ui_kitsuneLogoMain} alt="logo" />
				<Box ml={8}>
					<ButtonBase disableRipple disableTouchRipple classes={{ root: classes.projectTile }} onClick={handleClick}>
						<img width={38} height="auto" src={ui_sampleCompanyLogo} alt="logo" />
						<Typography variant="subtitle2" color="black.80" ml={2}>
							Care Insurance
						</Typography>
						<ChevronDown className={classes.dropdownIcon} />
					</ButtonBase>
					<Menu id="projectMenu" anchorEl={anchorEl} open={open} onClose={handleClose} classes={{ paper: classes.projectTileMenu }}>
						{options.map((option, index) => (
							<MenuItem key={option} onClick={(event) => handleMenuItemClick(event, index, option)}>
								{option}
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

DashboardAppbar.propTypes = {
	toggleSidebar: PropTypes.func,
};
