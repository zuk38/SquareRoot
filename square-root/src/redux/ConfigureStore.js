import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import alertReducer from './ducks/alertReducer';
import conceptsReducer from './ducks/conceptsReducer';
import userReducer from './ducks/userReducer';
import plantsReducer from './ducks/plantsReducer';
import { watcherSaga } from './sagas/rootSaga';
import projectsReducer from './ducks/projectsReducer';

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  concepts: conceptsReducer,
  plants: plantsReducer,
  projects: projectsReducer,
});

//listen to any dispatches for redux
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

//watcher saga listens to any actions and runs them
sagaMiddleware.run(watcherSaga);

export default store;
