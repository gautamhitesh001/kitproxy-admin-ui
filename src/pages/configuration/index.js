import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { TabButton } from "../../components/buttons/tabButton";
import { ConfigurationSidebar } from "../../components/sidebars/configurationSidebar";

const createConfigurationTablist = (label, index) => {
	return { label, index };
};

const useStyles = makeStyles((theme) => ({
	contentContainer: {
		flexGrow: 1,
		marginTop: 20,
	},
	configContainer: {
		maxHeight: "calc(100vh - 175px)",
		overflowY: "auto",
		transition: "all 0.3s ease",
	},
}));

export const ConfigurationPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState(1);
	const [configurationTabs, setConfigurationTabs] = useState([]);

	useEffect(() => {
		setConfigurationTabs([
			createConfigurationTablist("Security", 1),
			createConfigurationTablist("Acceleration", 2),
			createConfigurationTablist("Customisation", 3),
			createConfigurationTablist("Scalability", 4),
			createConfigurationTablist("Advanced", 5),
		]);
	}, []);

	const handleTabChange = (key) => {
		setActiveTab(key);
	};

	return (
		<DashboardLayout activeMenuItem="Configurations">
			<Stack margin="-30px -14px 0 -14px" direction="row" spacing="2px">
				{configurationTabs.map((val, index) => (
					<TabButton index={val.index} handleTabChange={handleTabChange} label={val.label} isTabActive={val.index === activeTab} key={val + index} />
				))}
			</Stack>
			<Grid columnSpacing="20px" container direction="row" classes={{ root: classes.contentContainer }}>
				<Grid item xs={3}>
					<ConfigurationSidebar />
				</Grid>
				<Grid item xs={9} className={classes.configContainer}>
					<span>Settings</span>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
