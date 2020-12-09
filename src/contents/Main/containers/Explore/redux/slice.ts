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
  LIST_CATE,
  TListCate,
} from './constant';

const jobSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    ...createArrayReducer<TList>(`${NAME}GetList`, LIST),
    ...createObjectReducer<TDetail>(`${NAME}GetDetail`, DETAIL, LIST),
    ...createObjectReducer<T>(`${NAME}Applies`),
    ...createArrayReducer<TListCate>(`${NAME}GetListCate`, LIST_CATE),
    setFilter: (state: any, action: any) => {
      return state.set('setFilter', action.payload.s);
    },
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
  jobGetListCate,
  jobGetListCateSuccess,
  jobGetListCateFail,
  setFilter,
} = jobSlice.actions;

export default jobSlice.reducer;
