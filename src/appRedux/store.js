import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: hardSet,
	// blacklist: ["configuration"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
middlewares.push(thunkMiddleware);
if (process.env.REACT_APP_DEBUG_MODE === "true") {
	const { logger } = require("redux-logger");
	middlewares.push(logger);
}

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
