import { combineReducers } from "redux";
import Authentication from "./Authentication";
import Configuration from "./Configuration";
import Onboarding from "./Onboarding";
import Settings from "./Settings";
import Organization from "./Organization";
import AlertReducer from "./Alert";

const rootReducer = combineReducers({
    authentication: Authentication,
    onboarding: Onboarding,
    settings: Settings,
    configuration: Configuration,
    organization: Organization,
    alert: AlertReducer
});

export default rootReducer;