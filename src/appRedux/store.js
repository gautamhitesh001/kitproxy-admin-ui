import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [];
middlewares.push(thunkMiddleware);
if (process.env.REACT_APP_DEBUG_MODE === "true") {
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
