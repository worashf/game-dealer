import { configureStore, combineReducers } from '@reduxjs/toolkit';

import dealSlice from './GameDeals/GameDeals';

const rootReducer = combineReducers({
  deals: dealSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
