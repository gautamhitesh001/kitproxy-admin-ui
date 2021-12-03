import { Typography, Stack, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { CustomSwitch } from "../../switches";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		padding: 24,
		backgroundColor: theme.palette.white.main,
		borderRadius: 8,
	},
	divider: {
		marginTop: "24px !important",
		marginBottom: "20px !important",
	},
}));

export const ConfigurationCard = ({ title, subText, hasSwitch, extra }) => {
	const classes = useStyles();

	return (
		<Stack direction="column" className={classes.container}>
			<Typography variant="h6" fontWeight={600} color="grey.500">
				{title}
			</Typography>
			<Stack direction="row">
				<Typography mt={2} variant="subtitle1" width="65%" color="secondary.60">
					{subText}
				</Typography>
				{hasSwitch ? (
					<Stack direction="row" justifyContent="center" flexGrow={1}>
						<CustomSwitch />
					</Stack>
				) : null}
			</Stack>
			{!extra ? null : <Divider className={classes.divider} />}
			{!extra ? null : extra}
		</Stack>
	);
};

ConfigurationCard.propTypes = {
	title: PropTypes.string,
	subText: PropTypes.string,
	hasSwitch: PropTypes.bool,
	extra: PropTypes.node,
};
