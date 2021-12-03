//actions
export const LOGIN = 'loginUser';
const USER_LOGGED_IN = 'userLoggedIn';
export const LOGOUT = 'logout';
const USER_LOGGED_OUT = 'userLoggedOut';
export const SIGN_UP = 'signupUser';
export const FETCH_USER = 'fetchUser';
/*const SET_USER = 'setUser';*/

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

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const signupUser = (values) => ({
  type: SIGN_UP,
  values,
});

const initialState = {
  //contains email, name, custom:role
  user: null,
  //flag for router
  isLoggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      const { isLoggedIn, user } = action.data;
      return { ...initialState, isLoggedIn, user };
    case USER_LOGGED_OUT:
      return initialState;
    case LOGIN:
      const v = action.values;
      return { ...initialState, v };
    case SIGN_UP:
      const { values } = action;
      return { ...initialState, values };
    default:
      return state;
  }
};

export default UserReducer;
