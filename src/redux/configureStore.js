import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './weathers/weather';

const store = configureStore({
  reducer: weatherSlice,
});

export default store;
