import { Typography, Stack, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
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

export const ConfigurationCard = ({ id, title, subText, hasSwitch, hasDivider, formContent, subSettings }) => {
	const classes = useStyles();

	return (
		<Stack id={id} direction="column" className={classes.container}>
			<Stack direction="row" justifyContent="space-between">
				<Typography variant="h6" width="65%" fontWeight={600} color="grey.500">
					{title}
				</Typography>
				{hasSwitch ? (
					<Stack direction="row" justifyContent="center" maxWidth={150} flexGrow={1}>
						<CustomSwitch />
					</Stack>
				) : null}
			</Stack>
			<Typography variant="subtitle1" color="secondary.60">
				{subText}
			</Typography>
			{!hasDivider ? null : <Divider className={classes.divider} />}
			{!formContent ? null : (
				<Stack spacing="32px" direction="column">
					{formContent.map((value) => (
						<ConfigurationSettingForm key={value.id} formContent={value} />
					))}
				</Stack>
			)}
			{subSettings.length > 0
				? subSettings.map((setting, index) => (
						<Box id={setting.id} key={setting.id}>
							<Stack direction="column">
								<Typography variant="h6" fontWeight={600} color="grey.500">
									{setting.title}
								</Typography>
								<Typography mt={2} variant="subtitle1" color="secondary.60">
									{setting.subtext}
								</Typography>
								{!setting.form ? null : (
									<Stack mt={3} spacing="32px" direction="column">
										{setting.form.map((value) => (
											<ConfigurationSettingForm key={value.id} formContent={value} />
										))}
									</Stack>
								)}
							</Stack>
							{index < subSettings.length - 1 ? <Divider className={classes.divider} /> : null}
						</Box>
				  )) // eslint-disable-line no-mixed-spaces-and-tabs
				: null}
		</Stack>
	);
};

ConfigurationCard.propTypes = {
	title: PropTypes.string,
	subText: PropTypes.string,
	hasSwitch: PropTypes.bool,
	hasDivider: PropTypes.bool,
	id: PropTypes.string,
	formContent: PropTypes.array,
	subSettings: PropTypes.array,
};
