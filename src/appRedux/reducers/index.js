import { combineReducers } from "redux";
import Authentication from "./Authentication";

const rootReducer = combineReducers({
	authentication: Authentication,
});

export default rootReducer;
