export const AUTH_STATES = {
  AUTH_UNKNOWN: 'AUTH_UNKNOWN',
  PRE_AUTHORIZE: 'PRE_AUTHORIZE',
  SENT_VERIFICATION: 'SENT_VERIFICATION',
  FORGOT_PASSWORD_STARTED: 'FORGOT_PASSWORD_STARTED',
  CODE_VERIFIED: 'CODE_VERIFIED',
  AUTH_FAILED: 'AUTH_FAILED',
  AUTHED: 'AUTHED',
};

//actions
export const SET_AUTH_STATE = 'setAuth';
export const LOGIN = 'loginUser';
export const LOGIN_GOOGLE = 'loginGoogle';
export const LOGOUT = 'logout';
export const SIGN_UP = 'signupUser';
const USER_SIGNED_UP = 'userSignedUp';
export const FETCH_USER = 'fetchUser';
export const FETCH_GOOGLE_USER = 'fetchGoogleUser';
export const FORGOT_PASSWORD = 'forgotPassword';
export const CHANGE_PASSWORD = 'changePassword';

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

export const logout = () => ({
  type: LOGOUT,
});

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchGoogleUser = (credentials) => ({
  type: FETCH_GOOGLE_USER,
  credentials,
});

export const signupUser = (values) => ({
  type: SIGN_UP,
  values,
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

export const initialState = {
  //contains email, name, custom:role
  user: null,
  status: AUTH_STATES.AUTH_UNKNOWN,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATE:
      return { ...initialState, ...action.state };
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
