import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Onboarding from "./Onboarding";

const rootReducer = combineReducers({
	authentication: Authentication,
	onboarding: Onboarding,
});

export default rootReducer;
