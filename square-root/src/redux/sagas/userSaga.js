import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  FETCH_USER,
  LOGIN,
  LOGOUT,
  SIGN_UP,
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
    console.log(user);
    //yield put(userLoggedIn({ user: user, isLoggedIn: true, error: {} }));
  } catch (error) {
    let err = null;
    !error.message ? (err = { message: error }) : (err = error);
    console.log(err);
    //yield put(userLoggedIn({ user: null, isLoggedIn: false, error: err }));
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

function* signUp({ values }) {
  try {
    const user = yield call([Auth, 'signUp'], {
      username: values.email,
      password: values.password,
      attributes: {
        email: values.email,
        name: values.name,
        phone_number: values.phone,
        'custom:role': values.role,
      },
    });
    console.log(user);
    yield put(
      setAlertAction({
        text: 'User Signed Up!',
        color: 'success',
      })
    );
  } catch (e) {
    console.log('error signing up:', e);
    let err = null;
    !e.message ? (err = { message: e }) : (err = e);
    yield put(
      setAlertAction({
        text: err.message,
        color: 'error',
      })
    );
  }
}

export function* fetchUser() {
  try {
    const session = yield call([Auth, 'currentSession']);
    console.log(session);
    const user = yield call([Auth, 'currentAuthenticatedUser']);
    console.log(user);
    const { attributes } = user;
    console.log(attributes);
    yield put(userLoggedIn({ user: attributes, isLoggedIn: true, error: {} }));
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
    yield put(userLoggedIn({ user: null, isLoggedIn: false, error }));
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN, login);
}

function* watchSignupUser() {
  yield takeEvery(SIGN_UP, signUp);
}

function* watchLogoutUser() {
  yield takeEvery(LOGOUT, logout);
}

function* watchFetchUser() {
  yield takeLatest(FETCH_USER, fetchUser);
}

export function* userSaga() {
  yield all([
    watchLoginUser(),
    watchLogoutUser(),
    watchFetchUser(),
    watchSignupUser(),
  ]);
}
