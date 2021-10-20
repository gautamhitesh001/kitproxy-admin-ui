import { Divider, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { CustomButton } from "../../../components/custom-button";
import { useHistory } from "react-router";
import { CustomPassword } from "../../../components/custom-password";
import { ThirdPartyCTA } from "../../../components/widgets";
import { checkPasswordValidation, passwordValidationArray } from "../../../utils/validatePassword";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	divider: {
		marginLeft: "8px !important",
	},
	inputAdornment: {
		height: "100% !important",
	},
}));

const schema = Yup.object().shape({
	email: Yup.string().required("Please enter email.").email("Please enter a valid email."),
	name: Yup.string()
		.matches(/^[A-Za-z ]*$/, "Please enter valid name")
		.max(64, "Only 40 characters allowed")
		.required("Please enter full name"),
	password: Yup.string()
		.required("Please enter password.")
		.min(8, "Password must contain atleast 8 characters.")
		.matches(/^(?=.*[A-Z])/, "Password must contain One Uppercase.")
		.matches(/^(?=.*[a-z])/, "Password must contain One Lowercase.")
		.matches(/^(?=.*[0-9])/, "Password must contain One Number.")
		.matches(/^(?=.*\W)/, "Password must contain One Special Character."),
	phone: Yup.string()
		.required("Please enter phone number.")
		.matches(/^[2-9]\d{9}$/, "Please enter valid phone number"),
});

export const Register = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showError, setShowError] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [passwordValidationData, setPasswordValidationData] = useState([...passwordValidationArray]);

	useEffect(() => {
		setIsPasswordValid(passwordValidationData.reduce((prev, current) => prev && current.value));
	}, [passwordValidationData]);

	const onFormSubmit = ({ values }) => {
		console.log("values", values);
	};

	const handlePasswordChange = (e, callBack) => {
		callBack();
		setPasswordValidationData(checkPasswordValidation(e.target.value));
	};

	return (
		<RegistrationLayout>
			<RegistrationCard
				headingText="Start your free Trail now"
				subTextComponent={
					<Typography color="secondary.90" justifySelf="self-end" variant="subtitle2" mt={2}>
						Already have an account?{" "}
						<Link variant="subtitle2" component="button" color="primary" underline="none" onClick={() => history.push("/login")}>
							Login
						</Link>
					</Typography>
				}
			>
				<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ email: "", password: "" }}>
					{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
						<form className={classes.formContainer} onSubmit={handleSubmit}>
							<TextField
								id="name"
								label="Full Name"
								variant="outlined"
								fullWidth
								onChange={handleChange}
								onBlur={handleBlur}
								name="name"
								value={values.name}
								error={touched.name && Boolean(errors.name)}
								helperText={touched.name ? errors.name : ""}
								margin="normal"
								size="small"
							/>
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
								size="small"
							/>
							<TextField
								id="phone"
								label="Phone Number"
								variant="outlined"
								fullWidth
								onChange={handleChange}
								onBlur={handleBlur}
								name="phone"
								value={values.phone}
								error={touched.phone && Boolean(errors.phone)}
								helperText={touched.phone ? errors.phone : ""}
								margin="normal"
								size="small"
								InputProps={{
									startAdornment: (
										<InputAdornment className={classes.inputAdornment} position="start">
											+91 <Divider className={classes.divider} orientation="vertical" />
										</InputAdornment>
									),
								}}
							/>
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
								size="small"
							/>
							<CustomButton type="submit" fullWidth={false} variant="contained">
								Create Account
							</CustomButton>
						</form>
					)}
				</Formik>
				<Typography textAlign="center" variant="small2" color="secondary.80" mt={2}>
					By creating your account you agree to Kitsune’s{" "}
					<b>
						<u>Terms of Use</u>
					</b>{" "}
					and{" "}
					<b>
						<u>Privacy Policy.</u>
					</b>
				</Typography>
				<ThirdPartyCTA />
			</RegistrationCard>
		</RegistrationLayout>
	);
};
