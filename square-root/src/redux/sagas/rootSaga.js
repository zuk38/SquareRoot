import { all } from 'redux-saga/effects';
import { conceptSaga } from './conceptSaga';
import { plantsSaga } from './plantsSaga';
import { userSaga } from './userSaga';

//generator functions
//eases out the async proccess
export function* watcherSaga() {
  //look for dispatches by store
  //and map to handler functions to for api calls
  yield all([userSaga(), conceptSaga(), plantsSaga()]);
}
