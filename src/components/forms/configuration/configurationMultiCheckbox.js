import { ButtonBase, Stack, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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

export const ConfigurationMultiCheckboxForm = ({ inputLabel, submitFunc, initValues, validationSchema, checkboxFields, id }) => {
	const classes = useStyles();
	const schema = Yup.object().shape(validationSchema);

	const [isActive, setIsActive] = useState(false);

	const { configurationSettings } = useSelector(({ configuration }) => configuration);

	useEffect(() => {
		return () => {
			setIsActive(false);
		};
	}, []);

	const getCheckboxId = (name) => {
		return name.split("-").join("");
	};

	const onFormSubmit = (values) => {
		submitFunc();
		setIsActive(false);
	};

	const handleCancel = () => {
		setIsActive(false);
	};

	const getCheckedValue = (value) => {
		return configurationSettings[id] && configurationSettings[id].includes(value);
	}

	const handleOnChange = (evt, value) => {
		console.log(evt.target.checked, value)
	}

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={initValues}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Stack direction="column" alignItems="flex-start" justifyContent="space-between">
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
							<Grid spacing={2} container mt={1}>
								{checkboxFields.map((value) => (
									<Grid key={getCheckboxId(value)} item xs={6}>
										<Stack className={classes.checkboxWrapper} alignItems="center" direction="row">
											<Field disabled={!isActive} className={classes.checkBox} type="checkbox" name={getCheckboxId(value)} checked={getCheckedValue(value)} onChange={(evt) => handleOnChange(evt, value)} />
											<Typography color="grey.500" ml={2}>
												{value}
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
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationMultiCheckboxForm.propTypes = {
	inputLabel: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
	checkboxFields: PropTypes.array,
	id: PropTypes.string,
};
