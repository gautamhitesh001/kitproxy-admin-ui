import { createTheme } from "@mui/material/styles";
import InterRegularWoff from "../../assets/fonts/Inter/Inter-Regular.woff";
import InterRegularWoff2 from "../../assets/fonts/Inter/Inter-Regular.woff2";
import InterRegularTtf from "../../assets/fonts/Inter/Inter-Regular.ttf";
import InterMediumWoff from "../../assets/fonts/Inter/Inter-Medium.woff";
import InterMediumWoff2 from "../../assets/fonts/Inter/Inter-Medium.woff2";
import InterMediumTtf from "../../assets/fonts/Inter/Inter-Medium.ttf";
import InterSemiBoldWoff from "../../assets/fonts/Inter/Inter-SemiBold.woff";
import InterSemiBoldWoff2 from "../../assets/fonts/Inter/Inter-SemiBold.woff2";
import InterSemiBoldTtf from "../../assets/fonts/Inter/Inter-SemiBold.ttf";
import InterBoldWoff from "../../assets/fonts/Inter/Inter-Bold.woff";
import InterBoldWoff2 from "../../assets/fonts/Inter/Inter-Bold.woff2";
import InterBoldTtf from "../../assets/fonts/Inter/Inter-Bold.ttf";

let theme = createTheme({
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
		initial: {
			fontSize: "13px",
			lineHeight: "16px",
			fontWeight: 600,
		},
		small1: {
			fontSize: "12px",
			lineHeight: "16px",
			fontWeight: 500,
		},
		small2: {
			fontSize: "12px",
			lineHeight: "16px",
			fontWeight: 400,
		},
		small3: {
			fontSize: "11px",
			lineHeight: "14px",
			fontWeight: 400,
		},
	},
	palette: {
		common: {
			black: "#25282B",
			white: "#FDFDFD",
		},
		primary: { main: "#F4672A" },
		secondary: {
			main: "#3A4554",
			10: "#ECEDEE",
			20: "#D8DADD",
			30: "#C4C8CC",
			40: "#B0B5BB",
			50: "#9DA2AA",
			60: "#898F98",
			70: "#767D88",
			80: "#616A76",
			90: "#4E5866",
			100: "#3A4554",
		},
		black: {
			5: "#F9F9FA",
			10: "#E8E8E8",
			20: "#DBDDE0",
			40: "#CACCCF",
			60: "#A0A4A8",
			80: "#52575C",
		},
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
		borderRadius: 4,
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
			  font-family: 'Inter';
			  font-style: normal;
			  font-display: swap;
			  font-weight: 400;
			  src: local('Inter'), local('Inter-Regular'), url(${InterRegularWoff}) format('woff'), url(${InterRegularTtf}) format('ttf'),url(${InterRegularWoff2}) format('woff2');
			  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			}

			@font-face {
				font-family: 'Inter';
				font-style: normal;
				font-display: swap;
				font-weight: 500;
				src: local('Inter'), local('Inter-Medium'), url(${InterMediumWoff}) format('woff'), url(${InterMediumTtf}) format('ttf'),url(${InterMediumWoff2}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			  }

			  @font-face {
				font-family: 'Inter';
				font-style: normal;
				font-display: swap;
				font-weight: 600;
				src: local('Inter'), local('Inter-SemiBold'), url(${InterSemiBoldWoff}) format('woff'), url(${InterSemiBoldTtf}) format('ttf'),url(${InterSemiBoldWoff2}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			  }

			  @font-face {
				font-family: 'Inter';
				font-style: normal;
				font-display: swap;
				font-weight: 700;
				src: local('Inter'), local('Inter-Bold'), url(${InterBoldWoff}) format('woff'), url(${InterBoldTtf}) format('ttf'),url(${InterBoldWoff2}) format('woff2');
				unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
			  }
		  `,
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#FDFDFD",
				},
			},
		},
	},
});

export default theme;
