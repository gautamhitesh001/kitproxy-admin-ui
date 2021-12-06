import { InputAdornment, Stack } from "@mui/material";
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
}));

export const ConfigRateLimitingForm = () => {
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
						<Stack direction="row" alignItems="center" maxWidth="65%">
							<ConfigInput
								id="rateLimit"
								onChange={handleChange}
								onBlur={handleBlur}
								name="rateLimit"
								value={values.rateLimit}
								error={touched.rateLimit && Boolean(errors.rateLimit)}
								helperText={touched.rateLimit ? errors.rateLimit : ""}
								inputLabel="Rate Limit"
								inputWidth={225}
								placeholder="eg 50"
							/>
							<Box ml={3} />
							<ConfigInput
								id="periodOfTime"
								onChange={handleChange}
								onBlur={handleBlur}
								name="periodOfTime"
								value={values.periodOfTime}
								error={touched.periodOfTime && Boolean(errors.periodOfTime)}
								helperText={touched.periodOfTime ? errors.periodOfTime : ""}
								inputLabel="Period of time"
								inputWidth={225}
								placeholder="eg 20"
								InputProps={{
									endAdornment: <InputAdornment position="end">mins</InputAdornment>,
								}}
							/>
						</Stack>
						<ConfigSaveButton disabled={!isActive} isActive={isActive} type="submit" btnText="Save" />
					</Stack>
				</form>
			)}
		</Formik>
	);
};
