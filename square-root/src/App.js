import React from "react";
import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router";
import { FooterContainer } from "./components/footer/FooterContainer";
import { withUserConsumer } from "./context/user";
import ScrollToTop from "./components/utility/ScrollToTop";
import Router from "./routes/Router";

function App(props) {
  let location = useLocation();

  const { isAuthenticated, isAuthenticating, user, logout } = props.context;

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    logout: logout,
  };

  let routing = useRoutes(Router(isAuthenticated));

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
          {routing}
        </div>
        {location.pathname !== "/login" &&
          location.pathname !== "/" &&
          location.pathname !== "/en" &&
          location.pathname !== "/no" &&
          location.pathname !== "/forgotpassword" && <FooterContainer />}
        <Outlet />
      </>
    )
  );
}

export default withUserConsumer(App);
