import { createSlice } from '@reduxjs/toolkit';
import { createArrayReducer, createObjectReducer } from '@utils/redux';
import {
  NAME,
  LIST_FAVORITE,
  INITIAL_STATE,
  TListFavorite,
  TListApplied,
  LIST_APPLIED,
} from './constant';

const myJobsSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    ...createArrayReducer<TListFavorite>(`${NAME}GetFavorite`, LIST_FAVORITE),
    ...createArrayReducer<TListApplied>(`${NAME}GetApplied`, LIST_APPLIED),
  },
});

export const {
  myJobsGetFavorite,
  myJobsGetFavoriteFail,
  myJobsGetFavoriteSuccess,
  myJobsGetApplied,
  myJobsGetAppliedFail,
  myJobsGetAppliedSuccess,
} = myJobsSlice.actions;

export default myJobsSlice.reducer;
