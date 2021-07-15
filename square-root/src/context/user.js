import React, { Component } from "react";
import { Auth } from "aws-amplify";

const UserContext = React.createContext();

export default class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true, //assume that we are uthenticating untill componentDidM finishes
    user: [],
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

  fetchUser = async () => {
    //used for session persistance - remembering logged in user
    //load session object from local storage
    try {
      const session = await Auth.currentSession();
      console.log(session);
      this.setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      console.log(attributes);
      this.setUser(attributes.name);
    } catch (error) {
      console.log(error);
    }

    this.setState({ isAuthenticating: false });
  };

  login = async (values) => {
    try {
      const user = await Auth.signIn({
        username: values.email,
        password: values.password,
      });
      console.log(user);
    } catch (error) {
      console.log("error loging in", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
      console.log(values.cognito);
    }
  };

  logout = async () => {
    try {
        Auth.signOut();
        this.setAuthStatus(false);
        this.setUser(null);
        this.fetchUser()
      } catch (error) {
        console.log(error.message);
      }
  }

  getUserName = () => {};

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          fetchUser: this.fetchUser,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };

export function withUserConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <UserConsumer>
        {(value) => <Component {...props} context={value} />}
      </UserConsumer>
    );
  };
}
