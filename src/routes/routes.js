import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";
import { ConfigurationPage } from "../pages/configuration";
import { Dashboard, DashboardDocumentation, DnsSettingError, IncompleteProjectSetup } from "../pages/dashboard";
import { BrowserNotSupported, DeviceNotSupported } from "../pages/error";
import { OnboardingMain, OnboardingWelcome } from "../pages/onboarding";
import { Login, Register, ResetPassword, ResetPasswordEmailVerification } from "../pages/registration";

const NotFoundRedirect = () => <Redirect to="/" />;
// const RestrictedRoute = ({ component: Component, location, allowedUsers, ...rest }) => {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				isUserAuthenticated(allowedUsers) ? (
// 					<Component {...props} />
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/logout",
// 							state: { from: location },
// 						}}
// 					/>
// 				)
// 			}
// 		/>
// 	);
// };

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/login" />} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/reset-password" component={ResetPassword} />
					<Route exact path="/reset-password/email-verification" component={ResetPasswordEmailVerification} />
					<Route exact path="/onboarding" component={OnboardingMain} />
					<Route exact path="/onboarding/welcome" component={OnboardingWelcome} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/dashboard/documentation" component={DashboardDocumentation} />
					<Route exact path="/dashboard/dns-setting-error" component={DnsSettingError} />
					<Route exact path="/dashboard/incomplete-project-setup" component={IncompleteProjectSetup} />
					<Route exact path="/configuration" component={ConfigurationPage} />
					<Route exact path="/device-not-supported" component={DeviceNotSupported} />
					<Route exact path="/browser-not-supported" component={BrowserNotSupported} />
					<Route component={NotFoundRedirect} />
				</Switch>
			</Router>
		);
	}
}

export { AppRouter };
