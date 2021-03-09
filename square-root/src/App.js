import "./App.css";
import "./App.sass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
library.add(faEdit);

class App extends Component {
  //global state to know if the user is signed in
  state = {
    isAuthenticated: false,
    user: null,
  };

  setAuthStatus = (auuthenticated) => {
    //bool is passed
    this.setState({
      isAuthenticated: auuthenticated,
    });
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps}/>
            <Switch>
              <Route exact path="/login" render={(props) => <Login {...props} auth={authProps}/>} />
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps}/>} />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps}/>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
