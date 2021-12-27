import { ButtonBase, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { X } from "react-feather";

const useStyles = makeStyles((theme) => ({
	input: {
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"&:hover fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#E6E6E6 !important",
			},
			"& .Mui-disabled": {
				"-webkit-text-fill-color": "#898F98 !important",
			},
		},
		"& MuiFormHelperText-root.Mui-disabled": {
			color: "#52575C",
		},
	},
	tagWrapper: {
		backgroundColor: "#F5F9FE",
		borderRadius: 4,
		padding: 8,
		marginRight: 4,
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

export const ConfigInputWithTags = (props) => {
	const classes = useStyles();
	const { tagsArray, removeTag, isActive } = props;
	const getInputProps = () => {
		let tempProps = { ...props };

		if (tempProps.tagsArray) {
			delete tempProps.tagsArray;
		}
		if (tempProps.removeTag) {
			delete tempProps.removeTag;
		}
		if (tempProps.isActive) {
			delete tempProps.isActive;
		}

		return { ...tempProps };
	};

	return (
		<Box flexGrow={1}>
			<TextField
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{tagsArray.map((val, index) => (
								<Tag isActive={isActive} removeTag={removeTag} value={val} key={val + index} index={index} />
							))}
						</InputAdornment>
					),
				}}
				fullWidth
				classes={{ root: classes.input }}
				{...getInputProps()}
			/>
		</Box>
	);
};

ConfigInputWithTags.propTypes = {
	tagsArray: PropTypes.array,
	removeTag: PropTypes.func,
	isActive: PropTypes.bool,
};

Tag.propTypes = {
	value: PropTypes.string,
	index: PropTypes.number,
	removeTag: PropTypes.func,
	isActive: PropTypes.bool,
};
