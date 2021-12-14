import { Typography, Stack, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { ConfigurationSettingForm } from "../../forms";
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
		marginBottom: "24px !important",
	},
}));

export const ConfigurationCard = ({ id, title, subText, hasSwitch, hasDivider, formContent, doesHeaderHaveFormEdit }) => {
	const classes = useStyles();

	return (
		<Stack id={id} direction="column" className={classes.container}>
			<Typography variant="h6" fontWeight={600} color="grey.500">
				{title}
			</Typography>
			<Stack direction="row" justifyContent="space-between">
				<Typography mt={2} variant="subtitle1" width="65%" color="secondary.60">
					{subText}
				</Typography>
				{hasSwitch ? (
					<Stack direction="row" justifyContent="center" maxWidth={150} flexGrow={1}>
						<CustomSwitch />
					</Stack>
				) : null}
			</Stack>
			{!hasDivider ? null : <Divider className={classes.divider} />}
			{!formContent ? null : (
				<Stack spacing="32px" direction="column">
					{formContent.map((value) => (
						<ConfigurationSettingForm key={value.id} formContent={value} />
					))}
				</Stack>
			)}
		</Stack>
	);
};

ConfigurationCard.propTypes = {
	title: PropTypes.string,
	subText: PropTypes.string,
	hasSwitch: PropTypes.bool,
	hasDivider: PropTypes.bool,
	doesHeaderHaveFormEdit: PropTypes.bool,
	id: PropTypes.string,
	formContent: PropTypes.array,
};
