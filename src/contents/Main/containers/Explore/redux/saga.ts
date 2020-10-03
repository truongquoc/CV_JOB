import { stringifyQuery } from '@utils/redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { jobGetList, jobGetListSuccess } from './slice';
import { fetchAllJobs } from './api';

export function* getListSaga({ payload }: { payload: any }) {
  // try {

  // } catch (error) {
  // }
  const data = yield call(fetchAllJobs, stringifyQuery(payload.query));
  yield put(jobGetListSuccess(data));
}
// export function* getDetailSaga({ payload }: { payload: any }) {}

export default [takeLatest(jobGetList, getListSaga)];
