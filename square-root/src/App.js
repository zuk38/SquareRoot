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
import { fetchUser, AUTH_STATES } from './redux/ducks/userReducer';

const App = (props) => {
  const { status, fetchU } = props;
  React.useEffect(() => {
    if (status === AUTH_STATES.AUTH_FAILED) return;
    if (status === AUTH_STATES.PRE_AUTHORIZE) {
      fetchU();
    }
  }, [status, fetchU]);
  let location = useLocation();
  let routing = useRoutes(Router(status));

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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
