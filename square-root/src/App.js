import "./App.css";
import "./App.sass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordVerification from "./components/auth/ForgotPassVerification";
import ChangePasswordConfirm from "./components/auth/ChangePassConfirm";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Auth } from "aws-amplify";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
library.add(faEdit);

class App extends Component {
  //global state to know if the user is signed in
  state = {
    isAuthenticated: false,
    isAuthenticating: true,   //assume that we are uthenticating untill componentDidM finishes
    user: null
  };

  setAuthStatus = (auuthenticated) => {
    //bool is passed
    this.setState({
      isAuthenticated: auuthenticated,
    });
  };

  setUser = (user) => { //set the name if logged in
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

    this.setState({ isAuthenticating: false});
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/register"
                render={(props) => <Register {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/welcome"
                render={(props) => <Welcome {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/forgotpassword" 
                render={(props) => <ForgotPassword {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/forgotpasswordverification" 
                render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/changepasswordconfirmation" 
                render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/" 
                render={(props) => <Home {...props} auth={authProps} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
