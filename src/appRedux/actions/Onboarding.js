import { onboardingConstants } from "../constants";

export const userLogin = (step) => {
	return (dispatch) => {
		dispatch({ type: onboardingConstants.SET_ONBOARDING_STEP, data: step });
	};
};
