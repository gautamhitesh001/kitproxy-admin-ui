import { ButtonBase, Stack, ToggleButton, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { updateConfigurationSetting } from "../../../appRedux/actions";
import ToggleButtons from "../../toggleButtons";

export const ConfigurationSingleRadioOptions = ({ inputId, submitFunc, initValues, validationSchema, options }) => {
	const schema = Yup.object().shape(validationSchema);
	const dispatch = useDispatch();

	const { configurationSettings } = useSelector(({ configuration }) => configuration);

	const [selected, setSelected] = useState();

	useEffect(() => {
		let selectedVal = configurationSettings ? configurationSettings[inputId]?.toUpperCase() : "";
		setSelected(selectedVal);
	}, [configurationSettings]);

	const toggleOption = (event, newValue) => {
		setSelected(newValue);
		dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: newValue?.toLowerCase() }));
	};

	const onFormSubmit = (values) => {
		// submitFunc();
	};

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => {
				return (
					<form onSubmit={handleSubmit}>
						<ToggleButtons selected={selected} handleChange={toggleOption}>
							{options?.map((option, index) => (
								<ToggleButton key={index} disableRipple disableFocusRipple value={option}>
									{option}
								</ToggleButton>
							))}
						</ToggleButtons>
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationSingleRadioOptions.propTypes = {
	inputId: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
	options: PropTypes.array,
};
