import { Link, TextField, Typography } from "@mui/material";
import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";
import { Box } from "@mui/system";
import { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { CustomButton } from "../../../components/custom-button";
import { ui_resetPasswordEmailValidation } from "../../../config/Constants";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	successContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
	},
}));

const schema = Yup.object().shape({
	email: Yup.string().required("Please enter email.").email("Please enter a valid email."),
});

export const ResetPasswordEmailVerification = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);

	const renderFormComponent = () => (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ email: "", password: "" }}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
				<form className={classes.formContainer} onSubmit={handleSubmit}>
					<TextField
						id="email"
						label="Email"
						variant="outlined"
						fullWidth
						onChange={handleChange}
						onBlur={handleBlur}
						name="email"
						value={values.email}
						error={touched.email && Boolean(errors.email)}
						helperText={touched.email ? errors.email : ""}
						margin="normal"
					/>
					<CustomButton disabled={showSuccess} type="submit" fullWidth={false} variant="contained">
						SEND ME THE LINK
					</CustomButton>
				</form>
			)}
		</Formik>
	);

	const renderSuccessComponent = () => (
		<Box className={classes.successContainer}>
			<img src={ui_resetPasswordEmailValidation} alt="validation success" />
			<Typography textAlign="center" variant="subtitle1" color="secondary.90" mt={8}>
				We have sent a reset link to <b>example@gmail.com</b>. <br />
				Please check your inbox
			</Typography>
		</Box>
	);

	const onFormSubmit = ({ values }) => {
		setShowSuccess(true);
	};

	const handleLinkClick = () => {
		if (!showSuccess) {
			history.push("/login");
		}
		setShowSuccess(false);
	};

	return (
		<RegistrationLayout>
			<RegistrationCard
				contentTopMargin={showError ? 4 : 8}
				headingText="Reset Password"
				subTextComponent={
					!showSuccess ? (
						<Typography justifySelf="self-end" variant="subtitle2" color="secondary.90" mt={2}>
							We will email you a password reset link
						</Typography>
					) : null
				}
			>
				{showError ? (
					<Box display="flex" alignItems="center" justifyContent="center" color="error.main">
						<Typography textAlign="center" ml={1} variant="subtitle2" color="error.main">
							This username doesn’t exist. <br />
							Please check your email and try again.
						</Typography>
					</Box>
				) : null}
				{showSuccess ? renderSuccessComponent() : renderFormComponent()}
				<Typography variant="subtitle1" mt={4}>
					<Link component="button" color="primary" underline="none" onClick={() => handleLinkClick()}>
						{showSuccess ? "Try a different email address" : "Go back to Login"}
					</Link>
				</Typography>
			</RegistrationCard>
		</RegistrationLayout>
	);
};
