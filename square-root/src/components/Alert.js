import React from 'react';
import { connect } from 'react-redux';
import Alert from '@mui/material/Alert';
import { resetAlertAction } from '../redux/ducks/alertReducer';

const GlobalAlert = (props) => {
  const { text, color } = props.alert;

  setTimeout(() => props.dispatch(resetAlertAction()), 5000);

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
