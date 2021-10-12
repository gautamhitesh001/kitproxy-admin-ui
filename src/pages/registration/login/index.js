import { Link, TextField, Typography } from "@mui/material";
import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";
import { AlertCircle } from "react-feather";
import { Box } from "@mui/system";
import { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { CustomButton } from "../../../components/custom-button";
import { useHistory } from "react-router";
import { ThirdPartyCTA } from "../../../components/widgets/thirdPartyCTA";
import { CustomPassword } from "../../../components/custom-password";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
}));

const schema = Yup.object().shape({
	email: Yup.string().required("Please enter email.").email("Please enter a valid email."),
	password: Yup.string().required("Please enter password."),
});

export const Login = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showError, setShowError] = useState(false);

	const onFormSubmit = ({ values }) => {
		console.log("values", values);
	};

	return (
		<RegistrationLayout>
			<RegistrationCard
				headingText="Welcome Back!"
				contentTopMargin={showError ? 4 : 8}
				subTextComponent={
					<Typography justifySelf="self-end" variant="subtitle2" mt={2}>
						New to Kitsune?{" "}
						<Link variant="subtitle2" component="button" color="primary" underline="none">
							Create your Account
						</Link>
					</Typography>
				}
			>
				{showError ? (
					<Box display="flex" alignItems="center" justifyContent="center" color="error.main" mb={2}>
						<AlertCircle size={18} />
						<Typography ml={1} variant="subtitle2" color="error.main">
							Email Id doesn’t exist
						</Typography>
					</Box>
				) : null}
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
								size="small"
							/>
							<CustomPassword
								id="password"
								label="Password"
								fullWidth
								onChange={handleChange}
								handleOnBlur={(e) => handleBlur(e)}
								name="password"
								value={values.password}
								error={touched.password && Boolean(errors.password)}
								helperText={touched.password ? errors.password : ""}
								margin="normal"
							/>
							<Typography variant="initial" alignSelf="flex-end">
								<Link
									component="button"
									type="button"
									variant="initial"
									color="primary"
									underline="none"
									onClick={() => history.push("/reset-password/email-verification")}
								>
									Forgot Password?
								</Link>
							</Typography>
							<CustomButton type="submit" fullWidth={false} variant="contained">
								LOG IN
							</CustomButton>
						</form>
					)}
				</Formik>
				<ThirdPartyCTA />
			</RegistrationCard>
		</RegistrationLayout>
	);
};
