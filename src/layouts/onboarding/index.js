import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
import { MoreVertical } from "react-feather";
import { ui_kitsuneLogoMain } from "../../config/Constants";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		width: "100vw",
		minHeight: "100vh",
		backgroundColor: theme.palette.common.white,
		overflow: "auto",
	},
	toolBar: {
		minHeight: "80px !important",
		paddingLeft: "40px !important",
		paddingRight: "40px !important",
	},
	websiteWrapper: {
		minWidth: 400,
		height: 48,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F9F9FA",
		flex: 1,
	},
	btnElipsesMenu: {
		width: 40,
		height: 40,
		borderRadius: 20,
		border: "1px solid #D8DADD !important",
		marginLeft: "auto !important",
	},
	menuContainer: {
		width: 150,
		boxShadow: "8px 13px 22px rgba(0, 0, 0, 0.05) !important",
		marginTop: "8px !important",
		backgroundColor: "#FFFFFF !important",
		borderRadius: "10px !important",
	},
	contentWrapper: {
		paddingTop: 100,
		paddingBottom: 64,
		paddingLeft: 40,
		paddingRight: 40,
		display: "flex",
		justifyContent: "center",
		minHeight: "100vh",
	},
	childWrapper: {
		maxWidth: 900,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		flexGrow: 1,
	},
}));

export const OnboardingLayout = ({ children, showWebsite, website }) => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const showMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const hideMenu = () => {
		setAnchorEl(null);
	};
	return (
		<Box className={classes.layoutContainer}>
			<AppBar elevation={0}>
				<Toolbar classes={{ root: classes.toolBar }}>
					<Box flex={1}>
						<img src={ui_kitsuneLogoMain} alt="logo" />
					</Box>
					{showWebsite ? (
						<Box className={classes.websiteWrapper}>
							<Typography textAlign="center" variant="subtitle1" color="secondary.main">
								{website}
							</Typography>
						</Box>
					) : null}
					<Box flex={1} display="flex">
						<IconButton onClick={showMenu} classes={{ root: classes.btnElipsesMenu }}>
							<MoreVertical />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={hideMenu}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							classes={{ paper: classes.menuContainer }}
						>
							<MenuItem onClick={hideMenu}>
								<Typography variant="body2" color="black.80">
									Minimize
								</Typography>
							</MenuItem>
							<MenuItem onClick={hideMenu}>
								<Typography variant="body2" color="black.80">
									Exit
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Box className={classes.contentWrapper}>
				<Box className={classes.childWrapper}>{children}</Box>
			</Box>
		</Box>
	);
};

OnboardingLayout.propTypes = {
	children: PropTypes.node,
	showWebsite: PropTypes.bool,
	website: PropTypes.string,
};
