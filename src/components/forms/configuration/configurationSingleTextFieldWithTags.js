import { ButtonBase, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { ConfigInput } from "../../inputs";
import { useDispatch, useSelector } from "react-redux";
import { getDataArray } from "../../../utils/dataManipulation";
import { updateConfigurationSetting } from "../../../appRedux/actions";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	tagWrapper: {
		backgroundColor: theme.palette.blue["50"],
		borderRadius: 4,
		padding: 8,
		marginRight: 4,
		marginBottom: 7,
	},
	tagText: {
		maxWidth: 300,
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
	tagContainer: {
		display: "flex",
		flexWrap: "wrap",
		padding: "7px 10px 0 10px",
		border: "1px solid #E6E6E6",
		borderRadius: 4,
		width: "100%",
		minHeight: 54
	},
}));

export const ConfigurationSingleTextFieldWithTagsForm = ({ inputId, inputLabel, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const classes = useStyles();
	const schema = Yup.object().shape(validationSchema);
	const dispatch = useDispatch();

	const { configurationSettings, updatedConfigurationSettings } = useSelector(({ configuration }) => configuration);

	const [isActive, setIsActive] = useState(false);
	const [settingTags, setSettingTags] = useState([]);

	useEffect(() => {
		return () => {
			setIsActive(false);
		};
	}, []);

	useEffect(() => {
		setSettingTags(configurationSettings[inputId] ? getDataArray(configurationSettings[inputId]) : []);
	}, [configurationSettings]);

	const onFormSubmit = (values, { resetForm }) => {
		if (values[inputId]) {
			let finalValue = values[inputId]
				.split(",")
				.map((val) => val.trim())
				.filter((val) => val)
				.join("|");

			dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: finalValue }, { ...updatedConfigurationSettings, [inputId]: finalValue }));
		}
		resetForm({
			values: { [inputId]: "" },
		});
		setIsActive(false);
		submitFunc();
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
								{!isActive ? (
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
								) : null}
							</Stack>
							<Stack direction="row" alignItems="flex-start" justifyContent="space-between" flexGrow={1} width="100%">
								{isActive ? (
									<ConfigInput
										fullWidth
										id={inputId}
										onChange={handleChange}
										onBlur={handleBlur}
										name={inputId}
										value={values[inputId]}
										error={Boolean(errors[inputId])}
										helperText={errors[inputId] ? errors[inputId] : "Please seperate values with commas"}
										placeholder={inputPlaceholder}
										multiline
										autoFocus
									/>
								) : (
									<Box className={classes.tagContainer}>
										{settingTags.map((value, index) => (
											<Box key={value + index} className={classes.tagWrapper}>
												<Stack direction="row">
													<Typography className={classes.tagText} maxWidth={250} color="black.90" mr="4px">
														{value}
													</Typography>
												</Stack>
											</Box>
										))}
									</Box>
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

ConfigurationSingleTextFieldWithTagsForm.propTypes = {
	inputId: PropTypes.string,
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
