import React, { useState } from "react";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
// import { ToggleButton } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	"& .MuiToggleButtonGroup-grouped": {
		border: "1px solid #E6E6E6",
	},
	"& .MuiToggleButton-root": {
		width: "201px",
		height: "57px",
		fontSize: "16px",
		justifyContent: "flex-start",
		paddingLeft: 25,
		paddingRight: 27,
	},
	"& .MuiToggleButton-root.Mui-selected": {
		backgroundColor: "#F4672A !important",
		border: "1px solid #E6E6E6",
		boxSizing: "border-box",
		borderRadius: "4px",
		color: "#fff",
		fontWeight: "bold",
		lineHeight: "24px",
		letterSpacing: "0.1px",
	},
	"& .MuiButtonBase-root-MuiToggleButton-root": {
		justifyContent: "flex-start",
	},
}));

export default function ToggleButtons({ children, handleChange, selected }) {
	return (
		<StyledToggleButtonGroup value={selected} exclusive onChange={handleChange}>
			{children}
		</StyledToggleButtonGroup>
	);
}
ToggleButtons.propTypes = {
	children: PropTypes.node,
	handleChange: PropTypes.func,
	selected: PropTypes.string,
};
