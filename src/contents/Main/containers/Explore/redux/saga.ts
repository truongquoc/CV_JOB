import { stringifyQuery } from '@utils/redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleException } from '@utils/exception';
import {
  jobGetList,
  jobGetListSuccess,
  jobGetDetailFail,
  jobGetDetailSuccess,
  jobGetDetail,
  jobAppliesFail,
  jobAppliesSuccess,
} from './slice';
import { fetchAllJobs, fetchDetailJobs, appliesJob } from './api';

export function* getListSaga({ payload }: { payload: any }) {
  try {
    const data = yield call(fetchAllJobs, stringifyQuery(payload.query));
    yield put(jobGetListSuccess(data));
  } catch (error) {
    console.log('error', error);
    yield put(jobGetDetailFail(error));
  }
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
export function* appliesJobSaga({ payload }: { payload: any }) {
  try {
    const response = yield call(appliesJob, payload.id);
    yield put(jobAppliesSuccess(response));
  } catch (error) {
    yield put(jobAppliesFail(yield* handleException(error)));
  }
}
export default [
  takeLatest(jobGetList, getListSaga),
  takeLatest(jobGetDetail, getDetailSaga),
];
