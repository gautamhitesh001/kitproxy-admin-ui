import { Link, Typography } from "@mui/material";
import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { CustomButton } from "../../../components/custom-button";
import { ui_resetPasswordSuccess } from "../../../config/Constants";
import { useHistory } from "react-router";
import { findIndex } from "lodash";
import useWindowDimensions from "../../../utils/windowDimensions";
import { CustomPassword } from "../../../components/custom-password";
import { checkPasswordValidation, passwordValidationArray } from "../../../utils/validatePassword";

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
		paddingTop: 64,
	},
}));

const schema = Yup.object().shape({
	password: Yup.string()
		.required("Please enter password.")
		.min(8, "Password must contain atleast 8 characters.")
		.matches(/^(?=.*[A-Z])/, "Password must contain One Uppercase.")
		.matches(/^(?=.*[a-z])/, "Password must contain One Lowercase.")
		.matches(/^(?=.*[0-9])/, "Password must contain One Number.")
		.matches(/^(?=.*\W)/, "Password must contain One Special Character."),
	confirmPassword: Yup.string()
		.required("Please confirm password.")
		.oneOf([Yup.ref("password"), null], "Passwords must match."),
});

export const ResetPassword = () => {
	const classes = useStyles();
	const history = useHistory();
	const { isDesktopView } = useWindowDimensions();

	const [showSuccess, setShowSuccess] = useState(false);
	const [passwordValidationData, setPasswordValidationData] = useState([...passwordValidationArray]);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);

	useEffect(() => {
		setIsPasswordValid(passwordValidationData.reduce((prev, current) => prev && current.value));
	}, [passwordValidationData]);

	const renderFormComponent = () => (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ password: "", confirmPassword: "" }}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
				<form className={classes.formContainer} onSubmit={handleSubmit}>
					<CustomPassword
						id="password"
						label="New Password"
						fullWidth
						onChange={(e) => handlePasswordChange(e, () => handleChange(e))}
						handleOnBlur={(e) => handleBlur(e)}
						name="password"
						value={values.password}
						error={touched.password && Boolean(errors.password)}
						helperText={touched.password ? errors.password : ""}
						margin="normal"
						isPasswordValid={isPasswordValid}
						hasValidationPopper={true}
						passwordValidationData={passwordValidationData}
						handlePasswordFocusChange={setIsPasswordFocused}
					/>

					<CustomPassword
						id="confirmPassword"
						label={isPasswordFocused && !isDesktopView ? "" : "Confirm Password"}
						fullWidth
						onChange={handleChange}
						name="confirmPassword"
						value={values.confirmPassword}
						error={touched.confirmPassword && Boolean(errors.confirmPassword)}
						helperText={touched.confirmPassword ? errors.confirmPassword : ""}
						margin="normal"
						handleOnBlur={(e) => handleBlur(e)}
					/>
					<CustomButton disabled={showSuccess} type="submit" fullWidth={false} variant="contained">
						UPDATE MY PASSWORD
					</CustomButton>
				</form>
			)}
		</Formik>
	);

	const handlePasswordChange = (e, callBack) => {
		callBack();
		setPasswordValidationData(checkPasswordValidation(e.target.value));
	};

	const onFormSubmit = ({ values }) => {
		setShowSuccess(true);
	};

	const renderSuccessComponent = () => (
		<Box className={classes.successContainer}>
			<img src={ui_resetPasswordSuccess} alt="success" />
			<Typography textAlign="center" variant="subtitle1" color="secondary.90" mt={8}>
				The password for <b>example@gmail.com</b> has been successfully changed.
			</Typography>
		</Box>
	);

	return (
		<RegistrationLayout>
			<RegistrationCard
				contentTopMargin={4}
				headingText="Reset Password"
				subTextComponent={
					!showSuccess ? (
						<Typography textAlign="center" justifySelf="self-end" variant="body2" color="secondary.90" mt={2}>
							Make sure to enter strong password which should not be same as your username
						</Typography>
					) : null
				}
			>
				{showSuccess ? renderSuccessComponent() : renderFormComponent()}
				{showSuccess ? (
					<Typography variant="subtitle1" mt={4}>
						<Link component="button" variant="subtitle1" color="primary" underline="none" onClick={() => history.push("/login")}>
							Go back to Login
						</Link>
					</Typography>
				) : null}
			</RegistrationCard>
		</RegistrationLayout>
	);
};
