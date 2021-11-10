import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	layoutContainer: {
		minHeight: "100vh",
		backgroundColor: "#F5F6F8",
		overflow: "auto",
		display: "flex",
		position: "relative",
	},
	contentWrapper: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	childWrapper: {
		minHeight: "calc(100% - 80px) !important",
		padding: 32,
	},
}));

export const NoSupportLayout = ({ children, title, subtext }) => {
	const classes = useStyles();

	return (
		<Box className={classes.layoutContainer}>
			<Box component="main" className={classes.contentWrapper}>
				<Stack mb={8} maxWidth={500} direction="column" alignItems="center">
					<Typography textAlign="center" variant="h4" color="secondary.main" mb={3}>
						{title}
					</Typography>
					{subtext}
				</Stack>
				{children}
			</Box>
		</Box>
	);
};

NoSupportLayout.propTypes = {
	children: PropTypes.node,
	title: PropTypes.text,
	subtext: PropTypes.node,
};
