import { allReducers } from './reducers/index.js';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
  )(createStore)(allReducers);
sagaMiddleware.run(rootSaga);

export default store;