import { stringifyQuery } from '@utils/redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  jobGetList,
  jobGetListSuccess,
  jobGetDetailFail,
  jobGetDetailSuccess,
  jobGetDetail,
} from './slice';
import { fetchAllJobs, fetchDetailJobs } from './api';
import { handleException } from '@utils/exception';

export function* getListSaga({ payload }: { payload: any }) {
  // try {

  // } catch (error) {
  // }
  const data = yield call(fetchAllJobs, stringifyQuery(payload.query));
  yield put(jobGetListSuccess(data));
}

export function* getDetailSaga({ payload }: { payload: any }) {
  try {
    const response = yield call(fetchDetailJobs, payload.id);
    yield put(jobGetDetailSuccess(response));

    return true;
  } catch (error) {
    yield put(jobGetDetailFail(yield* handleException(error)));
    return false;
  }
}

export default [
  takeLatest(jobGetList, getListSaga),
  takeLatest(jobGetDetail, getDetailSaga),
];
