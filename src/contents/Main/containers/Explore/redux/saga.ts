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
  jobGetListCate,
  jobGetListCateSuccess,
  jobGetListCateFail,
} from './slice';
import {
  fetchAllJobs,
  fetchDetailJobs,
  appliesJob,
  fetchAllCates,
} from './api';

export function* getListSaga({ payload }: { payload: any }) {
  try {
    const data = yield call(fetchAllJobs, stringifyQuery(payload.query));
    yield put(jobGetListSuccess(data));
  } catch (error) {
    yield put(jobGetDetailFail(error));
  }
}

export function* getListPopularJob({ payload }: { payload: any }) {
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
export function* appliesJobSaga({ payload }: { payload: any }) {
  try {
    const response = yield call(appliesJob, payload.id);
    yield put(jobAppliesSuccess(response));
  } catch (error) {
    yield put(jobAppliesFail(yield* handleException(error)));
  }
}
export function* getListCatesSaga() {
  try {
    const response = yield call(fetchAllCates);
    yield put(jobGetListCateSuccess(response));
  } catch (error) {
    yield put(jobGetListCateFail(error));
  }
}
export default [
  takeLatest(jobGetList, getListSaga),
  takeLatest(jobGetDetail, getDetailSaga),
  takeLatest(jobGetListCate, getListCatesSaga),
];
