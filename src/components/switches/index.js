import * as React from "react";
import { styled } from "@mui/system";
import { SwitchUnstyled, switchUnstyledClasses } from "@mui/material";

const Root = styled("span")`
	font-size: 0;
	position: relative;
	display: inline-block;
	width: 50px;
	height: 27px;
	margin: 10px;
	cursor: pointer;

	&.${switchUnstyledClasses.disabled} {
		opacity: 0.4;
		cursor: not-allowed;
	}

	& .${switchUnstyledClasses.track} {
		background: #b3c3d3;
		border-radius: 13px;
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
	}

	& .${switchUnstyledClasses.thumb} {
		display: block;
		width: 23px;
		height: 23px;
		top: 2px;
		left: 2px;
		border-radius: 16px;
		background-color: #fff;
		position: relative;
		transition: all 200ms ease;
	}

	&.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
	}

	&.${switchUnstyledClasses.checked} {
		.${switchUnstyledClasses.thumb} {
			left: 25px;
			top: 2px;
			background-color: #fff;
		}

		.${switchUnstyledClasses.track} {
			background: #5797ec;
		}
	}

	& .${switchUnstyledClasses.input} {
		cursor: inherit;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: 1;
		margin: 0;
	}
`;

export const CustomSwitch = (props) => {
	const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

	return <SwitchUnstyled component={Root} {...label} {...props} />;
};
