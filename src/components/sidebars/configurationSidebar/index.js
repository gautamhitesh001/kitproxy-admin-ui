import { ButtonBase, Collapse, Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { icon_play_right } from "../../../config/Constants";
import { ConfigurationSidebarSearch } from "../../search";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	configListWrapper: {
		marginTop: 12,
		borderRadius: 8,
		backgroundColor: theme.palette.white.main,
		padding: "24px 24px 24px 24px",
		maxHeight: "calc(100vh - 255px)",
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

export const ConfigurationSidebar = ({ content }) => {
	const classes = useStyles();

	const [configMenuList, setConfigMenuList] = useState([]);

	useEffect(() => {
		setConfigMenuList(
			content.map((value) => {
				return {
					id: value.id,
					name: value.label,
					isExpanded: true,
					submenu: value.settings.map((menuItem) => {
						return {
							name: menuItem.title,
							id: menuItem.id,
							isExpanded: true,
							submenuItems: menuItem.subSettings.map((subSetting) => ({
								id: subSetting.id,
								name: subSetting.title,
							})),
						};
					}),
				};
			})
		);
	}, [content]);

	const toggleExpandMenuItem = (menuIndex, submenuIndex, isSubmenuItem) => {
		let tempMenuList = [...configMenuList];
		if (!isSubmenuItem) {
			tempMenuList[menuIndex].isExpanded = !tempMenuList[menuIndex].isExpanded;
		} else {
			tempMenuList[menuIndex].submenu[submenuIndex].isExpanded = !tempMenuList[menuIndex].submenu[submenuIndex].isExpanded;
		}
		setConfigMenuList(tempMenuList);
	};

	return (
		<div>
			<ConfigurationSidebarSearch />
			<Stack direction="column" spacing={3} className={classes.configListWrapper}>
				{configMenuList.map((val, index) => (
					<div key={val.name + index}>
						<ButtonBase onClick={() => toggleExpandMenuItem(index, null, false)} classes={{ root: classes.menuItemBtn }} disableRipple disableTouchRipple>
							<a className={classes.anchorTag} href={"#" + val.id}>
								<Stack direction="row" alignItems="center">
									<Typography textAlign="left" fontWeight={700} color="secondary.90" marginRight="4px">
										{val.name}
									</Typography>
									<img className={val.isExpanded ? classes.expandIcon : classes.hideIcon} src={icon_play_right} alt="arrow-icon" />
								</Stack>
							</a>
						</ButtonBase>
						<Box my={3}>
							<Collapse in={val.isExpanded} timeout="auto" unmountOnExit>
								<Stack direction="column" spacing={3}>
									{val.submenu.map((item, itemIndex) => {
										if (item.submenuItems.length > 0) {
											return (
												<>
													<a key={item.id + index} className={classes.anchorTag}>
														<ButtonBase
															onClick={() => toggleExpandMenuItem(index, itemIndex, true)}
															classes={{ root: classes.menuItemBtn }}
															disableRipple
															disableTouchRipple
														>
															<Stack direction="row" alignItems="center">
																<Typography textAlign="left" marginRight="4px" variant="subtitle1">
																	{item.name}
																</Typography>
																<img className={item.isExpanded ? classes.expandIcon : classes.hideIcon} src={icon_play_right} alt="arrow-icon" />
															</Stack>
														</ButtonBase>
													</a>
													<Collapse in={item.isExpanded} timeout="auto" unmountOnExit>
														<Stack paddingLeft={3} direction="column" spacing={3}>
															{item.submenuItems.map((subitem) => (
																<a className={classes.anchorTag} key={subitem.id + index} href={"#" + subitem.id}>
																	<Typography variant="subtitle1">{subitem.name}</Typography>
																</a>
															))}
														</Stack>
													</Collapse>
												</>
											);
										}
										return (
											<a className={classes.anchorTag} key={item.id + index} href={"#" + item.id}>
												<Typography variant="subtitle1">{item.name}</Typography>
											</a>
										);
									})}
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

ConfigurationSidebar.propTypes = {
	content: PropTypes.array,
};
