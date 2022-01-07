import { Stack } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

export const ConfigurationSingleTextFieldwithListForm = ({ inputId, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);

	const onFormSubmit = (values) => {
		submitFunc();
	};

	return (
		<Formik validateOnChange={false} validateOnBlur={false} onSubmit={onFormSubmit} validationSchema={schema} initialValues={initValues}>
			{({ handleSubmit, handleChange, handleBlur, values, errors }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Stack width="100%" direction="column">
							<Stack direction="row" alignItems="flex-start" justifyContent="space-between" flexGrow={1} width="100%">
								<ConfigInput
									fullWidth
									id={inputId}
									onChange={handleChange}
									onBlur={handleBlur}
									name={inputId}
									value={values[inputId]}
									error={Boolean(errors[inputId])}
									helperText={errors[inputId] ? errors[inputId] : ""}
									placeholder={inputPlaceholder}
								/>
								<Box mr={2} />
								<ConfigSaveButton variant="contained" disabled={!values[inputId]} type="submit" btnText="Save" />
							</Stack>
						</Stack>
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationSingleTextFieldwithListForm.propTypes = {
	inputId: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
