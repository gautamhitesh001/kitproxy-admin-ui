import { ButtonBase, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { ConfigInputWithTags } from "../../inputs";

export const ConfigurationSingleTextFieldWithTagsForm = ({ inputId, inputLabel, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);

	const [isActive, setIsActive] = useState(false);
	const [settingTags, setSettingTags] = useState([]);

	useEffect(() => {
		return () => {
			setSettingTags([]);
			setIsActive(false);
		};
	}, []);

	const onFormSubmit = (values, { resetForm }) => {
		if (values[inputId]) {
			setSettingTags(
				values[inputId]
					.split(",")
					.map((val) => val.trim())
					.filter((val) => val)
			);
		}
		resetForm({
			values: { [inputId]: "" },
		});
		setIsActive(false);
		submitFunc();
	};

	const removeTag = (index) => {
		let tempArr = [...settingTags];
		tempArr.splice(index, 1);
		setSettingTags(tempArr);
	};

	const handleEdit = (setFieldValue) => {
		setIsActive(true);
		setFieldValue(inputId, settingTags.join(","));
		setSettingTags([]);
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
										handleEdit(setFieldValue);
									}}
								>
									<Typography ml={2} fontWeight={700} color="blue.main">
										Edit
									</Typography>
								</ButtonBase>
							</Stack>
							<Stack direction="row" alignItems="flex-start" justifyContent="space-between" flexGrow={1} width="100%">
								<ConfigInputWithTags
									fullWidth
									id={inputId}
									onChange={handleChange}
									onBlur={handleBlur}
									name={inputId}
									value={values[inputId]}
									error={Boolean(errors[inputId])}
									helperText={errors[inputId] ? errors[inputId] : "Please seperate values with commas"}
									placeholder={inputPlaceholder}
									disabled={!isActive}
									tagsArray={settingTags}
									removeTag={removeTag}
									isActive={isActive}
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

ConfigurationSingleTextFieldWithTagsForm.propTypes = {
	inputId: PropTypes.string,
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
