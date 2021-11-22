import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { connect } from 'react-redux';
import Alert from '@mui/material/Alert';
import { resetAlertAction } from '../redux/ducks/alertReducer';

function TransitionDown(props) {
  return <Slide {...props} direction='down' />;
}

const GlobalAlert = (props) => {
  const { text, color } = props.alert;

  setTimeout(() => props.dispatch(resetAlertAction()), 3000);

  if (text === '') {
    return <></>;
  }

  return (
    <Alert
      variant='filled'
      severity={color !== '' ? color : 'success'}
      sx={{ width: '100%' }}
    >
      {text}
    </Alert>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(GlobalAlert);
