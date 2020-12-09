import {
  createArrayInitialState,
  createObjectInitialState,
} from '@utils/redux';
import { fromJS } from 'immutable';

export const LIST = 'LIST';
export const LIST_CATE = 'LIST_CATE';
/**
 * Name
 */
export const NAME = 'job';
export const DETAIL = 'detail';

export const INITIAL_STATE = fromJS({
  ...createArrayInitialState(LIST),
  ...createArrayInitialState(LIST_CATE),
  ...createObjectInitialState(DETAIL),
  setFilter: {},
});

/**
 * TYPE
 */

export type TListCate = {
  jobGetListCate: (state: any, action: any) => any;
  jobGetListCateSuccess: (state: any, action: any) => any;
  jobGetListCateFail: (state: any, action: any) => any;
};

export type TList = {
  jobGetList: (state: any, action: any) => any;
  jobGetListSuccess: (state: any, action: any) => any;
  jobGetListFail: (state: any, action: any) => any;
};

export type TDetail = {
  jobGetDetail: (state: any, action: any) => any;
  jobGetDetailSuccess: (state: any, action: any) => any;
  jobGetDetailFail: (state: any, action: any) => any;
};
export type T = {
  jobApplies: (state: any, action: any) => any;
  jobAppliesFail: (state: any, action: any) => any;
  jobAppliesSuccess: (state: any, action: any) => any;
};
