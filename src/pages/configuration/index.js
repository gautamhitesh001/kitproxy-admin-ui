import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Grid, Stack, Typography } from "@mui/material";
import { TabButton } from "../../components/buttons/tabButton";
import { ConfigurationSidebar } from "../../components/sidebars/configurationSidebar";
import { Box } from "@mui/system";
import { ConfigurationCard } from "../../components/cards";
import { ConfigAddUserAgent, ConfigGeoLocationLockingForm, ConfigIpv4, ConfigRateLimitingForm } from "../../components/forms";

const createConfigurationTablist = (label, index) => {
	return { label, index };
};

const useStyles = makeStyles((theme) => ({
	contentContainer: {
		flexGrow: 1,
		marginTop: 20,
	},
	configContainer: {
		maxHeight: "calc(100vh - 250px)",
		overflowY: "auto",
		transition: "all 0.3s ease",
		marginTop: 12,
	},
	btnDocumentation: {
		padding: theme.spacing(2, 3, 2, 3) + " !important",
		borderRadius: "4px !important",
		border: "1px solid #E6E6E6 !important",
		backgroundColor: theme.palette.white.main + " !important",
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
				<Grid item xs={9}>
					<Stack direction="row" alignItems="center" justifyContent="space-between">
						<Typography variant="h5" color="secondary.90">
							Web Application Firewall
						</Typography>
						<ButtonBase className={classes.btnDocumentation}>
							<Typography color="secondary.main">Open Documentation</Typography>
						</ButtonBase>
					</Stack>
					<Stack direction="column" spacing={1} className={classes.configContainer}>
						<ConfigurationCard
							title="Firewall Rules"
							subText="Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description"
						/>
						<ConfigurationCard
							title="Rate Limiting"
							subText="Set a limit on the number of hits(CDN requests) over a period of time"
							hasSwitch={true}
							extra={<ConfigRateLimitingForm />}
						/>
						<ConfigurationCard
							title="Onion Routing"
							subText="Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description"
							hasSwitch={true}
						/>
						<ConfigurationCard
							title="IPv4 header request handling"
							subText="Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description"
							hasSwitch={true}
							extra={<ConfigIpv4 />}
						/>
						<ConfigurationCard
							title="True Client IP Header"
							subText="Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description"
							hasSwitch={true}
						/>
						<ConfigurationCard
							title="Email address obfuscation"
							subText="Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description Firewall Rules Description"
							hasSwitch={true}
						/>
						<ConfigurationCard title="DDoS Protection" subText="Recommended settings: DDoS is enabled by default" hasSwitch={true} />
						<ConfigurationCard
							title="User Agent Blocking"
							subText="User Agents added here will be blacklisted"
							hasSwitch={false}
							extra={<ConfigAddUserAgent />}
						/>
						<ConfigurationCard
							title="Geo Location Locking"
							subText="Countries Added here will be whitelisted. "
							hasSwitch={false}
							extra={<ConfigGeoLocationLockingForm />}
						/>
						<ConfigurationCard
							title="HSTS"
							subText="HSTS details"
							hasSwitch={true}
						/>
					</Stack>
				</Grid>
			</Grid>
		</DashboardLayout>
	);
};
