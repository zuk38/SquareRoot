import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { withUserConsumer } from './context/user';
import { FooterContainer } from './components/footer/FooterContainer';
import { theme } from './assets/global/Theme-variable';

  /*}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/frontpages/Home";
import Plants from "./pages/Plants";
import PN from "./pages/PN";
import Error from "./pages/Error";
import AllProjects from "./pages/user-pages/AllProjects";
import Dashboard from "./pages/user-pages/Dashboard";
import Greenspace from "./pages/user-pages/Greenspace";
import Customize from "./pages/greenspaces/Customize";
import Howitworks from "./pages/frontpages/Howitworks";
import Who from "./pages/frontpages/Who";
import Categories from "./pages/frontpages/Categories";
import SingleCategory from "./pages/frontpages/SingleCategory";

import About from "./pages/frontpages/About";
import Partner from "./pages/frontpages/Partner";
import Account from "./pages/user-pages/Account";
import SingleConcept from "./pages/greenspaces/SingleConcept";
import What from "./pages/frontpages/What";
import Contact from "./pages/frontpages/Contact";
import IndoorExample from "./pages/greenspaces/IndoorExample";

import ScrollToTop from "./components/utility/ScrollToTop";
import Dashboard1 from "./pages/dashboards/Dashboard1";
*/
}


const App = (props) => {
  const location = useLocation();

  const { isAuthenticated, isAuthenticating, user, logout } = props.context;

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    logout: logout,
  };

  const routing = useRoutes(Router(isAuthenticated));
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {location.pathname.indexOf('/auth') <= -1 &&
          location.pathname.indexOf('/dashboard') <= -1 && (
            <Navbar {...props} auth={authProps} />
          )}
        {routing}
        {location.pathname.indexOf('/auth') <= -1 &&
          location.pathname !== '/forgotpassword' && <FooterContainer />}
    </ThemeProvider>
  );
};

export default withUserConsumer(App);

{
  /** ----- landing page ---- 
function App(props) {
  let location = useLocation();

  const { isAuthenticated, isAuthenticating, user, logout } = props.context;

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    logout: logout,
  };

  return (
    !isAuthenticating && (
      <>
        {location.pathname.indexOf("/customize") <= -1 &&
          location.pathname !== "/forgotpassword" &&
          location.pathname !== "/login" && (
            <Navbar {...props} auth={authProps} />
          )}
        <div className={location.pathname !== "/" ? "content" : ""}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/no" element={<Home />} />
            <Route path="/who-we-are" element={<Who />} />

            <Route
              path="/login"
              element={
                <LoginPage
                  {...props}
                  auth={authProps}
                  context={props.context}
                />
              }
            />
            <Route
              path="/forgotpassword"
              element={<ForgotPasswordPage {...props} />}
            />
            <Route
              path="/concepts/:name"
              element={<SingleConcept {...props} />}
            />
            <Route path="/indoor" element={<IndoorExample {...props} />} />

            <Route path="/plants" element={<Plants {...props} />} />

            <Route path="/how-it-works" element={<Howitworks {...props} />} />
            <Route path="/who-we-are" element={<Who {...props} />} />
            <Route path="/about-us" element={<About {...props} />} />
            <Route path="/become-a-partner" element={<Partner {...props} />} />

            <Route path="/what-we-do" element={<What {...props} />} />

            <Route path="/contact-us" element={<Contact {...props} />} />

            <Route path="/categories" element={<Categories {...props} />} />

            <Route
              path="/categories/:name"
              element={<SingleCategory {...props} />}
            />

            <Route
              path="/categories/:name"
              element={<SingleCategory {...props} />}
            />
            <Route path="/dashboards" element={<Dashboard1 />} />
            <Route path="/dashboards/dashboard1" element={<Dashboard1 />} />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/projects"
              component={AllProjects}
            />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/dashboard/:name"
              component={Dashboard}
            />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/greenspace"
              component={Greenspace}
            />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/account"
              component={Account}
            />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/customize/:conceptName"
              component={Customize}
            />

            <PrivateRoute
              authed={isAuthenticated}
              auth={authProps}
              path="/pn"
              component={PN}
            />

            <Route element={Error} />
          </Routes>
        </div>
        {location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/en" &&
          location.pathname !== "/no" &&
          location.pathname !== "/forgotpassword" && <FooterContainer />}
      </>
    )
  );
}

export default withUserConsumer(App);

*/
}
