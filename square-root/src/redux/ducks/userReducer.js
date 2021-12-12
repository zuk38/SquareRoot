export const AUTH_STATES = {
  AUTH_UNKNOWN: 'AUTH_UNKNOWN',
  PRE_AUTHORIZE: 'PRE_AUTHORIZE',
  SENT_VERIFICATION: 'SENT_VERIFICATION',
  AUTH_FAILED: 'AUTH_FAILED',
  AUTHED: 'AUTHED',
};

//actions
export const SET_AUTH_STATE = 'setAuth';
export const LOGIN = 'loginUser';
export const LOGIN_GOOGLE = 'loginGoogle';
const USER_LOGGED_IN = 'userLoggedIn';
const USER_LOGGED_IN_GOOGLE = 'userLoggedInGoogle';
export const LOGOUT = 'logout';
const USER_LOGGED_OUT = 'userLoggedOut';
export const SIGN_UP = 'signupUser';
const USER_SIGNED_UP = 'userSignedUp';
export const FETCH_USER = 'fetchUser';
export const FETCH_GOOGLE_USER = 'fetchGoogleUser';
export const FORGOT_PASSWORD = 'forgotPassword';
export const CHANGE_PASSWORD = 'changePassword';

/*export const AUTH_INIT = 'AUTH_INIT'
export const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD'
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD'
export const AUTH_COMPLETE_NEW_PASSWORD = 'AUTH_COMPLETE_NEW_PASSWORD'*/

export const setAuth = (state) => ({
  type: SET_AUTH_STATE,
  state,
});

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

export const signupUser = () => ({
  type: SIGN_UP,
});

export const userSignedUp = (data) => ({
  type: USER_SIGNED_UP,
  data,
});

export const forgotPassword = (values) => {
  return {
    type: FORGOT_PASSWORD,
    values,
  };
};

export const changePassword = (values) => {
  return {
    type: CHANGE_PASSWORD,
    values,
  };
};

const initialState = {
  //contains email, name, custom:role
  user: null,
  status: AUTH_STATES.AUTH_UNKNOWN,
  error: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATE:
      return { ...initialState, ...action.state };
    case USER_LOGGED_IN:
      return { ...initialState, ...action.data };
    case USER_LOGGED_IN_GOOGLE:
      return { ...initialState, ...action.data };
    case USER_LOGGED_OUT:
      return initialState;
    case USER_SIGNED_UP:
      return { ...initialState, ...action.values };
    case FORGOT_PASSWORD:
      return { ...initialState, ...action.values };
    case CHANGE_PASSWORD:
      return { ...initialState, ...action.values };
    default:
      return state;
  }
};

export default UserReducer;
