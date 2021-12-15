import { ButtonBase, Stack, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput, ConfigInputWithTags } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		display: "flex",
		flexDirection: "column",
	},
	btn: {
		textTransform: "none !important",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
	checkboxWrapper: {
		backgroundColor: "#FFFFFF",
		border: "1px solid #E6E6E6",
		borderRadius: 4,
		padding: 20,
	},
	checkBox: {
		border: "1px solid #E6D4D4",
		borderRadius: 4,
		width: 20,
		height: 20,
		"&:checked": {
			backgroundColor: "#5797EC",
			border: "1px solid #FFFFFF",
		},
	},
}));

export const ConfigurationSettingForm = ({ formContent }) => {
	const classes = useStyles();
	const schema = Yup.object().shape();

	const [isActive, setIsActive] = useState(false);
	const [settingTags, setSettingTags] = useState([]);

	useEffect(() => {
		return () => {
			setSettingTags([]);
			setIsActive(false);
		};
	}, []);

	useEffect(() => {
		console.log(settingTags);
	}, [settingTags]);

	const onFormSubmit = (values, { resetForm }) => {
		// handleFormSubmit();
		if (formContent.formType === "singleFieldWithTags") {
			let valueId = formContent.fields[0].id;
			let resetObj = {};
			formContent.fields.forEach((val) => {
				resetObj[val.id] = "";
			});
			if (values[valueId]) {
				setSettingTags([...settingTags, values[valueId]]);
			}
			resetForm({
				values: resetObj,
			});
		}

		setIsActive(false);
	};

	const removeTag = (index) => {
		let tempArr = [...settingTags];
		tempArr.splice(index, 1);
		setSettingTags(tempArr);
	};

	const handleCancel = () => {
		setIsActive(false);
	};

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={{}}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => {
				return (
					<form onSubmit={handleSubmit}>
						{formContent.formType === "singleField" || formContent.formType === "singleFieldWithTags" ? (
							<Stack
								direction={formContent.hasSaveCancelBtn ? "column" : "row"}
								alignItems={formContent.hasSaveCancelBtn ? "flex-start" : "flex-end"}
								justifyContent="space-between"
							>
								<Stack direction="row" alignItems="center" flexGrow={1} width="100%">
									{formContent.fields.map((val) => (
										<Stack key={val.id} width="100%" direction="column">
											<Stack direction="row">
												<Typography marginBottom="4px" variant="subtitle1" color="secondary.60">
													{formContent.formLabel}
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
											{val.type === "text" ? (
												<ConfigInput
													id={val.id}
													onChange={handleChange}
													onBlur={handleBlur}
													name={val.id}
													value={values[val.id]}
													error={touched[val.id] && Boolean(errors[val.id])}
													helperText={touched[val.id] ? errors[val.id] : ""}
													placeholder={val.placeholder}
													disabled={!isActive}
												/>
											) : val.type === "textWithTags" ? (
												<ConfigInputWithTags
													id={val.id}
													onChange={handleChange}
													onBlur={handleBlur}
													name={val.id}
													value={values[val.id]}
													error={touched[val.id] && Boolean(errors[val.id])}
													helperText={touched[val.id] ? errors[val.id] : ""}
													placeholder={val.placeholder}
													disabled={!isActive}
													tagsArray={settingTags}
													removeTag={removeTag}
													isActive={isActive}
												/>
											) : null}
										</Stack>
									))}
								</Stack>
								<Box mr={3} />

								{formContent.hasSaveCancelBtn ? (
									isActive ? (
										<Stack width="100%" mt={2} direction="row" justifyContent="right">
											<ConfigSaveButton variant="outlined" onClick={handleCancel} btnText="cancel" />
											<Box mr={2} />
											<ConfigSaveButton variant="contained" type="submit" btnText="Save" />
										</Stack>
									) : null
								) : (
									<ConfigSaveButton variant="contained" disabled={!isActive} type="submit" btnText="Save" />
								)}
							</Stack>
						) : formContent.formType === "multipleCheckbox" ? (
							<Stack
								direction={formContent.hasSaveCancelBtn ? "column" : "row"}
								alignItems={formContent.hasSaveCancelBtn ? "flex-start" : "flex-end"}
								justifyContent="space-between"
							>
								<Stack direction="row">
									<Typography marginBottom="4px" variant="subtitle1" color="secondary.60">
										{formContent.formLabel}
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
								<Grid spacing={2} container mt={1}>
									{formContent.fields.map((value) => (
										<Grid key={value.id} item xs={6}>
											<Stack className={classes.checkboxWrapper} alignItems="center" direction="row">
												<Field disabled={!isActive} className={classes.checkBox} type={value.type} name={value.id} />
												<Typography color="grey.500" ml={2}>
													{value.label}
												</Typography>
											</Stack>
										</Grid>
									))}
								</Grid>
								{isActive ? (
									<Stack width="100%" mt={2} direction="row" justifyContent="right">
										<ConfigSaveButton variant="outlined" onClick={handleCancel} btnText="cancel" />
										<Box mr={2} />
										<ConfigSaveButton variant="contained" type="submit" btnText="Save" />
									</Stack>
								) : null}
							</Stack>
						) : null}
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationSettingForm.propTypes = {
	formContent: PropTypes.object,
};
