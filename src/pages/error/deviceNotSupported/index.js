import { Typography } from "@mui/material";
import { ui_deviceNotSupported } from "../../../config/Constants";
import { NoSupportLayout } from "../../../layouts/noSupport";

export const DeviceNotSupported = () => {
	return (
		<NoSupportLayout
			title="You seem to be using a device that is not supported yet!"
			subtext={
				<Typography variant="subtitle2" textAlign="center">
					Please switch to a desktop or other supported device by checking the List of supported Devices
				</Typography>
			}
		>
			<img src={ui_deviceNotSupported} alt="device not supported" />
		</NoSupportLayout>
	);
};
