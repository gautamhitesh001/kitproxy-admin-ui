import { onboardingConstants } from "../constants";

const initialSettings = {
	currentStep: 0,
};

const Onboarding = (state = initialSettings, action) => {
	switch (action.type) {
		case onboardingConstants.SET_ONBOARDING_STEP:
			return {
				...state,
				currentStep: action.data,
			};

		default:
			return state;
	}
};

export default Onboarding;
