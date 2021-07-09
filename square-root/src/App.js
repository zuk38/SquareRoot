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
import All_Projects from "./pages/user-pages/All_Projects";
import Dashboard from "./pages/user-pages/Dashboard";
import Greenspace from "./pages/user-pages/Greenspace";
import Members from "./pages/user-pages/Members";
import Orders from "./pages/user-pages/Orders";
import Settings from "./pages/user-pages/Settings";
import Customize from "./pages/greenspaces/Customize";
import Howitworks from "./pages/frontpages/Howitworks";
import Why from "./pages/frontpages/Why";
import Footer from "./components/Footer";
import About from "./pages/frontpages/About";
import Partner from "./pages/frontpages/Partner";
import Account from "./pages/user-pages/Account";
import SingleGreenspace from "./pages/greenspaces/SingleGreenspace";
import What from "./pages/frontpages/What";
import IndoorExample from "./pages/greenspaces/IndoorExample";
import { Auth } from "aws-amplify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
library.add(faEdit);

class App extends Component {
  //global state to know if the user is signed in
  state = {
    isAuthenticated: false,
    isAuthenticating: true, //assume that we are uthenticating untill componentDidM finishes
    user: null,
  };

  setAuthStatus = (auuthenticated) => {
    //bool is passed
    this.setState({
      isAuthenticated: auuthenticated,
    });
  };

  setUser = (user) => {
    //set the name if logged in
    this.setState({
      user: user,
    });
  };

  async componentDidMount() {
    //used for session persistance - remembering logged in user
    //load session object from local storage
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      this.setUser(attributes.name);
    } catch (error) {
      console.log(error);
    }

    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };

    return (
      !this.state.isAuthenticating && (
        <>
          {this.props.location.pathname != "/customize" &&
            this.props.location.pathname != "/forgotpassword" &&
            this.props.location.pathname != "/login" && (
              <Navbar auth={authProps} />
            )}

          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => <LoginPage {...props} auth={authProps} />}
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
              path="/greenspaces/:name"
              render={(props) => (
                <SingleGreenspace {...props} auth={authProps} />
              )}
            />

            <Route
              exact
              path="/indoor"
              render={(props) => <IndoorExample {...props} auth={authProps} />}
            />

            <Route
              exact
              path="/plants"
              render={(props) => <Plants {...props} auth={authProps} />}
            />

            <Route
              exact
              path="/how-it-works"
              render={(props) => <Howitworks {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/Why-us"
              render={(props) => <Why {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/about-us"
              render={(props) => <About {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/become-a-partner"
              render={(props) => <Partner {...props} auth={authProps} />}
            />

            <Route
              exact
              path="/what-we-do"
              render={(props) => <What {...props} auth={authProps} />}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/projects"
              component={All_Projects}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/dashboard"
              component={Dashboard}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/greenspace"
              component={Greenspace}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/members"
              component={Members}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/orders"
              component={Orders}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/account"
              component={Account}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/settings"
              component={Settings}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/customize"
              component={Customize}
            />

            <PrivateRoute
              authed={this.state.isAuthenticated}
              auth={authProps}
              path="/pn"
              component={PN}
            />

            <Route component={Error} />
          </Switch>
          {this.props.location.pathname != "/login" &&
            this.props.location.pathname != "/forgotpassword" && (
              <Footer auth={authProps} />
            )}
        </>
      )
    );
  }
}

export default withRouter(App);
