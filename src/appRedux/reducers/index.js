import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Configuration from "./Configuration";
import Onboarding from "./Onboarding";
import Settings from "./Settings";

const rootReducer = combineReducers({
	authentication: Authentication,
	onboarding: Onboarding,
	settings: Settings,
	configuration: Configuration,
});

export default rootReducer;
