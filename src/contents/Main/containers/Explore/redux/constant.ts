import { createArrayInitialState } from '@utils/redux';
import { fromJS } from 'immutable';

export const LIST = 'LIST';

/**
 * Name
 */
export const NAME = 'job';
export const DETAIL = 'detail';

export const INITIAL_STATE = fromJS({
  ...createArrayInitialState(LIST),
});

/**
 * TYPE
 */

export type TList = {
  jobsGetList: (state: any, action: any) => any;
  jobsGetListSuccess: (state: any, action: any) => any;
  jobGetListFail: (state: any, action: any) => any;
};

export type TDetail = {
  productGetDetail: (state: any, action: any) => any;
  productGetDetailSuccess: (state: any, action: any) => any;
  productGetDetailFail: (state: any, action: any) => any;
};
