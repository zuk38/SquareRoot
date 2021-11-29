import { call, put, all, takeEvery } from 'redux-saga/effects';
import { LOGIN, userLoggedIn } from '../ducks/userReducer';
import { setAlertAction } from '../ducks/alertReducer';
import { Auth } from 'aws-amplify';

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

export function* userSaga() {
  yield all([watchLoginUser()]);
}
