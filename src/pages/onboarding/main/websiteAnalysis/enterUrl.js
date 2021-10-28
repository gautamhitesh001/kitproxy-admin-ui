import { TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { PrimaryButton } from "../../../../components/primaryButton";
import { makeStyles } from "@mui/styles";

const schema = Yup.object().shape({
	url: Yup.string()
		.required("Please enter url.")
		.matches(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/, "Please enter a valid url."),
});

const useStyles = makeStyles((theme) => ({
	formContainer: {
		width: 350,
		marginTop: 48,
		display: "flex",
		flexDirection: "column",
	},
}));

export const EnterUrlSection = ({ handleFormSubmit }) => {
	const classes = useStyles();

	const onFormSubmit = ({ values }) => {
		handleFormSubmit();
	};

	return (
		<>
			<Typography mt={12} variant="h3" color="secondary.main">
				Analyse your website
			</Typography>
			<Typography mt={2} variant="subtitle2" color="secondary.70">
				Enter your website link below to get vital report of your website.
			</Typography>
			<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ url: "" }}>
				{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => (
					<form className={classes.formContainer} onSubmit={handleSubmit}>
						<TextField
							id="url"
							label="Enter URL"
							variant="outlined"
							fullWidth
							onChange={handleChange}
							onBlur={handleBlur}
							name="url"
							value={values.url}
							error={touched.url && Boolean(errors.url)}
							helperText={touched.url ? errors.url : ""}
							size="small"
						/>
						<PrimaryButton type="submit" fullWidth variant="contained">
							RUN ANALYSIS
						</PrimaryButton>
					</form>
				)}
			</Formik>
		</>
	);
};

EnterUrlSection.propTypes = {
	handleFormSubmit: PropTypes.func,
};
