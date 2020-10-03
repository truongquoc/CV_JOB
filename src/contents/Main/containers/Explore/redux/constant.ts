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
  jobGetList: (state: any, action: any) => any;
  jobGetListSuccess: (state: any, action: any) => any;
  jobGetListFail: (state: any, action: any) => any;
};

export type TDetail = {
  jobGetGetDetail: (state: any, action: any) => any;
  jobGetDetailSuccess: (state: any, action: any) => any;
  jobGetDetailFail: (state: any, action: any) => any;
};
