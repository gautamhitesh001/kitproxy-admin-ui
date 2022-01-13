import { ButtonBase, Chip, FormControl, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigMultiSelect } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

import countries from "../../../config/data/countries.json";
import { X } from "react-feather";
import { makeStyles } from "@mui/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const useStyles = makeStyles((theme) => ({
	tagWrapper: {
		backgroundColor: theme.palette.blue["50"],
		borderRadius: 4,
		padding: 8,
		marginRight: 4,
		marginBottom: 4,
	},
}));

const Tag = ({ value, index, removeTag, isActive }) => {
	const classes = useStyles();

	return (
		<Box className={classes.tagWrapper}>
			<Stack direction="row">
				<Typography color="black.90" mr="4px">
					{value}
				</Typography>
				{isActive ? (
					<ButtonBase onClick={() => removeTag(index)} disableRipple disableTouchRipple>
						<X size={16} />
					</ButtonBase>
				) : null}
			</Stack>
		</Box>
	);
};

export const ConfigurationMultiselectWithTags = ({ sectionId, inputId, extraHeader, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);

	const [selectValue, setSelectValue] = useState(null);
	const [settingTags, setSettingTags] = useState([]);
	const [isActive, setIsActive] = useState(false);

	const onFormSubmit = (values, { resetForm }) => {
		if (values[inputId]) {
			setSettingTags(values[inputId]);
		}
		resetForm({
			values: { [inputId]: [] },
		});
		submitFunc();
		setSelectValue(null);
	};

	const handleSelectChange = (e, callback) => {
		const {
			target: { value },
		} = e;
		callback(inputId, typeof value === "string" ? value.split(",") : value);
		setSelectValue(typeof value === "string" ? value.split(",") : value);
	};

	const removeTag = (index) => {
		let tempArr = [...settingTags];
		tempArr.splice(index, 1);
		setSettingTags(tempArr);
	};

	// const handleEdit = () => {
	//     setIsActive(!isActive);
	// };

	return (
		<Formik onSubmit={onFormSubmit} validationSchema={schema} initialValues={initValues}>
			{({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, isSubmitting, setFieldValue }) => {
				return (
					<form onSubmit={handleSubmit}>
						<Stack width="100%" direction="column">
							<Stack direction="row" alignItems="flex-start" justifyContent="space-between" flexWrap="wrap" width="100%">
								<FormControl sx={{ width: 600 }}>
									<ConfigMultiSelect
										sectionId={sectionId}
										multiple
										fullWidth
										displayEmpty
										id={inputId}
										MenuProps={MenuProps}
										input={<OutlinedInput />}
										onChange={(e) => handleSelectChange(e, setFieldValue)}
										onBlur={handleBlur}
										name={inputId}
										value={values[inputId] ? values[inputId] : []}
										renderValue={(selected) => {
											if (selected.length === 0) {
												return (
													<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
														<Typography color="secondary.40">{inputPlaceholder}</Typography>
													</Box>
												);
											}

											return (
												<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
													{selected.map((value) => (
														<Chip key={value} label={value} />
													))}
												</Box>
											);
										}}
										error={Boolean(errors[inputId])}
										helperText={errors[inputId] ? errors[inputId] : ""}
										optionsArray={countries.map((val) => val.name)}
									/>
								</FormControl>
								<Box mr={2} />
								<ConfigSaveButton variant="contained" disabled={!selectValue} type="submit" btnText="Save" />
							</Stack>
							<Stack mt={3} direction="row">
								<Typography variant="h6" color="grey.500" fontWeight={600}>
									{extraHeader}
								</Typography>
								<ButtonBase
									disableRipple
									disableTouchRipple
									onClick={() => {
										setIsActive(!isActive);
									}}
								>
									<Typography ml={2} fontWeight={700} color="blue.main">
										Edit
									</Typography>
								</ButtonBase>
							</Stack>
							<Stack flexWrap="wrap" direction="row" mt={3}>
								{settingTags.map((val, index) => (
									<Tag isActive={isActive} removeTag={removeTag} value={val} key={val + index} index={index} />
								))}
							</Stack>
						</Stack>
					</form>
				);
			}}
		</Formik>
	);
};

ConfigurationMultiselectWithTags.propTypes = {
	sectionId: PropTypes.string,
	inputId: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
	extraHeader: PropTypes.string,
};

Tag.propTypes = {
	value: PropTypes.string,
	index: PropTypes.number,
	removeTag: PropTypes.func,
	isActive: PropTypes.bool,
};
