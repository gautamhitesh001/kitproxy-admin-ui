import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const RestrictedRoute = ({ component: Component, ...rest }) => {
    const { isUserLoggedIn } = useSelector(({ authentication }) => authentication);

	return (
		<Route
			{...rest}
			render={(props) =>
				isUserLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)
			}
		/>
	);
};

export default RestrictedRoute;

RestrictedRoute.propTypes = {
    component: PropTypes.Component,
};