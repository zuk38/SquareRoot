export const AUTH_STATES = {
  PRE_AUTHORIZE: 'PRE_AUTHORIZE',
  AUTH_FAILED: 'AUTH_FAILED',
  AUTHED: 'AUTHED',
};

//actions
export const LOGIN = 'loginUser';
export const LOGIN_GOOGLE = 'loginGoogle';
const USER_LOGGED_IN = 'userLoggedIn';
const USER_LOGGED_IN_GOOGLE = 'userLoggedInGoogle';
export const LOGOUT = 'logout';
const USER_LOGGED_OUT = 'userLoggedOut';
export const SIGN_UP = 'signupUser';
export const FETCH_USER = 'fetchUser';
export const FETCH_GOOGLE_USER = 'fetchGoogleUser';

/*export const AUTH_INIT = 'AUTH_INIT'
export const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD'
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD'
export const AUTH_COMPLETE_NEW_PASSWORD = 'AUTH_COMPLETE_NEW_PASSWORD'*/

export const loginUser = (values) => ({
  type: LOGIN,
  values,
});

export const loginGoogle = (values) => ({
  type: LOGIN_GOOGLE,
  values,
});

export const userLoggedIn = (data) => ({
  type: USER_LOGGED_IN,
  data,
});

export const userLoggedInGoogle = (data) => ({
  type: USER_LOGGED_IN_GOOGLE,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});
export const fetchGoogleUser = () => ({
  type: FETCH_GOOGLE_USER,
});

export const signupUser = (values) => ({
  type: SIGN_UP,
  values,
});

const initialState = {
  //contains email, name, custom:role
  user: null,
  status: AUTH_STATES.PRE_AUTHORIZE,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...initialState, ...action.data };
    case USER_LOGGED_IN_GOOGLE:
      return { ...initialState, ...action.data };
    case USER_LOGGED_OUT:
      return initialState;
    case LOGIN:
      const v = action.values;
      return { ...initialState, v };
    case LOGIN_GOOGLE:
      const google = action.values;
      return { ...initialState, google };
    case SIGN_UP:
      const { values } = action;
      return { ...initialState, values };
    default:
      return state;
  }
};

export default UserReducer;
