//actions
export const LOGIN = 'loginUser';
const USER_LOGGED_IN = 'userLoggedIn';
const LOGOUT = 'logout';
const USER_LOGGED_OUT = 'userLoggedOut';
/*const SIGN_UP = 'signup';
const FETCH_USER = 'fetchUser';
const SET_USER = 'setUser';*/

/*export const AUTH_INIT = 'AUTH_INIT'
export const AUTH_SIGN_IN = 'AUTH_SIGN_IN'
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD'
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD'
export const AUTH_COMPLETE_NEW_PASSWORD = 'AUTH_COMPLETE_NEW_PASSWORD'*/

export const loginUser = (values) => ({
  type: LOGIN,
  values,
});

export const userLoggedIn = (data) => ({
  type: USER_LOGGED_IN,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

const initialState = {
  user: null,
  isLoggedIn: false,
  error: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.data;
    case USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
