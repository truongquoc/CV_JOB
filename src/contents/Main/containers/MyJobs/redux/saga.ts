import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchMyfavoriteJobs, getAppliedJob } from './api';
import {
  myJobsGetFavorite,
  myJobsGetFavoriteFail,
  myJobsGetFavoriteSuccess,
  myJobsGetApplied,
  myJobsGetAppliedSuccess,
  myJobsGetAppliedFail,
} from './slice';

export function* getListFavoriteJobs() {
  try {
    const response = yield call(fetchMyfavoriteJobs);
    yield put(myJobsGetFavoriteSuccess(response));
    return true;
  } catch (error) {
    yield put(myJobsGetFavoriteFail(error));
    return false;
  }
}

export function* getListAppliedJobs() {
  try {
    const response = yield call(getAppliedJob);
    yield put(myJobsGetAppliedSuccess(response));
    return true;
  } catch (error) {
    yield put(myJobsGetAppliedFail(error));
    return false;
  }
}

export default [
  takeLatest(myJobsGetFavorite, getListFavoriteJobs),
  takeLatest(myJobsGetApplied, getListAppliedJobs),
];
