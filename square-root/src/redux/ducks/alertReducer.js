//actions
const SET_ALERT = 'SET_ALERT';
const RESET_ALERT = 'RESET_ALERT';

//state
const initialState = {
  text: '',
  color: '',
};

export const setAlertAction = (msg) => ({
  type: SET_ALERT,
  msg,
});

export const resetAlertAction = () => ({
  type: RESET_ALERT,
});

const AlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.msg; //this is the payload when set alert is called
    case RESET_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default AlertReducer;
