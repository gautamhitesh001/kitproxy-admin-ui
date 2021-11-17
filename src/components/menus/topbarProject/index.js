import { Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Check } from "react-feather";

const useStyles = makeStyles((theme) => ({
	menu: {
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05) !important",
		border: "1px solid #EDEDED !important",
		borderRadius: "10px !important ",
		marginTop: 4,
		color: theme.palette.black["80"] + " !important",
	},
	list: {
		minWidth: 250,
		paddingLeft: "12px !important",
		paddingRight: "12px !important",
	},
	listItem: {
		paddingLeft: "10px !important",
		paddingRight: "10px !important",
		paddingTop: "10px !important",
		paddingBottom: "10px !important",
		borderRadius: "8px !important",
		marginBottom: "4px !important",
		"&:hover": {
			backgroundColor: "rgba(196, 196, 196, 0.1) !important",
		},
	},
	checkIcon: {
		marginLeft: "auto",
		color: "#3A4554",
	},
}));

export const TopbarProjectMenu = ({ menuAnchor, open, handleClose, handleProjectMenuItemClick, menuItems, activekey }) => {
	const classes = useStyles();

	return (
		<Menu id="projectMenu" anchorEl={menuAnchor} open={open} onClose={handleClose} classes={{ paper: classes.menu, list: classes.list }}>
			{menuItems.map((option, index) => (
				<MenuItem classes={{ root: classes.listItem }} key={option.title + index} onClick={() => handleProjectMenuItemClick(option)}>
					{option.icon}
					<Typography variant="subtitle2" color="black.80" ml={2}>
						{option.title}
					</Typography>
					{option.key === activekey ? <Check size={20} className={classes.checkIcon} /> : null}
				</MenuItem>
			))}
		</Menu>
	);
};

TopbarProjectMenu.propTypes = {
	menuAnchor: PropTypes.any,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	handleProjectMenuItemClick: PropTypes.func,
	menuItems: PropTypes.array,
	activekey: PropTypes.number,
};
