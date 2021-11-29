import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
  LOGIN,
  LOGOUT,
  userLoggedIn,
  userLoggedOut,
} from '../ducks/userReducer';
import { setAlertAction } from '../ducks/alertReducer';
import { Auth } from 'aws-amplify';
import history from '../../history';

export function* login({ values }) {
  try {
    const user = yield call([Auth, 'signIn'], {
      username: values.email,
      password: values.password,
    });
    yield put(userLoggedIn({ user: user, isLoggedIn: true }));
    yield put(
      setAlertAction({
        text: 'User logged in!',
        color: 'success',
      })
    );
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    console.log(err);
    yield put(userLoggedIn({ user: null, isLoggedIn: false, error: err }));
    yield put(
      setAlertAction({
        text: err.message,
        color: 'error',
      })
    );
  }
}

export function* logout() {
  try {
    yield call([Auth, 'signOut']);
    yield put(userLoggedOut());
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
}

function* signUp() {
  try {
    yield put(
      setAlertAction({
        text: 'User Signed Up!',
        color: 'success',
      })
    );
  } catch (e) {
    yield put(
      setAlertAction({
        text: 'Error signing up',
        color: 'danger',
      })
    );
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN, login);
}

function* watchLogoutUser() {
  yield takeEvery(LOGOUT, logout);
}

export function* userSaga() {
  yield all([watchLoginUser(), watchLogoutUser()]);
}
