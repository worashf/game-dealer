import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGameDeals = createAsyncThunk('deals/getGameDeals', async () => {
  try {
    const res = await axios.get('https://www.cheapshark.com/api/1.0/deals');
    const deals = res.data.map((deal, index) => ({
      id: index + 1,
      thumb: deal.thumb,
      salePrice: deal.salePrice,
      normalPrice: deal.normalPrice,
      title: deal.title,
      storeId: deal.storeID,
      gameId: deal.gameID,
      streamRatingCount: deal.steamRatingCount,
      streamRatingPercent: deal.steamRatingPercent,
      dealRating: deal.dealRating,
      savings: deal.savings,
    }));
    return deals;
  } catch (err) {
    throw new Error(err);
  }
});
const initialState = {
  deals: [],
  error: false,
  loading: false,
};
const dealSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    sortDeals: (state, action) => ({
      ...state,
      deals: action.payload,
    }),
  },

  extraReducers: {
    [getGameDeals.pending]: (state) => ({ ...state, loading: true }),
    [getGameDeals.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      deals: action.payload,
    }),
    [getGameDeals.rejected]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
});

export const { sortDeals } = dealSlice.actions;
export default dealSlice.reducer;
