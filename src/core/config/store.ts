import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { immutableTransform } from '@utils/redux';
import { Platform } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  transforms: [immutableTransform()],
  storage: AsyncStorage,
  whitelist: ['config', 'auth', 'product', 'event'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (__DEV__ && Platform.OS === 'ios') {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
