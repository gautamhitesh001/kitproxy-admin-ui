import { Button, Divider, IconButton, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";
import { AlertCircle, Eye, EyeOff } from "react-feather";
import { Box } from "@mui/system";
import { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import * as Yup from "yup";
import { CustomButton } from "../../../components/custom-button";
import { icon_github, icon_google, icon_outlook } from "../../../config/Constants";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	divider: {
		marginTop: "32px !important",
	},
	ctaWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 24,
	},
	btnIcon: {
		width: 110,
		height: 48,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: theme.palette.common.white,
		border: "1px solid #CACCCF !important",
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
	const [showPassword, setShowPassword] = useState(false);

	const onFormSubmit = ({ values }) => {
		console.log("values", values);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
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
							/>
							<TextField
								id="password"
								label="Password"
								variant="outlined"
								fullWidth
								onChange={handleChange}
								onBlur={handleBlur}
								name="password"
								value={values.password}
								error={touched.password && Boolean(errors.password)}
								helperText={touched.password ? errors.password : ""}
								margin="normal"
								type={showPassword ? "text" : "password"}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() => setShowPassword(!showPassword)}
												onMouseDown={handleMouseDownPassword}
												edge="end"
												style={{ marginRight: 1 }}
											>
												{showPassword ? <EyeOff /> : <Eye />}
											</IconButton>
										</InputAdornment>
									),
								}}
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
				<Divider className={classes.divider} textAlign="center" flexItem={true}>
					<Typography variant="small3" color="black.60">
						or continue using
					</Typography>
				</Divider>
				<Box className={classes.ctaWrapper}>
					<Button className={classes.btnIcon} variant="outlined">
						<img src={icon_google} />
					</Button>
					<Button className={classes.btnIcon} sx={{ mx: 2 }} variant="outlined">
						<img src={icon_github} />
					</Button>
					<Button className={classes.btnIcon} variant="outlined">
						<img src={icon_outlook} />
					</Button>
				</Box>
			</RegistrationCard>
		</RegistrationLayout>
	);
};
