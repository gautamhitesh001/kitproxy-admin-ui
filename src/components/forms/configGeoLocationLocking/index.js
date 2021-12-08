import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs/configInput";

const schema = Yup.object().shape({
	url: Yup.string()
		.required("Please enter url.")
		.matches(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/, "Please enter a valid url."),
});

const useStyles = makeStyles((theme) => ({
	formContainer: {
		display: "flex",
		flexDirection: "column",
	},
	country: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		backgroundColor: "#FFFFFF",
		border: "1px solid #E6E6E6",
		width: 150,
		height: 60,
	},
}));

export const ConfigGeoLocationLockingForm = () => {
	const classes = useStyles();

	const [isActive, setIsActive] = useState(false);

	const onFormSubmit = ({ values }) => {
		// handleFormSubmit();
	};

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ url: "" }}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
				<form onSubmit={handleSubmit}>
					<Stack direction="row" alignItems="flex-end" justifyContent="space-between">
						<Stack direction="row" alignItems="center" flexGrow={1} maxWidth="65%">
							<ConfigInput
								id="addLocations"
								onChange={handleChange}
								onBlur={handleBlur}
								name="addLocations"
								value={values.addLocations}
								error={touched.addLocations && Boolean(errors.addLocations)}
								helperText={touched.addLocations ? errors.addLocations : ""}
								inputLabel="Add Locations"
								// inputWidth={225}
								placeholder="eg"
							/>
						</Stack>
						<ConfigSaveButton disabled={!isActive} isActive={isActive} btnText="Save" />
					</Stack>
					<Stack direction="column" marginTop="24px">
						<Stack direction="row">
							<Typography marginRight="12px" variant="subtitle1" color="secondary.60">
								Countries added
							</Typography>
							<ButtonBase disableTouchRipple disableRipple>
								<Typography variant="subtitle1" color="primary.main">
									Edit
								</Typography>
							</ButtonBase>
						</Stack>
						<Stack marginTop="8px" spacing="12px" direction="row" alignItems="center">
							<Box className={classes.country}>
								<Typography variant="body1" color="secondary.main">
									Argentina
								</Typography>
							</Box>
							<Box className={classes.country}>
								<Typography variant="body1" color="secondary.main">
									Zimbabwe
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</form>
			)}
		</Formik>
	);
};
