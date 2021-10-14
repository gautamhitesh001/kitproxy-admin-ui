import { TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { AccessKeyModal } from "../../../../components/access-key-modal";
import { CustomButton } from "../../../../components/custom-button";
import { ExistingResourcesCTA } from "../../../../components/existing-resources-cta";
import { OnboardingResourceCard } from "../../../../components/widgets";
import {
	icon_aws,
	icon_aws_grey,
	icon_azure,
	icon_azure_grey,
	icon_google_cloud,
	icon_google_cloud_grey,
	ui_awsLogo,
	ui_onboardingResourceActiveKitsune,
	ui_onboardingResourceInactiveKitsune,
} from "../../../../config/Constants";
import * as Yup from "yup";
import { Formik } from "formik";
import { AlertCircle } from "react-feather";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	logoImg: {
		marginRight: 56,
	},
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		marginTop: 80,
	},
}));

const createCtaData = (key, icon, hasTooltip, tooltipText) => {
	return { key, icon, hasTooltip, tooltipText };
};

const schema = Yup.object().shape({
	accessKey: Yup.string().required("Please enter Access key id"),
	secret: Yup.string().required("Please enter Access key secret"),
});

export const SelectResource = () => {
	const classes = useStyles();

	const [activeCard, setActiveCard] = useState(0);
	const [showAwsLoginModal, setShowAwsLoginModal] = useState(false);

	const onFormSubmit = ({ values }) => {
		console.log("values", values);
	};

	const setCtaArray = (isActive) => {
		return [
			createCtaData(
				"aws",
				isActive ? icon_aws : icon_aws_grey,
				true,
				"Use this to log in to your existing AWS account or click first option to go with our kitsune resource"
			),
			createCtaData("googleCloud", isActive ? icon_google_cloud : icon_google_cloud_grey, false, ""),
			createCtaData("azure", isActive ? icon_azure : icon_azure_grey, false, ""),
		];
	};
	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Select your resource
			</Typography>
			<OnboardingResourceCard
				topMargin={5}
				text="For quicker and easier deployement, use Kitsune resources"
				cta={<img className={classes.logoImg} src={activeCard === 0 ? ui_onboardingResourceActiveKitsune : ui_onboardingResourceInactiveKitsune} alt="kitsune logo" />}
				isSelected={activeCard === 0}
				handleClick={() => setActiveCard(0)}
			/>
			<OnboardingResourceCard
				topMargin={3}
				text="Use your existing resources, Pick one from here"
				cta={<ExistingResourcesCTA isActive={activeCard === 1} ctaArray={setCtaArray(activeCard === 1)} handleAwsLogin={() => setShowAwsLoginModal(true)} />}
				isSelected={activeCard === 1}
				handleClick={() => setActiveCard(1)}
			/>
			<CustomButton sx={{ mt: "64px !important" }} btnWidth={350} variant="contained">
				CONTINUE
			</CustomButton>
			{showAwsLoginModal ? (
				<AccessKeyModal
					open={showAwsLoginModal}
					handleClose={() => setShowAwsLoginModal(false)}
					tooltipInfo="Contact your developer team for AWS access details."
					logo={ui_awsLogo}
				>
					<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ email: "", password: "" }}>
						{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
							<form className={classes.formContainer} onSubmit={handleSubmit}>
								<TextField
									id="accessKey"
									label="Access key Id"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="accessKey"
									value={values.accessKey}
									error={touched.accessKey && Boolean(errors.accessKey)}
									helperText={touched.accessKey ? errors.accessKey : ""}
									margin="normal"
									size="small"
								/>
								<TextField
									id="secret"
									label="Access key secret"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									onBlur={handleBlur}
									name="secret"
									value={values.secret}
									error={touched.secret && Boolean(errors.secret)}
									helperText={touched.secret ? errors.secret : ""}
									margin="normal"
									size="small"
								/>
								<Box display="flex" alignItems="center" justifyContent="center" color="black.60" mt={1}>
									<AlertCircle size={22} />
									<Typography ml={1} variant="small1">
										Please recheck your keys before confirming
									</Typography>
								</Box>
								<CustomButton topMargin="64px !important" type="submit" fullWidth={false} variant="contained">
									CONFIRM
								</CustomButton>
							</form>
						)}
					</Formik>
				</AccessKeyModal>
			) : null}
		</>
	);
};
