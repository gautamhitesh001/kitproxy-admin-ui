import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { TabButton } from "../../components/buttons/tabButton";
import { ConfigurationSidebar } from "../../components/sidebars/configurationSidebar";
import { ConfigurationCard } from "../../components/cards";
import { Box } from "@mui/system";
import { configurationSchema } from "../../config/schema/configuration";
import { findIndex } from "lodash";
import { getConfigurationSettings, userLogin } from "../../appRedux/actions";

const useStyles = makeStyles((theme) => ({
	contentContainer: {
		flexGrow: 1,
		marginTop: 8,
	},
	configContainer: {
		maxHeight: "calc(100vh - 265px)",
		overflowY: "auto",
		transition: "all 0.3s ease",
		marginTop: 12,
		paddingBottom: 100,
	},
	btnDocumentation: {
		padding: theme.spacing(2, 3, 2, 3) + " !important",
		borderRadius: "4px !important",
		border: "1px solid #E6E6E6 !important",
		backgroundColor: theme.palette.white.main + " !important",
	},
	titleContainer: {
		padding: "16px 24px",
		backgroundColor: theme.palette.white.main,
		borderRadius: 8,
		marginTop: 8,
		marginBottom: 8,
	},
}));

export const ConfigurationPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState(1);
	const [configurationTabs, setConfigurationTabs] = useState([]);
	const [tabContent, setTabContent] = useState([]);

	useEffect(() => {
		setConfigurationTabs(configurationSchema.map((value) => ({ label: value.tabTitle, index: value.index })));
		dispatch(userLogin((loginInfo) => dispatch(getConfigurationSettings(loginInfo.tokens.access.token))));
	}, []);

	useEffect(() => {
		getTabContent();
	}, [activeTab]);

	const handleTabChange = (key) => {
		setActiveTab(key);
	};

	const getTabContent = () => {
		let index = findIndex(configurationSchema, { index: activeTab });
		setTabContent(configurationSchema[index].settingGroups);
	};

	return (
		<DashboardLayout activeMenuItem="Configurations">
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Typography variant="h4" color="secondary.main">
					Configuration
				</Typography>
				<ButtonBase className={classes.btnDocumentation}>
					<Typography color="secondary.main">Open Documentation</Typography>
				</ButtonBase>
			</Stack>
			<Grid columnSpacing="20px" container direction="row" classes={{ root: classes.contentContainer }}>
				<Grid item xs={3}>
					<ConfigurationSidebar content={tabContent} />
				</Grid>
				<Grid item xs={9}>
					<Stack direction="row" spacing="2px">
						{configurationTabs.map((val, index) => (
							<TabButton index={val.index} handleTabChange={handleTabChange} label={val.label} isTabActive={val.index === activeTab} key={val.index + index} />
						))}
					</Stack>

					<Stack direction="column" spacing={1} className={classes.configContainer}>
						{tabContent.map((settingGroup, index) => (
							<div key={settingGroup.id + index}>
								<Box id={settingGroup.id} className={classes.titleContainer}>
									<Typography variant="h6" color="secondary.90">
										{settingGroup.label}
									</Typography>
								</Box>
								{settingGroup.settings.map((val, index) => {
									return (
										<ConfigurationCard
											hasSettingParent={settingGroup.hasParent}
											settingParentId={settingGroup.parentId}
											hasConfig={settingGroup.hasConfig}
											configKey={settingGroup.configKey}
											parentId={settingGroup.id}
											id={val.id}
											switchId={val.switchId}
											isSwitchBoolean={val.isSwitchBoolean}
											key={val.id + index}
											title={val.title}
											subText={val.subtext}
											formContent={val.form}
											subSettings={val.subSettings}
										/>
									);
								})}
							</div>
						))}
					</Stack>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
