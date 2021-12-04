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
    //yield put(userLoggedIn({ user: user, isLoggedIn: true}));
  } catch (error) {
    yield put(
      setAlertAction({
        text: error.message,
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
    yield put(
      setAlertAction({
        text: e.message,
        color: 'error',
      })
    );
  }
}

export function* fetchUser() {
  console.log('fetching user');
  try {
    const session = yield call([Auth, 'currentSession']);
    console.log(session);
    const user = yield call([Auth, 'currentAuthenticatedUser']);
    console.log(user);
    const { attributes } = user;
    console.log(attributes);
    yield put(userLoggedIn({ user: attributes, isLoggedIn: true }));
  } catch (error) {
    console.log(error);
    yield put(userLoggedIn({ user: null, isLoggedIn: false }));
  }
}

//TODO:
/*removeEmpty = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] === Object(obj[key]))
        newObj[key] = this.removeEmpty(obj[key]);
      else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
  };*/

/*updateUser = async (values) => {
    const user = await Auth.currentAuthenticatedUser();
    let attributes = {
      name: values.name,
      email: values.email,
      phone_number: values.phone,
      'custom:role': values.role,
    };
    Object.keys(attributes).forEach((key) =>
      attributes[key] === undefined ? delete attributes[key] : {}
    );
    //this.removeEmpty(attributes);
    console.log(attributes);
    try {
      await Auth.updateUserAttributes(user, attributes);
      this.fetchUser();
    } catch (error) {
      console.log('error loging in', error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
      console.log(values.cognito);
    }
  };*/

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
