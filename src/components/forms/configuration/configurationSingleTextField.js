import { ButtonBase, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

export const ConfigurationSingleTextFieldForm = ({ inputId, inputLabel, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);

	const [isActive, setIsActive] = useState(false);

	const onFormSubmit = (values) => {
		submitFunc();
		setIsActive(false);
	};

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={initValues}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Stack width="100%" direction="column">
							<Stack direction="row">
								<Typography marginBottom="4px" variant="subtitle1" color="secondary.60">
									{inputLabel}
								</Typography>
								<ButtonBase
									disableRipple
									disableTouchRipple
									onClick={() => {
										setIsActive(true);
									}}
								>
									<Typography ml={2} fontWeight={700} color="blue.main">
										Edit
									</Typography>
								</ButtonBase>
							</Stack>
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
									disabled={!isActive}
								/>
								<Box mr={2} />
								<ConfigSaveButton variant="contained" disabled={!isActive} type="submit" btnText="Save" />
							</Stack>
						</Stack>
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationSingleTextFieldForm.propTypes = {
	inputId: PropTypes.string,
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
