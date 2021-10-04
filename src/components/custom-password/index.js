import { Divider, Fade, Grid, IconButton, InputAdornment, Paper, Popper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Check, Eye, EyeOff, X } from "react-feather";
import useWindowDimensions from "../../utils/windowDimensions";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	popper: {
		marginLeft: "80px !important",
		[theme.breakpoints.down("xl")]: {
			marginLeft: "0 !important",
			marginTop: "16px !important",
		},
	},
	popperContainer: {
		position: "relative",
		background: "#fdfdfd",
		border: "1px solid #c4c4c4 !important",
		width: 325,
		paddingRight: 30,
		paddingLeft: 30,
		display: "flex",
		flexDirection: "column",
		borderRadius: "10px !important",
		boxShadow: "none !important",
		"&:before": {
			right: "100%",
			top: 25,
			border: "solid transparent",
			content: "''",
			height: 0,
			width: 0,
			position: "absolute",
			pointerEvents: "none",

			borderColor: "rgba(196, 196, 196, 0)",
			borderRightColor: "#c4c4c4",
			borderWidth: 9,
			marginTop: -11,

			[theme.breakpoints.down("xl")]: {
				top: "auto",
				bottom: "100%",
				left: 25,
				right: "auto",

				borderRightColor: "transparent",
				borderBottomColor: "#c4c4c4",
				marginTop: 0,
				marginLeft: -11,
			},
		},
		"&:after": {
			right: "100%",
			top: 25,
			border: "solid transparent",
			content: "''",
			height: 0,
			width: 0,
			position: "absolute",
			pointerEvents: "none",

			borderColor: "rgba(253, 253, 253, 0)",
			borderRightColor: "#fdfdfd",
			borderWidth: 8,
			marginTop: -10,

			[theme.breakpoints.down("xl")]: {
				top: "auto",
				bottom: "100%",
				left: 25,
				right: "auto",

				borderRightColor: "transparent",
				borderBottomColor: "#fdfdfd",
				marginTop: 0,
				marginLeft: -10,
			},
		},
	},
}));

export const CustomPassword = (props) => {
	const { isDesktopView } = useWindowDimensions();
	const classes = useStyles();
	const { passwordValidationData, hasValidationPopper, isPasswordValid, handleOnBlur, handlePasswordFocusChange } = props;

	const [showPassword, setShowPassword] = useState(false);
	const [isPasswordFocused, setIsPasswordFocused] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordFocus = (event) => {
		setAnchorEl(event.currentTarget);
		setIsPasswordFocused(true);
		if (hasValidationPopper && handlePasswordFocusChange) {
			handlePasswordFocusChange(true);
		}
	};

	const handlePasswordBlur = (callBack) => {
		callBack();
		setIsPasswordFocused(false);
		if (hasValidationPopper && handlePasswordFocusChange) {
			handlePasswordFocusChange(false);
		}
	};

	const getTextFieldProps = () => {
		let textFieldProps = { ...props };
		delete textFieldProps.passwordValidationData;
		delete textFieldProps.hasValidationPopper;
		delete textFieldProps.isPasswordValid;
		delete textFieldProps.handleOnBlur;
		delete textFieldProps.handlePasswordFocusChange;

		return textFieldProps;
	};

	return (
		<Box>
			{hasValidationPopper ? (
				<Popper
					open={isPasswordFocused}
					anchorEl={anchorEl}
					placement={isDesktopView ? "right-start" : "bottom-start"}
					transition
					className={classes.popper}
					disablePortal={false}
					modifiers={[
						{
							name: "flip",
							enabled: false,
							options: {
								altBoundary: false,
								rootBoundary: "viewport",
								padding: 0,
							},
						},
						{
							name: "preventOverflow",
							enabled: true,
							options: {
								altAxis: false,
								altBoundary: false,
								tether: false,
								rootBoundary: "viewport",
								padding: 0,
								mainAxis: false,
							},
						},
					]}
				>
					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper className={classes.popperContainer}>
								<Typography mb={2} mt={3} variant="h5" color="black.80">
									Password must have
								</Typography>
								<Divider />
								<Grid container direction="column" mt={2}>
									{passwordValidationData.map(({ key, label, value }) => (
										<Grid key={key} item xs={12} mb={2}>
											<Box display="flex" alignItems="center" justifyContent="center" color={value ? "success.main" : "error.main"}>
												{value ? <Check size={24} /> : <X size={24} />}
												<Typography flexGrow={1} ml={2} variant="body2" color="black.80">
													{label}
												</Typography>
											</Box>
										</Grid>
									))}
								</Grid>
							</Paper>
						</Fade>
					)}
				</Popper>
			) : null}
			<TextField
				{...getTextFieldProps()}
				variant="outlined"
				type={showPassword ? "text" : "password"}
				color={isPasswordValid ? "success" : ""}
				focused={isPasswordFocused || isPasswordValid}
				onBlur={(e) => handlePasswordBlur(() => handleOnBlur(e))}
				onFocus={handlePasswordFocus}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setShowPassword(!showPassword)}
								onMouseDown={handleMouseDownPassword}
								edge="end"
								style={{ marginRight: 1 }}
							>
								{showPassword ? <EyeOff /> : <Eye />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};

CustomPassword.propTypes = {
	passwordValidationData: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			value: PropTypes.bool.isRequired,
		})
	),
	hasValidationPopper: PropTypes.bool,
	isPasswordValid: PropTypes.bool,
	handleOnBlur: PropTypes.func.isRequired,
	handlePasswordFocusChange: PropTypes.func,
};
