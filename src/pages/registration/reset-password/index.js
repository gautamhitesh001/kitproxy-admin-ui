import { Divider, Fade, Grid, Link, Paper, Popper, TextField, Typography } from "@mui/material";
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
import { Check, X } from "react-feather";
import useWindowDimensions from "../../../utils/windowDimensions";

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
	strengthIndicatorText: {
		textTransform: "uppercase",
	},
	popper: {
		marginLeft: "20px !important",
		[theme.breakpoints.down("xl")]: {
			marginLeft: "0 !important",
			marginTop: "16px !important",
		},
	},
	popperContainer: {
		position: "relative",
		background: "#fdfdfd",
		border: "1px solid #c4c4c4 !important",
		width: 325,
		paddingRight: 30,
		paddingLeft: 30,
		display: "flex",
		flexDirection: "column",
		borderRadius: "10px !important",
		boxShadow: "none !important",
		"&:before": {
			right: "100%",
			top: 25,
			border: "solid transparent",
			content: "''",
			height: 0,
			width: 0,
			position: "absolute",
			pointerEvents: "none",

			borderColor: "rgba(196, 196, 196, 0)",
			borderRightColor: "#c4c4c4",
			borderWidth: 13,
			marginTop: -11,

			[theme.breakpoints.down("xl")]: {
				top: "auto",
				bottom: "100%",
				left: 25,
				right: "auto",

				borderRightColor: "transparent",
				borderBottomColor: "#c4c4c4",
				marginTop: 0,
				marginLeft: -11,
			},
		},
		"&:after": {
			right: "100%",
			top: 25,
			border: "solid transparent",
			content: "''",
			height: 0,
			width: 0,
			position: "absolute",
			pointerEvents: "none",

			borderColor: "rgba(253, 253, 253, 0)",
			borderRightColor: "#fdfdfd",
			borderWidth: 12,
			marginTop: -10,

			[theme.breakpoints.down("xl")]: {
				top: "auto",
				bottom: "100%",
				left: 25,
				right: "auto",

				borderRightColor: "transparent",
				borderBottomColor: "#fdfdfd",
				marginTop: 0,
				marginLeft: -10,
			},
		},
	},
	arrow: {
		"&::before": {
			content: "''",
			position: "absolute",
			display: "block",
			width: "0px",
			right: 0,
			top: "50%",
			border: "15px solid transparent",
			borderRight: 0,
			bordeLeft: "15px solid #5494db",
			transform: "translate(calc(100 % + 5px), -50%)",
		},
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

const passwordValidationObj = [
	{ key: "has8Characters", label: "Atleast 8 characters", value: false },
	{ key: "hasUpperCase", label: "Atleast one uppercase", value: false },
	{ key: "hasLowerCase", label: "Atleast one lowercase", value: false },
	{ key: "hasNumber", label: "Atleast one number", value: false },
	{ key: "hasSpecialCharacter", label: "Atleast one special character", value: false },
];

export const ResetPassword = () => {
	const classes = useStyles();
	const history = useHistory();
	const { isDesktopView } = useWindowDimensions();

	const [showSuccess, setShowSuccess] = useState(false);
	const [passwordValidationData, setPasswordValidationData] = useState([...passwordValidationObj]);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	useEffect(() => {
		setIsPasswordValid(passwordValidationData.reduce((prev, current) => prev && current.value));
	}, [passwordValidationData]);

	const renderFormComponent = () => (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ password: "", confirmPassword: "" }}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
				<form className={classes.formContainer} onSubmit={handleSubmit}>
					<Popper open={isPasswordFocused} anchorEl={anchorEl} placement={isDesktopView ? "right-start" : "bottom-start"} transition className={classes.popper}>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={350}>
								<Paper className={classes.popperContainer}>
									<span className={classes.arrow} />
									<Typography mb={2} mt={3} variant="h5" color="black.80">
										Password must have
									</Typography>
									<Divider />
									<Grid container direction="column" mt={2}>
										{passwordValidationData.map(({ key, label, value }) => (
											<Grid key={key} item xs={12} mb={2}>
												<Box display="flex" alignItems="center" justifyContent="center" color={value ? "success.main" : "error.main"}>
													{value ? <Check size={24} /> : <X size={24} />}
													<Typography flexGrow={1} ml={2} variant="body2" color="black.80">
														{label}
													</Typography>
												</Box>
											</Grid>
										))}
									</Grid>
								</Paper>
							</Fade>
						)}
					</Popper>
					<TextField
						id="password"
						label="New Password"
						variant="outlined"
						fullWidth
						onChange={(e) => handlePasswordChange(e, () => handleChange(e))}
						onBlur={(e) => handlePasswordBlur(() => handleBlur(e))}
						onFocus={handlePasswordFocus}
						name="password"
						type="password"
						value={values.password}
						error={touched.password && Boolean(errors.password)}
						helperText={touched.password ? errors.password : ""}
						margin="normal"
						color={isPasswordValid ? "success" : ""}
						focused={isPasswordFocused || isPasswordValid}
					/>

					<TextField
						id="confirmPassword"
						label={isPasswordFocused && !isDesktopView ? "" : "Confirm Password"}
						variant="outlined"
						fullWidth
						onChange={handleChange}
						onBlur={handleBlur}
						name="confirmPassword"
						type="password"
						value={values.confirmPassword}
						error={touched.confirmPassword && Boolean(errors.confirmPassword)}
						helperText={touched.confirmPassword ? errors.confirmPassword : ""}
						margin="normal"
					/>
					<CustomButton disabled={showSuccess} type="submit" fullWidth={false} variant="contained">
						UPDATE MY PASSWORD
					</CustomButton>
				</form>
			)}
		</Formik>
	);

	const handlePasswordFocus = (event) => {
		setAnchorEl(event.currentTarget);
		setIsPasswordFocused(true);
	};

	const handlePasswordBlur = (callBack) => {
		callBack();
		setIsPasswordFocused(false);
	};

	const handlePasswordChange = (e, callBack) => {
		callBack();
		checkPasswordValidation(e.target.value);
	};

	const onFormSubmit = ({ values }) => {
		setShowSuccess(true);
	};

	const checkPasswordValidation = (value) => {
		let upperCasePattern = new RegExp("(?=.*?[A-Z])");
		let lowerCasePattern = new RegExp("(?=.*?[a-z])");
		let numberPattern = new RegExp("(?=.*?[0-9])");
		// eslint-disable-next-line
		let specialCharacterPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

		setPasswordValidation("has8Characters", value.length >= 8);
		setPasswordValidation("hasUpperCase", upperCasePattern.test(value));
		setPasswordValidation("hasLowerCase", lowerCasePattern.test(value));
		setPasswordValidation("hasNumber", numberPattern.test(value));
		setPasswordValidation("hasSpecialCharacter", specialCharacterPattern.test(value));
	};

	const setPasswordValidation = (key, flag) => {
		let tempDataValidation = [...passwordValidationData];
		tempDataValidation[findIndex(tempDataValidation, { key })].value = flag;
		setPasswordValidationData([...tempDataValidation]);
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
