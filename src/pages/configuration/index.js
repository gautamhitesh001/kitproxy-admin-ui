import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboard";
import { ButtonBase, Grid, Stack, Typography, TextField } from "@mui/material";
import { TabButton } from "../../components/buttons/tabButton";
import { PrimaryButton } from "../../components/buttons";
import { Formik } from "formik";
import * as Yup from "yup";
import { ConfigurationSidebar } from "../../components/sidebars/configurationSidebar";
import { ConfigurationCard } from "../../components/cards";
import { Box } from "@mui/system";
import { configurationSchema } from "../../config/schema/configuration";
import { findIndex } from "lodash";
import { getConfigurationSettings, createConfigurationSettings, deployConfigurationSetting } from "../../appRedux/actions";
import { createOrg, getOrganization } from "../../appRedux/actions/Organization";

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
		paddingBottom: 150,
	},
	btnDocumentation: {
		padding: theme.spacing(2, 3, 2, 3) + " !important",
		borderRadius: "4px !important",
		border: "1px solid #E6E6E6 !important",
		backgroundColor: theme.palette.white.main + " !important",
	},
	btnDeploy: {
		padding: theme.spacing(2, 3, 2, 3) + " !important",
		margin: theme.spacing(0, 1) + " !important",
		borderRadius: "4px !important",
		border: "1px solid #E6E6E6 !important",
		backgroundColor: "#249F5C" + " !important",
		color: "#FFFFFF" + " !important",
	},
	titleContainer: {
		padding: "16px 24px",
		backgroundColor: theme.palette.white.main,
		borderRadius: 8,
		marginTop: 8,
		marginBottom: 8,
	},
	modal: {
		height: "80vh",
		overflow: "auto",
	},
}));

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const schema = Yup.object().shape({
	domainName: Yup.string().required("Please enter domain name."),
	organizationName: Yup.string().required("Please enter organization name"),
	organizationAddress: Yup.string().required("Please enter organization address"),
	organizationCity: Yup.string().required("Please enter organization city"),
	organizationState: Yup.string().required("Please enter organization state"),
	organizationZip: Yup.string().required("Please enter organization zip code"),
	organizationCountry: Yup.string().required("Please enter organization country"),
	organizationPhone: Yup.string().required("Please enter organization phone"),
	organizationEmail: Yup.string().required("Please enter organization email"),
	organizationWebsite: Yup.string().required("Please enter organization web site"),
	organizationLogo: Yup.object().shape({
		name: Yup.string().required("Please enter file"),
		url: Yup.string().required("Please enter url"),
	}),
});

const initialValues = {
	domainName: "www.rahul.com",
	organizationName: "rahul Inc",
	organizationAddress: "123 Main St.",
	organizationCity: "Anytown",
	organizationState: "CA",
	organizationZip: "12345",
	organizationCountry: "US",
	organizationPhone: "123-456-7890",
	organizationEmail: "testemail@test.com",
	organizationLogo: {
		name: "file",
		url: "file url",
	},
	organizationWebsite: "http://www.rahul.com",
};

export const ConfigurationPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { loginInfo } = useSelector(({ authentication }) => authentication);
	const { organizationInfo, isOrganizationCreated } = useSelector(({ organization }) => organization);
	const [activeTab, setActiveTab] = useState(1);
	const [configurationTabs, setConfigurationTabs] = useState([]);
	const [tabContent, setTabContent] = useState([]);

	const { updatedConfigurationSettings, configurationSettings } = useSelector(({ configuration }) => configuration);
	const [isModalOpen, setIsModalOpen] = useState(false);
	useEffect(() => {
		setConfigurationTabs(configurationSchema.map((value) => ({ label: value.tabTitle, index: value.index })));
		dispatch(getOrganization(loginInfo.tokens.access.token, loginInfo.user.id));
	}, []);

	useEffect(() => {
		setIsModalOpen(!isOrganizationCreated);
		if(isOrganizationCreated) {
			dispatch(getConfigurationSettings(loginInfo.tokens.access.token));
		}
	}, [isOrganizationCreated]);

	useEffect(() => {
		if(organizationInfo && organizationInfo[0]?.domainName ) {
			dispatch(createConfigurationSettings(loginInfo.tokens.access.token, configurationSettings, organizationInfo[0]?.domainName));
		}
	}, [organizationInfo]);

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

	const onFormSubmit = (values) => {
		dispatch(createOrg(values, loginInfo.tokens.access.token, (res) => setIsModalOpen(false)));
		dispatch(getOrganization(loginInfo.tokens.access.token, loginInfo.user.id));
	};

	const handleDeployment = () => {
		dispatch(deployConfigurationSetting(loginInfo.tokens.access.token, updatedConfigurationSettings, organizationInfo[0].domainName));
	};

	return (
		<>
			<DashboardLayout activeMenuItem="Configurations">
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography variant="h4" color="secondary.main">
						Configuration
					</Typography>
					<div>
						<ButtonBase className={classes.btnDeploy} onClick={handleDeployment}>
							<Typography color="#FFFFFF">Deploy</Typography>
						</ButtonBase>
						<ButtonBase className={classes.btnDocumentation}>
							<Typography color="secondary.main">Open Documentation</Typography>
						</ButtonBase>
					</div>
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
			<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box sx={style} className={classes.modal}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Create Organization
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						fill the below form to create your organization
					</Typography>
					<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={initialValues}>
						{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
							<form className={classes.formContainer} onSubmit={handleSubmit}>
								<TextField
									id="domainName"
									label="Domain Name"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="domainName"
									value={values.domainName}
									error={touched.domainName && Boolean(errors.domainName)}
									helperText={touched.domainName ? errors.domainName : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationName"
									label="Organization Name"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationName"
									value={values.organizationName}
									error={touched.organizationName && Boolean(errors.organizationName)}
									helperText={touched.organizationName ? errors.organizationName : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationAddress"
									label="Organization Address"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationAddress"
									value={values.organizationAddress}
									error={touched.organizationAddress && Boolean(errors.organizationAddress)}
									helperText={touched.organizationAddress ? errors.organizationAddress : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationCity"
									label="Organization City"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationCity"
									value={values.organizationCity}
									error={touched.organizationCity && Boolean(errors.organizationCity)}
									helperText={touched.organizationCity ? errors.organizationCity : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationState"
									label="Organization State"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationState"
									value={values.organizationState}
									error={touched.organizationState && Boolean(errors.organizationState)}
									helperText={touched.organizationState ? errors.organizationState : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationZip"
									label="Organization Zip"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationZip"
									value={values.organizationZip}
									error={touched.organizationZip && Boolean(errors.organizationZip)}
									helperText={touched.organizationZip ? errors.organizationZip : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationCountry"
									label="Organization Country"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationCountry"
									value={values.organizationCountry}
									error={touched.organizationCountry && Boolean(errors.organizationCountry)}
									helperText={touched.organizationCountry ? errors.organizationCountry : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationPhone"
									label="Organization Phone"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationPhone"
									value={values.organizationPhone}
									error={touched.organizationPhone && Boolean(errors.organizationPhone)}
									helperText={touched.organizationPhone ? errors.organizationPhone : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationEmail"
									label="Organization Email"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationEmail"
									value={values.organizationEmail}
									error={touched.organizationEmail && Boolean(errors.organizationEmail)}
									helperText={touched.organizationEmail ? errors.organizationEmail : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="organizationWebsite"
									label="Organization Website"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="organizationWebsite"
									value={values.organizationWebsite}
									error={touched.organizationWebsite && Boolean(errors.organizationWebsite)}
									helperText={touched.organizationWebsite ? errors.organizationWebsite : ""}
									margin="normal"
									size="small"
								/>
								<PrimaryButton type="submit" fullWidth={false} variant="contained">
									Create
								</PrimaryButton>
							</form>
						)}
					</Formik>
				</Box>
			</Modal>
		</>
	);
};
