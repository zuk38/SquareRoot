import "./App.css"
import "./App.sass"
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordVerification from "./components/auth/ForgotPassVerification";
import ChangePasswordConfirm from "./components/auth/ChangePassConfirm";
import Welcome from "./components/Welcome";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import SinglePlant from "./pages/SinglePlant"
import Error from "./pages/Error";
import Rooftop from "./pages/Rooftop"
import {Rainbed} from "./pages/Rainbed"
import Indoor from "./pages/Indoor"
import All_Projects  from "./pages/User/Projects/All_Projects"
import Dashboard from "./pages/User/Projects/Dashboard"
import Greenspace from "./pages/User/Projects/Greenspace"
import Members from "./pages/User/Projects/Members"
import Orders from "./pages/User/Projects/Orders"
import Settings from "./pages/User/Projects/Settings"
import Customize from "./pages/Customize"
import Howitworks from "./pages/Howitworks"
import Why from "./pages/Why"



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
      //const session = await Auth.currentSession();
      this.setAuthStatus(true);
      //console.log(session);
      //const user = await Auth.currentAuthenticatedUser();
      //const { attributes } = user;
      //this.setUser(attributes.name);
      this.setUser("Karolina IsCool");
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
          <Switch>
          <Route
                exact
                path="/customize"
                render={(props) => <Customize {...props} auth={authProps} />}
              />
          </Switch>
          
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
                render={(props) => (
                  <ForgotPassword {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/forgotpasswordverification"
                render={(props) => (
                  <ForgotPasswordVerification {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/changepasswordconfirmation"
                render={(props) => (
                  <ChangePasswordConfirm {...props} auth={authProps} />
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
                render={(props) => (
                  <Plants {...props} auth={authProps} />
                )}
              />            
              <Route
                exact
                path="/plants/:name"
                render={(props) => (
                  <SinglePlant {...props} auth={authProps} />
                )}
              />
              <Route
                exact
                path="/projects"
                render={(props) => <All_Projects {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/dashboard"
                render={(props) => <Dashboard {...props} auth={authProps} />}
              />

              <Route
                exact
                path="/greenspace"
                render={(props) => <Greenspace {...props} auth={authProps} />}
              />

              <Route
                exact
                path="/members"
                render={(props) => <Members {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/orders"
                render={(props) => <Orders {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/Howitworks"
                render={(props) => <Howitworks {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/Why"
                render={(props) => <Why {...props} auth={authProps} />}
              />
              <Route
                exact
                path="/settings"
                render={(props) => <Settings {...props} auth={authProps} />}
              />
              <Route component={Error} />
            </Switch>
            
          </>
      )
    );
  }
}

export default App;





