import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Onboarding from "./Onboarding";
import Settings from "./Settings";

const rootReducer = combineReducers({
	authentication: Authentication,
	onboarding: Onboarding,
	settings: Settings,
});

export default rootReducer;
