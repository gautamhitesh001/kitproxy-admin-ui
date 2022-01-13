import { Typography, Stack, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { get, has } from "lodash";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateConfigurationSetting } from "../../../appRedux/actions";
import { CustomSwitch } from "../../switches";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		padding: 24,
		backgroundColor: theme.palette.white.main,
		borderRadius: 8,
		marginBottom: 8,
	},
	divider: {
		marginTop: "24px !important",
		marginBottom: "24px !important",
	},
}));

export const ConfigurationCard = ({
	id,
	parentId,
	switchId,
	title,
	subText,
	formContent,
	subSettings,
	isSwitchBoolean,
	hasSettingParent,
	settingParentId,
	configKey,
	hasConfig,
}) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { configurationSettings } = useSelector(({ configuration }) => configuration);
	const { loginInfo } = useSelector(({ authentication }) => authentication);

	const handleSwitchChange = (e) => {
		let data = hasSettingParent ? get(configurationSettings, [settingParentId]) : get(configurationSettings, [parentId]);
		let switchValue = isSwitchBoolean ? e.target.checked : e.target.checked ? "enabled" : "disabled";
		if (hasSettingParent && hasConfig) {
			data[parentId][configKey][switchId] = switchValue;
		} else if (hasSettingParent && !hasConfig) {
			data[parentId][switchId] = switchValue;
		} else if (!hasSettingParent && hasConfig) {
			data[configKey][switchId] = switchValue;
		} else {
			data[switchId] = switchValue;
		}
		dispatch(updateConfigurationSetting(loginInfo.tokens.access.token, hasSettingParent ? settingParentId : parentId, data));
	};

	const showSwitch = () => {
		return hasSettingParent && hasConfig
			? configurationSettings[settingParentId][parentId][configKey] && has(configurationSettings[settingParentId][parentId][configKey], switchId)
			: hasSettingParent && !hasConfig
			? configurationSettings[settingParentId][parentId] && has(configurationSettings[settingParentId][parentId], switchId)
			: !hasSettingParent && hasConfig
			? configurationSettings[parentId][configKey] && has(configurationSettings[parentId][configKey], switchId)
			: configurationSettings[parentId] && has(configurationSettings[parentId], switchId);
	};

	const getSwitchValue = () => {
		return hasSettingParent && hasConfig
			? isSwitchBoolean
				? configurationSettings[settingParentId][parentId][configKey][switchId]
				: configurationSettings[settingParentId][parentId][configKey][switchId] === "enabled"
			: hasSettingParent && !hasConfig
			? isSwitchBoolean
				? configurationSettings[settingParentId][parentId][switchId]
				: configurationSettings[settingParentId][parentId][switchId] === "enabled"
			: !hasSettingParent && hasConfig
			? isSwitchBoolean
				? configurationSettings[parentId][configKey][switchId]
				: configurationSettings[parentId][configKey][switchId] === "enabled"
			: isSwitchBoolean
			? configurationSettings[parentId][switchId]
			: configurationSettings[parentId][switchId] === "enabled";
	};

	return (
		<Stack id={id} direction="column" className={classes.container}>
			<Stack direction="row" justifyContent="space-between">
				<Typography mb={3} variant="h6" width="65%" fontWeight={600} color="grey.500">
					{title}
				</Typography>
				<Stack direction="row" justifyContent="center" maxWidth={150} flexGrow={1}>
					{showSwitch() ? <CustomSwitch onChange={handleSwitchChange} checked={getSwitchValue()} /> : null}
				</Stack>
			</Stack>
			{subText !== "" ? (
				<Typography variant="subtitle1" color="secondary.60">
					{subText}
				</Typography>
			) : null}

			{!formContent ? null : (
				<Box mt={3}>
					<Stack spacing="32px" direction="column">
						{formContent.map((value) => (
							<Box key={value.id}>{value.form}</Box>
						))}
					</Stack>
				</Box>
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
											<Box key={value.id}>{value.form}</Box>
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
	hasDivider: PropTypes.bool,
	id: PropTypes.string,
	parentId: PropTypes.string,
	switchId: PropTypes.string,
	isSwitchBoolean: PropTypes.bool,
	formContent: PropTypes.array,
	subSettings: PropTypes.array,
	hasSettingParent: PropTypes.bool,
	settingParentId: PropTypes.string,
	hasConfig: PropTypes.bool,
	configKey: PropTypes.string,
};
