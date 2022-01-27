import { ButtonBase, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { updateConfigurationSetting } from "../../../appRedux/actions";

export const ConfigurationSingleTextFieldForm = ({ inputId, inputLabel, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);
	const dispatch = useDispatch();

	const { configurationSettings, updatedConfigurationSettings } = useSelector(({ configuration }) => configuration);

	const [isActive, setIsActive] = useState(false);

	const handleEdit = (setFieldValue) => {
		setIsActive(true);
		setFieldValue(inputId, configurationSettings[inputId]);
	};

	const onFormSubmit = (values) => {
		submitFunc();
		dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: values[inputId] }, { ...updatedConfigurationSettings, [inputId]: values[inputId] }));
		setIsActive(false);
	};

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{ [inputId]: configurationSettings[inputId] }}>
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
										handleEdit(setFieldValue);
									}}
								>
									<Typography ml={2} fontWeight={700} color="blue.main">
										Edit
									</Typography>
								</ButtonBase>
							</Stack>
							<Stack direction="row" alignItems="flex-start" justifyContent="space-between" flexGrow={1} width="100%">
								{isActive ? (
									<ConfigInput
										fullWidth
										autoFocus
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
								) : (
									<ConfigInput fullWidth autoFocus id={inputId} name={inputId} value={configurationSettings[inputId]} disabled={!isActive} />
								)}
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
