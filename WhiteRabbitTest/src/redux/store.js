import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducer";
import { persistStore } from 'redux-persist';

const loggerMiddleware = createLogger();
//redux store configuration

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export const persistor = persistStore(store);
