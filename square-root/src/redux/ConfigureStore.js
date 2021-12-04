import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import alertReducer from './ducks/alertReducer';
import userReducer from './ducks/userReducer';
import { watcherSaga } from './sagas/rootSaga';
import { userLoggedIn } from './ducks/userReducer';

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
});

//listen to any dispatches for redux
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  store.dispatch(userLoggedIn(user));
}

//watcher saga listens to any actions and runs them
sagaMiddleware.run(watcherSaga);

function select(state) {
  return state.user.isLoggedIn;
}

let currentValue;
function handleChange() {
  let previousValue = currentValue;
  currentValue = select(store.getState());

  if (previousValue !== currentValue) {
    console.log(
      'Some deep nested property changed from',
      previousValue,
      'to',
      currentValue
    );
  }
}

const unsubscribe = store.subscribe(handleChange);
unsubscribe();

export default store;
