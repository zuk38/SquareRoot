import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import alertReducer from './ducks/alertReducer';
import userReducer from './ducks/userReducer';
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
});

//listen to any dispatches for redux
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

//watcher saga listens to any actions and runs them
sagaMiddleware.run(watcherSaga);

export default store;
