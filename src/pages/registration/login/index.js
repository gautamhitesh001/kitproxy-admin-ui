import { Typography, Box } from "@mui/material";
import { RegistrationLayout } from "../../../layouts/registration";

export const Login = () => {
	return (
		<RegistrationLayout>
			<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%">
				<Typography variant="h3">Welcome Back!</Typography>
			</Box>
		</RegistrationLayout>
	);
};
