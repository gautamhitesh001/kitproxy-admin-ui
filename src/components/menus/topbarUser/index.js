import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	menu: {
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05) !important",
		border: "1px solid #EDEDED !important",
		borderRadius: "10px !important ",
		marginTop: 30,
		color: theme.palette.black["80"] + " !important",
	},
	list: {
		minWidth: 180,
	},
	listItem: {
		paddingLeft: "10px !important",
		paddingRight: "10px !important",
		borderRadius: "8px !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
	checkIcon: {
		marginLeft: "auto",
		color: "#3A4554",
	},
}));

export const TopbarUserMenu = ({ menuAnchor, open, handleClose, menuItems }) => {
	const classes = useStyles();

	return (
		<Menu id="projectMenu" anchorEl={menuAnchor} open={open} onClose={handleClose} classes={{ paper: classes.menu, list: classes.list }}>
			{menuItems.map((option, index) => (
				<>
					<MenuItem classes={{ root: classes.listItem }} key={option.title + index} onClick={handleClose}>
						<Typography variant="small1" color="black.80" ml={2}>
							{option.title}
						</Typography>
					</MenuItem>
					{index < menuItems.length - 1 ? <Divider variant="middle" /> : null}
				</>
			))}
		</Menu>
	);
};

TopbarUserMenu.propTypes = {
	menuAnchor: PropTypes.any,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	menuItems: PropTypes.array,
};
