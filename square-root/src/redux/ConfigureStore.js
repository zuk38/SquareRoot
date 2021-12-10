import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import alertReducer from './ducks/alertReducer';
import userReducer from './ducks/userReducer';
import { watcherSaga } from './sagas/rootSaga';
import { fetchUser } from './ducks/userReducer';

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
});

//listen to any dispatches for redux
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

store.dispatch(fetchUser());

//watcher saga listens to any actions and runs them
sagaMiddleware.run(watcherSaga);

export default store;
