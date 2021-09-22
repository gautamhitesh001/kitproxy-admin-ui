import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 540,
			md: 768,
			lg: 991,
			xl: 1200,
			xxl: 1440,
		},
	},
	typography: {
		htmlFontSize: 16,
		fontFamily: "'Inter',sans-serif",
		h1: {
			fontSize: "52px",
			lineHeight: "64px",
			fontWeight: 600,
		},
		h2: {
			fontSize: "44px",
			lineHeight: "54px",
			fontWeight: 500,
		},
		h3: {
			fontSize: "32px",
			lineHeight: "42px",
			fontWeight: 600,
		},
		h4: {
			fontSize: "26px",
			lineHeight: "32px",
			fontWeight: 500,
		},
		h5: {
			fontSize: "20px",
			lineHeight: "26px",
			fontWeight: 600,
		},
		h6: {
			fontSize: "18px",
			lineHeight: "24px",
			fontWeight: 500,
		},
		subtitle1: {
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: 500,
		},
		subtitle2: {
			fontSize: "14px",
			lineHeight: "18px",
			fontWeight: 500,
		},
		body1: {
			fontSize: "16px",
			lineHeight: "24px",
			fontWeight: 400,
		},
		body2: {
			fontSize: "14px",
			lineHeight: "22px",
			fontWeight: 400,
		},
		button: {
			fontSize: "14px",
			lineHeight: "18px",
			fontWeight: 600,
		},
	},
	palette: {
		common: {
			black: "#25282B",
			white: "#FDFDFD",
		},
		primary: { main: "#F4672A" },
		secondary: { main: "#2D3648" },
		error: { main: "#FB4E4E" },
		warning: { main: "#F6A609" },
		success: { main: "#2DAF69" },
		text: { primary: "#25282B", secondary: "#52575C", disabled: "#E8E8E8" },
		divider: "#E8E8E8",
		action: {
			disabled: "#F9F9FA",
		},
		background: {
			paper: "#FDFDFD",
			default: "#F9F9FA",
		},
	},
	shape: {
		borderRadius: 10,
	},
});
