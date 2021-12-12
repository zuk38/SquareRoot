import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  AUTH_STATES,
  CHANGE_PASSWORD,
  FETCH_GOOGLE_USER,
  FETCH_USER,
  FORGOT_PASSWORD,
  LOGIN,
  LOGIN_GOOGLE,
  LOGOUT,
  setAuth,
  SIGN_UP,
  userLoggedIn,
  userLoggedInGoogle,
  userLoggedOut,
  userSignedUp,
} from '../ducks/userReducer';
import { setAlertAction } from '../ducks/alertReducer';
import { Auth } from 'aws-amplify';
import history from '../../history';

export function* login({ values }) {
  try {
    yield call([Auth, 'signIn'], {
      username: values.email,
      password: values.loginPassword,
    });
    yield put(setAuth({ status: AUTH_STATES.PRE_AUTHORIZE }));
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
    yield call([Auth, 'signUp'], {
      username: values.email,
      password: values.password,
      attributes: {
        email: values.email,
        name: values.name,
        phone_number: values.phone,
        'custom:role': values.role,
      },
    });
    yield put(userSignedUp({ status: AUTH_STATES.SENT_VERIFICATION }));
    yield put(
      setAlertAction({
        text: 'User Signed Up! Please click the link sent to the email you provided',
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
  try {
    yield call([Auth, 'currentSession']);
    const user = yield call([Auth, 'currentAuthenticatedUser']);
    const { attributes } = user;
    yield put(
      userLoggedIn({
        user: attributes,
        status: AUTH_STATES.AUTHED,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      userLoggedIn({ user: null, status: AUTH_STATES.AUTH_FAILED, error })
    );
  }
}

export function* loginGoogle() {
  try {
    const ga = window.gapi.auth2.getAuthInstance();

    const googleUser = yield call(
      () => new Promise((resolve, reject) => ga.signIn().then(resolve, reject))
    );
    const { id_token, expires_at } = googleUser.getAuthResponse();
    const profile = googleUser.getBasicProfile();
    let user = {
      email: profile.getEmail(),
      name: profile.getName(),
    };

    const credentials = yield Auth.federatedSignIn(
      'google',
      { token: id_token, expires_at },
      user
    );
    console.log('credentials', credentials);
    yield fetchGoogleUser(credentials);
  } catch (e) {
    yield put(
      setAlertAction({
        text: e.message,
        color: 'error',
      })
    );
  }
}

export function* fetchGoogleUser({ credentials }) {
  try {
    yield put(
      userLoggedInGoogle({
        user: credentials,
        status: AUTH_STATES.AUTHED,
      })
    );
  } catch (e) {
    yield put(
      setAlertAction({
        text: e.message,
        color: 'error',
      })
    );
    yield put(
      userLoggedInGoogle({
        user: null,
        status: AUTH_STATES.AUTH_FAILED,
      })
    );
  }
}

function* forgotPassword({ values }) {
  try {
    const { email } = values;
    yield call([Auth, 'forgotPassword'], {
      username: email,
    });
  } catch (e) {
    yield put(
      setAlertAction({
        text: e.message,
        color: 'error',
      })
    );
  }
}

function* changePassword({ values }) {
  try {
    const { email, code, password } = values;
    yield call([Auth, 'forgotPasswordSubmit'], {
      username: email,
      code,
      password,
    });
  } catch (e) {
    yield put(
      setAlertAction({
        text: e.message,
        color: 'error',
      })
    );
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
  yield takeLatest(LOGIN, login);
}

function* watchLoginGoogleUser() {
  yield takeLatest(LOGIN_GOOGLE, loginGoogle);
}

function* watchSignupUser() {
  yield takeLatest(SIGN_UP, signUp);
}

function* watchLogoutUser() {
  yield takeLatest(LOGOUT, logout);
}

function* watchFetchUser() {
  yield takeLatest(FETCH_USER, fetchUser);
}

function* watchFetchGoogleUser() {
  yield takeLatest(FETCH_GOOGLE_USER, fetchGoogleUser);
}

function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}

function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

export function* userSaga() {
  yield all([
    watchLoginUser(),
    watchLogoutUser(),
    watchFetchUser(),
    watchSignupUser(),
    watchLoginGoogleUser(),
    watchFetchGoogleUser(),
    watchForgotPassword(),
    watchChangePassword(),
  ]);
}
