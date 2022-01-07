import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { TabButton } from "../../components/buttons/tabButton";
import { ConfigurationSidebar } from "../../components/sidebars/configurationSidebar";
import { ConfigurationCard } from "../../components/cards";
import { Box } from "@mui/system";
import { configurationSchema } from "../../config/schema/configuration";
import { findIndex } from "lodash";

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
						{tabContent.map((value, index) => (
							<div key={value.id + index}>
								<Box id={value.id} className={classes.titleContainer}>
									<Typography variant="h6" color="secondary.90">
										{value.label}
									</Typography>
								</Box>
								{value.settings.map((val, index) => {
									return (
										<ConfigurationCard
											id={val.id}
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
