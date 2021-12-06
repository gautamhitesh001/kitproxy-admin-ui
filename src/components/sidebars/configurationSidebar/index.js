import { ButtonBase, Collapse, Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { icon_play_right } from "../../../config/Constants";
import { ConfigurationSidebarSearch } from "../../search";
import ConfigSecurityMenu from "../../../config/menu/configurationSiderbarMenu.json";

const useStyles = makeStyles((theme) => ({
	configListWrapper: {
		marginTop: 12,
		borderRadius: 8,
		backgroundColor: theme.palette.white.main,
		padding: "24px 24px 0 24px",
		maxHeight: "calc(100vh - 300px)",
		overflowY: "auto",
	},
	menuItemBtn: {
		justifyContent: "flex-start !important",
	},
	anchorTag: {
		color: theme.palette.secondary["90"] + " !important",
		textDecoration: "none !important",
	},
	hideIcon: {
		transform: "rotate(0deg)",
	},
	expandIcon: {
		transform: "rotate(90deg)",
	},
}));

export const ConfigurationSidebar = () => {
	const classes = useStyles();

	const [configMenuList, setConfigMenuList] = useState([]);

	useEffect(() => {
		setConfigMenuList(ConfigSecurityMenu);
	}, []);

	const toggleExpandMenuItem = (index) => {
		let tempMenuList = [...configMenuList];
		tempMenuList[index].isExpanded = !tempMenuList[index].isExpanded;
		setConfigMenuList(tempMenuList);
	};

	return (
		<div>
			<ConfigurationSidebarSearch />
			<Stack direction="column" spacing={3} className={classes.configListWrapper}>
				{configMenuList.map((val, index) => (
					<div key={val.name + index}>
						<ButtonBase classes={{ root: classes.menuItemBtn }} disableRipple disableTouchRipple onClick={() => toggleExpandMenuItem(index)}>
							<Stack direction="row" alignItems="center">
								<Typography textAlign="left" fontWeight={700} color="secondary.90" marginRight="4px">
									{val.name}
								</Typography>
								<img className={val.isExpanded ? classes.expandIcon : classes.hideIcon} src={icon_play_right} alt="arrow-icon" />
							</Stack>
						</ButtonBase>
						<Box my={3}>
							<Collapse in={val.isExpanded} timeout="auto" unmountOnExit>
								<Stack direction="column" spacing={3}>
									{val.submenu.map((value, index) => (
										<a className={classes.anchorTag} key={value.href + index} href={"#" + value.href}>
											<Typography variant="subtitle1">{value.name}</Typography>
										</a>
									))}
								</Stack>
							</Collapse>
						</Box>
						{index < configMenuList.length - 1 ? <Divider /> : null}
					</div>
				))}
			</Stack>
		</div>
	);
};
