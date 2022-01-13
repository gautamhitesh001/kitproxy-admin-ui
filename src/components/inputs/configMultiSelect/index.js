import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

export const ConfigMultiSelect = (props) => {
	const getSelectProps = () => {
		let tempProps = { ...props };

		if (tempProps.optionsArray) {
			delete tempProps.optionsArray;
		}

		return { ...tempProps };
	};

	return (
		<Select {...getSelectProps()} onOpen={() => (window.location = `#${props.sectionId}`)}>
			<MenuItem disabled value="">
				<em>Placeholder</em>
			</MenuItem>
			{props.optionsArray.map((name) => (
				<MenuItem key={name} value={name}>
					{name}
				</MenuItem>
			))}
		</Select>
	);
};

ConfigMultiSelect.propTypes = {
	optionsArray: PropTypes.array,
	sectionId: PropTypes.string,
};
