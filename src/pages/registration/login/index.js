import { RegistrationCard } from "../../../components/registration-card";
import { RegistrationLayout } from "../../../layouts/registration";

export const Login = () => {
	return (
		<RegistrationLayout>
			<RegistrationCard headingText="Welcome Back!" bottomText="New to Kitsune? " linkText="Create Your Account Here" />
		</RegistrationLayout>
	);
};
