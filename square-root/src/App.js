import React, { Component } from "react";
import "./App.css";
import "./App.sass";
import { Route, Switch, withRouter } from "react-router-dom";
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
import Orders from "./pages/user-pages/Orders";
import Settings from "./pages/user-pages/Settings";
import Customize from "./pages/greenspaces/Customize";
import Howitworks from "./pages/frontpages/Howitworks";
import Why from "./pages/frontpages/Why";
import Categories from "./pages/frontpages/Categories";
import SingleCategory from "./pages/frontpages/SingleCategory";
import Footer from "./components/Footer";
import About from "./pages/frontpages/About";
import Partner from "./pages/frontpages/Partner";
import Account from "./pages/user-pages/Account";
import SingleConcept from "./pages/greenspaces/SingleConcept";
import What from "./pages/frontpages/What";
import Contact from "./pages/frontpages/Contact";
import IndoorExample from "./pages/greenspaces/IndoorExample";
import { withUserConsumer } from "./context/user";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faEdit);

class App extends Component {
  render() {
    const {
      isAuthenticated,
      isAuthenticating,
      user,
      logout,
    } = this.props.context;

    const authProps = {
      isAuthenticated: isAuthenticated,
      user: user,
      logout: logout,
    };

    return (
      !isAuthenticating && (
        <>
          {this.props.location.pathname.indexOf("/customize") <= -1 &&
            this.props.location.pathname != "/forgotpassword" &&
            this.props.location.pathname != "/login" && (
              <Navbar {...this.props} auth={authProps} />
            )}

          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <LoginPage
                  {...props}
                  auth={authProps}
                  context={this.props.context}
                />
              )}
            />
            <Route
              exact
              path="/forgotpassword"
              render={(props) => (
                <ForgotPasswordPage {...props} auth={authProps} />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/en"
              render={(props) => <Home {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/no"
              render={(props) => <Home {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/concepts/:name"
              render={(props) => <SingleConcept {...props} />}
            />

            <Route
              exact
              path="/indoor"
              render={(props) => <IndoorExample {...props} />}
            />

            <Route
              exact
              path="/plants"
              render={(props) => <Plants {...props} />}
            />

            <Route
              exact
              path="/how-it-works"
              render={(props) => <Howitworks {...props} />}
            />
            <Route
              exact
              path="/Why-us"
              render={(props) => <Why {...props} />}
            />
            <Route
              exact
              path="/about-us"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/become-a-partner"
              render={(props) => <Partner {...props} />}
            />

            <Route
              exact
              path="/what-we-do"
              render={(props) => <What {...props} />}
            />

            <Route
              exact
              path="/contact-us"
              render={(props) => <Contact {...props} />}
            />

            <Route
              exact
              path="/categories"
              render={(props) => <Categories {...props} />}
            />

            <Route
              exact
              path="/categories/:name"
              render={(props) => <SingleCategory {...props} />}
            />

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
              path="/settings"
              component={Settings}
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

            <Route component={Error} />
          </Switch>
          {this.props.location.pathname != "/login" &&
            this.props.location.pathname != "/" &&
            this.props.location.pathname != "/forgotpassword" && <Footer />}
        </>
      )
    );
  }
}

export default withRouter(withUserConsumer(App));
