import {persistStore, persistReducer} from 'redux-persist';
import {WeatherReducer} from './reducers/WeatherReducer';
import { themeReducer } from './reducers/themeReducer';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weather'],
};

const rootReducer = combineReducers({
  WeatherReducer: persistReducer(persistConfig, WeatherReducer),
  themeReducer:themeReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export const persistor = persistStore(store);
