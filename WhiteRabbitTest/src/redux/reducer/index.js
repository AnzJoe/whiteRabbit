import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import dashboardReducer from "./dashboardReducer";
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['employeeArray']
};
const rootReducer = combineReducers({
  dashboardReducer: persistReducer(persistConfig, dashboardReducer)
});

export default rootReducer;
