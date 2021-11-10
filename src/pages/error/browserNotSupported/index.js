import { Typography } from "@mui/material";
import { ui_browserNotSupported } from "../../../config/Constants";
import { NoSupportLayout } from "../../../layouts/noSupport";

export const BrowserNotSupported = () => {
	return (
		<NoSupportLayout
			title="You seem to be using a browser that is not supported."
			subtext={
				<Typography variant="subtitle2" textAlign="center">
					Please login with a supported browser. You can check the list of compatible browsers here
				</Typography>
			}
		>
			<img src={ui_browserNotSupported} alt="device not supported" />
		</NoSupportLayout>
	);
};
