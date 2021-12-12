import React from 'react';
import { useRoutes, useLocation, Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { FooterContainer } from './components/footer/FooterContainer';
import { theme } from './assets/global/Theme-variable';
import { connect } from 'react-redux';
import {
  fetchUser,
  AUTH_STATES,
  fetchGoogleUser,
} from './redux/ducks/userReducer';

const App = (props) => {
  const { status, fetchU, fetchGoogle } = props;

  React.useEffect(() => {
    if (status === AUTH_STATES.AUTH_FAILED) return;
    if (JSON.parse(localStorage.getItem('aws-amplify-federatedInfo'))) {
      fetchGoogle();
    } else if (status === AUTH_STATES.PRE_AUTHORIZE) fetchU();
  }, [status, fetchU, fetchGoogle]);

  let location = useLocation();
  let isLoggedIn = status === AUTH_STATES.AUTHED;
  let routing = useRoutes(Router(isLoggedIn));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {location.pathname.indexOf('/auth') <= -1 &&
        location.pathname.indexOf('/dashboard') <= -1 && <Navbar />}
      {routing}
      {location.pathname.indexOf('/auth') <= -1 &&
        location.pathname !== '/forgotpassword' && <FooterContainer />}
      <Outlet />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ user }) => ({
  status: user.status,
});

const mapDispatchToProps = (dispatch) => ({
  fetchU: () => {
    dispatch(fetchUser());
  },
  fetchGoogle: () => {
    dispatch(fetchGoogleUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
