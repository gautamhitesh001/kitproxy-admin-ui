import { Button, Stack } from "@mui/material";
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

export const ConfigAddUserAgent = () => {
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
								id="userAgents"
								onChange={handleChange}
								onBlur={handleBlur}
								name="userAgents"
								value={values.userAgents}
								error={touched.userAgents && Boolean(errors.userAgents)}
								helperText={touched.userAgents ? errors.userAgents : ""}
								inputLabel="Add User Agents"
								// inputWidth={225}
								placeholder="eg"
							/>
						</Stack>
						<ConfigSaveButton disabled={!isActive} isActive={isActive} type="submit" btnText="Save" />
					</Stack>
					<Button sx={{ textTransform: "none" }}>Add more</Button>
				</form>
			)}
		</Formik>
	);
};
