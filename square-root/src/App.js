import "./App.css";
import "./App.sass";
import { Route, Switch, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import PN from "./pages/PN";
import Error from "./pages/Error";
import Rooftop from "./pages/Rooftop";
import Rainbed from "./pages/Rainbed";
import Indoor from "./pages/Indoor";
import All_Projects from "./pages/User/Projects/All_Projects";
import Dashboard from "./pages/User/Projects/Dashboard";
import Greenspace from "./pages/User/Projects/Greenspace";
import Members from "./pages/User/Projects/Members";
import Orders from "./pages/User/Projects/Orders";
import Settings from "./pages/User/Projects/Settings";
import Customize from "./pages/Customize";
import Howitworks from "./pages/Howitworks";
import Why from "./pages/Why";
import Footer from "./components/Footer";
import About from "./pages/About";
import Partner from "./pages/Partner";
import Account from "./pages/User/Account";

import { Auth } from "aws-amplify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { FaIcons } from "react-icons/fa";
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
              path="/rooftop"
              render={(props) => <Rooftop {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/rainbed"
              render={(props) => <Rainbed {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/indoor"
              render={(props) => <Indoor {...props} auth={authProps} />}
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
              path="/Why-urban-greenspaces"
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
