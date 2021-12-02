import { ButtonBase, Collapse, Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { icon_play_down, icon_play_right } from "../../../config/Constants";
import { ConfigurationSidebarSearch } from "../../search";

const useStyles = makeStyles((theme) => ({
	configListWrapper: {
		marginTop: 12,
		borderRadius: 8,
		backgroundColor: theme.palette.white.main,
		padding: "24px 24px 0 24px",
		maxHeight: "calc(100vh - 245px)",
		overflowY: "auto",
	},
	menuItemBtn: {
		justifyContent: "flex-start !important",
	},
	anchorTag: {
		color: theme.palette.secondary["90"] + " !important",
		textDecoration: "none !important",
	},
}));

const createMenuItemList = (name, submenu, isExpanded) => {
	return { name, submenu, isExpanded };
};

const createSubMenuItemList = (name, href) => {
	return { name, href };
};

const expandMenuItem = () => {};

export const ConfigurationSidebar = () => {
	const classes = useStyles();

	const [configMenuList, setConfigMenuList] = useState([]);

	useEffect(() => {
		setConfigMenuList([
			createMenuItemList(
				"Web Application Firewall(WAF)",
				[
					createSubMenuItemList("Firewall Rules", "firewallRules"),
					createSubMenuItemList("Rate Limiting", "firewallRules"),
					createSubMenuItemList("Onion Routing", "firewallRules"),
					createSubMenuItemList("IPv4 header request handling", "firewallRules"),
					createSubMenuItemList("True Client IP Header", "firewallRules"),
					createSubMenuItemList("Email address obfuscation", "firewallRules"),
					createSubMenuItemList("DDoS", "firewallRules"),
					createSubMenuItemList("User Agent Blocking", "firewallRules"),
					createSubMenuItemList("DDoS", "firewallRules"),
					createSubMenuItemList("Geo Location Locking", "firewallRules"),
					createSubMenuItemList("HSTS", "firewallRules"),
				],
				false
			),
			createMenuItemList(
				"SSL",
				[
					createSubMenuItemList("SSL Recommendation", "firewallRules"),
					createSubMenuItemList("TLS Version Control", "firewallRules"),
					createSubMenuItemList("Universal SSL Certificate", "firewallRules"),
					createSubMenuItemList("Opportunistic Encryption", "firewallRules"),
					createSubMenuItemList("Client Level Certificate", "firewallRules"),
					createSubMenuItemList("Origin Server Certificate", "firewallRules"),
					createSubMenuItemList("Authenticated Origin Pull Request", "firewallRules"),
					createSubMenuItemList("Multi Tenant Certificate control", "firewallRules"),
				],
				false
			),
			createMenuItemList(
				"Network",
				[
					createSubMenuItemList("Allow gRPC Connections to origin server", "firewallRules"),
					createSubMenuItemList("Optimise routing over POPs", "firewallRules"),
					createSubMenuItemList("Cloud based tunneling", "firewallRules"),
					createSubMenuItemList("Server side Exclusion", "firewallRules"),
					createSubMenuItemList("Hotlink Protection", "firewallRules"),
				],
				false
			),
		]);
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
								<Typography fontWeight={700} color="secondary.90" marginRight="4px">
									{val.name}
								</Typography>
								<img src={val.isExpanded ? icon_play_down : icon_play_right} alt="arrow-icon" />
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
