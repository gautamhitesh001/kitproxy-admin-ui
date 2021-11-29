import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const createConfigurationTablist = (label, index) => {
	return { label, index };
};

const useStyles = makeStyles((theme) => ({
	btnWrapper: ({ isTabActive }) => ({
		flex: 1,
	}),
	tabBtn: {
		flex: 1,
		backgroundColor: "#FFFFFF !important",
		border: "1px solid #E6E6E6 !important",
		paddingTop: "20px !important",
		paddingBottom: "20px !important",
		color: theme.palette.secondary.main,
	},
	activeTabBtn: {
		flex: 1,
		backgroundColor: "#FFFFFF !important",
		border: "1px solid #F4672A !important",
		paddingTop: "20px !important",
		paddingBottom: "20px !important",
		color: theme.palette.primary.main,
	},
}));

const TabButton = ({ isTabActive, handleTabChange, label, index }) => {
	const classes = useStyles();

	return (
		<ButtonBase className={classes.btnWrapper} onClick={() => handleTabChange(index)} disableRipple disableTouchRipple>
			<Box className={isTabActive ? classes.activeTabBtn : classes.tabBtn}>
				<Typography variant="subtitle1">{label}</Typography>
			</Box>
		</ButtonBase>
	);
};

export const ConfigurationPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [showSuccess, setShowSuccess] = useState(false);
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
		console.log("key", key);
	};

	return (
		<DashboardLayout activeMenuItem="Configurations">
			<Stack margin="-30px -14px 0 -14px" direction="row" spacing="2px">
				{configurationTabs.map((val, index) => (
					<TabButton index={val.index} handleTabChange={handleTabChange} label={val.label} isTabActive={val.index === activeTab} key={val + index} />
				))}
			</Stack>
		</DashboardLayout>
	);
};

TabButton.propTypes = {
	isTabActive: PropTypes.bool,
	handleTabChange: PropTypes.func,
	label: PropTypes.string,
	index: PropTypes.number,
};
