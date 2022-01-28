import { ButtonBase, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { ConfigSaveButton } from "../../buttons/configSaveButton";
import { ConfigInput } from "../../inputs";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { more_options } from "../../../config/Constants";
import { useEffect, useState } from "react";
import { ConfigurationModal } from "../../modals";
import { useDispatch, useSelector } from "react-redux";
import { getDataArray } from "../../../utils/dataManipulation";
import { updateConfigurationSetting } from "../../../appRedux/actions";

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
const ITEM_HEIGHT = 48;

const WhiteListedPathListItem = ({ value, index, removeWhiteListPath, values, handleChange, handleSave }) => {
	const classes = useStyles();
	const [isEditable, setIsEditable] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Stack direction="row" alignItems="center" className={classes.listItem}>
			<Typography mr={3} color="black.90">
				{("0" + (index + 1).toString()).slice(-2)}
			</Typography>
			{isEditable ? (
				<ConfigInput
					autoFocus={true}
					fullWidth
					defaultValue={value}
					onChange={handleChange}
					name={index}
					value={values[index]}
				/>
			) : (
				<ButtonBase className={classes.whiteListPathWrapper} disableRipple disableTouchRipple onClick={() => setIsEditable(true)}>
					<Typography mr={2} color="black.90">
						{value}
					</Typography>
				</ButtonBase>
			)}
			{isEditable ? (
				<ButtonBase
					disableRipple
					disableTouchRipple
					onClick={() => {
						handleSave(values, index);
						setIsEditable(false);
					}}
					disabled={!values[index] && values[index] == value}
				>
					<Typography ml={2} fontWeight={700} color="primary.main">
						Save
					</Typography>
				</ButtonBase>
			) : (
				<>
					<IconButton
						disableRipple
						disableTouchRipple
						disableFocusRipple
						aria-controls={open ? "long-menu" : undefined}
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
						aria-haspopup="true"
					>
						<img src={more_options} alt="more options" />
					</IconButton>
					<Menu
						id="long-menu"
						MenuListProps={{
							"aria-labelledby": "long-button",
						}}
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: "163px",
							},
						}}
						transformOrigin={{
							horizontal: "right",
						}}
						anchorOrigin={{
							vertical: "center",
							horizontal: "left",
						}}
					>
						<MenuItem
							key={"edit"}
							onClick={() => {
								setIsEditable(true);
								setAnchorEl(null);
							}}
						>
							Edit
						</MenuItem>
						<MenuItem
							key={"del"}
							onClick={() => {
								removeWhiteListPath(index);
								setAnchorEl(null);
							}}
						>
							Delete
						</MenuItem>
					</Menu>
				</>
			)}
		</Stack>
	);
};

export const ConfigurationSingleTextFieldwithListForm = ({ inputId, inputPlaceholder, title, submitFunc, initValues, validationSchema }) => {
	const schema = Yup.object().shape(validationSchema);
	const dispatch = useDispatch();

	const { configurationSettings, updatedConfigurationSettings } = useSelector(({ configuration }) => configuration);

	const [whiteListedPaths, setWhiteListedPaths] = useState([]);
	const [showlistModal, setShowlistModal] = useState(false);

	useEffect(() => {
		setWhiteListedPaths(configurationSettings && configurationSettings[inputId] ? getDataArray(configurationSettings[inputId]) : []);
	}, [configurationSettings]);

	const onFormSubmit = (values, { resetForm, setSubmitting }) => {
		dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: configurationSettings[inputId] + "|" + values[inputId] }));
		resetForm({
			values: { [inputId]: "" },
		});
		setSubmitting(false);
		submitFunc();
	};

	const removeWhiteListPath = (index) => {
		let tempArr = [...whiteListedPaths];
		tempArr.splice(index, 1);
		dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: tempArr.join("|") }, { ...updatedConfigurationSettings, [inputId]: tempArr.join("|") }));
	};
	const saveWhiteListPathChanges = (values, index) => {
		let tempArr = [...whiteListedPaths];
		tempArr.map((item, item_index) => {
			if (item_index == index) {
				tempArr[item_index] = values[index];
			}
		});
		dispatch(updateConfigurationSetting({ ...configurationSettings, [inputId]: tempArr.join("|") }, { ...updatedConfigurationSettings, [inputId]: tempArr.join("|") }));
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
							{whiteListedPaths
								.filter((val, index) => index < 3)
								.map((val, index) => (
									<WhiteListedPathListItem
										key={val}
										value={val}
										index={index}
										removeWhiteListPath={removeWhiteListPath}
										handleChange={handleChange}
										values={values}
										handleSave={saveWhiteListPathChanges}
									/>
								))}
							<Stack direction="row">
								<Typography flexGrow={1} color="grey.500">
									{"Showing " + whiteListedPaths.filter((val, index) => index < 3).length + "/" + whiteListedPaths.length}
								</Typography>
								{whiteListedPaths.length > 3 ? (
									<ButtonBase
										disableRipple
										disableTouchRipple
										onClick={() => {
											setShowlistModal(true);
										}}
									>
										<Typography ml={2} fontWeight={700} color="blue.main">
											View all
										</Typography>
									</ButtonBase>
								) : null}
							</Stack>
							{showlistModal ? (
								<ConfigurationModal title={title} open={showlistModal} handleClose={() => setShowlistModal(false)}>
									<Stack mt={2} spacing={1} direction="column">
										{whiteListedPaths.map((val, index) => (
											<WhiteListedPathListItem
												key={val}
												value={val}
												index={index}
												removeWhiteListPath={removeWhiteListPath}
												handleChange={handleChange}
												values={values}
												handleSave={saveWhiteListPathChanges}
											/>
										))}
									</Stack>
								</ConfigurationModal>
							) : null}
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
	handleChange: PropTypes.func,
	values: PropTypes.object,
	handleSave: PropTypes.func,
};

ConfigurationSingleTextFieldwithListForm.propTypes = {
	inputId: PropTypes.string,
	title: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	submitFunc: PropTypes.func,
	validationSchema: PropTypes.object,
	initValues: PropTypes.object,
};
