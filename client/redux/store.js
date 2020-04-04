import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";
import appReducer from "./reducers/appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ user: userReducer, app: appReducer });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
