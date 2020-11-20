import { createSlice } from '@reduxjs/toolkit';
import { createArrayReducer, createObjectReducer } from '@utils/redux';
import {
  INITIAL_STATE,
  NAME,
  TList,
  LIST,
  TDetail,
  DETAIL,
  T,
} from './constant';

const jobSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    ...createArrayReducer<TList>(`${NAME}GetList`, LIST),
    ...createObjectReducer<TDetail>(`${NAME}GetDetail`, DETAIL),
    ...createObjectReducer<T>(`${NAME}Applies`),
  },
});
export const {
  jobGetListFail,
  jobGetListSuccess,
  jobGetList,
  jobGetDetail,
  jobGetDetailFail,
  jobGetDetailSuccess,
  jobApplies,
  jobAppliesSuccess,
  jobAppliesFail,
} = jobSlice.actions;

export default jobSlice.reducer;
