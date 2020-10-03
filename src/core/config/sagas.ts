import { all } from 'redux-saga/effects';
import authSaga from '@contents/Auth/redux/saga';
import productSaga from '@contents/Example/containers/Common/FlatList/redux/saga';
import jobSaga from '@contents/Main/containers/Explore/redux/saga';

export default function* root() {
  yield all([...authSaga, ...productSaga, ...jobSaga]);
}
