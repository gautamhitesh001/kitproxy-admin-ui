import { ButtonBase, IconButton, Stack, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box, width } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { icon_trash } from "../../../config/Constants";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
	listItem: {
		backgroundColor: theme.palette.blue["50"],
		width: "100%",
		borderRadius: 4,
		padding: "16px 24px",
	},
	whiteListPathWrapper: {
		flexGrow: 1,
		justifyContent: "flex-start !important",
	},
}));

const WhiteListedPathListItem = ({ value, index, removeWhiteListPath }) => {
	const classes = useStyles();
	const [isEditable, setIsEditable] = useState(false);
	return (
		<Stack direction="row" alignItems="center" className={classes.listItem}>
			{isEditable ? (
				<ConfigInput autoFocus={true} onBlur={() => setIsEditable(false)} fullWidth defaultValue={value} />
			) : (
				<ButtonBase className={classes.whiteListPathWrapper} disableRipple disableTouchRipple onClick={() => setIsEditable(true)}>
					<Typography mr={2} color="black.90">
						{value}
					</Typography>
				</ButtonBase>
			)}

			<IconButton disableRipple disableTouchRipple disableFocusRipple onClick={() => removeWhiteListPath(index)}>
				<img src={icon_trash} alt="trash" />
			</IconButton>
		</Stack>
	);
};

export const ConfigurationSingleTextFieldwithListForm = ({ inputId, inputPlaceholder, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);

	const [whiteListedPaths, setWhiteListedPaths] = useState([]);

	const onFormSubmit = (values, { resetForm, setSubmitting }) => {
		setWhiteListedPaths([...whiteListedPaths, values[inputId]]);
		resetForm({
			values: { [inputId]: "" },
		});
		setSubmitting(false);
		submitFunc();
	};

	const removeWhiteListPath = (index) => {
		let tempArr = [...whiteListedPaths];
		tempArr.splice(index, 1);
		setWhiteListedPaths(tempArr);
	};

	return (
		<Formik validateOnChange={false} validateOnBlur={false} onSubmit={onFormSubmit} validationSchema={schema} initialValues={initValues}>
			{({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting }) => {
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
								<ConfigSaveButton variant="contained" disabled={!values[inputId] || isSubmitting} type="submit" btnText="Save" />
							</Stack>
						</Stack>
						<Stack mt={2} spacing={1} direction="column">
							{whiteListedPaths.map((val, index) => (
								<WhiteListedPathListItem key={val} value={val} index={index} removeWhiteListPath={removeWhiteListPath} />
							))}
						</Stack>
					</form>
				);
			}}
		</Formik>
	);
};

WhiteListedPathListItem.propTypes = {
	value: PropTypes.string,
	removeWhiteListPath: PropTypes.func,
	index: PropTypes.number,
};

ConfigurationSingleTextFieldwithListForm.propTypes = {
	inputId: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
