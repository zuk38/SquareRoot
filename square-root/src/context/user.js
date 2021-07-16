import React, { Component } from "react";
import { Auth } from "aws-amplify";

const UserContext = React.createContext();

export default class UserProvider extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true, //assume that we are uthenticating untill componentDidM finishes
    user: null,
    email: null,
    phone_number: null,
    role: null,
  };

  setAuthStatus = (auuthenticated) => {
    //bool is passed
    this.setState({
      isAuthenticated: auuthenticated,
    });
  };

  setUser = (user) => {
    let name, email, phone, role;
    if (!user) {
      name = null;
      email = null;
      phone = null;
      role = null;
    } else {
      name = user.name;
      email = user.email;
      phone = user.phone_number;
      role = user["custom:role"];
    }
    //set the name if logged in

    this.setState(
      {
        user: name,
        email: email,
        phone_number: phone,
        role: role,
      },
      () => {
        console.log(this.state);
      }
    );
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
      this.setUser(attributes);
    } catch (error) {
      console.log(error);
    }

    this.setState({ isAuthenticating: false });
  };

  register = async (values) => {
    const { email, password, name, phone, role } = values;

    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
          phone_number: phone,
          "custom:role": role,
        },
      });
    } catch (error) {
      console.log("error signing up:", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
    }
  };

  login = async (values) => {
    try {
      const user = await Auth.signIn({
        username: values.email,
        password: values.password,
      });
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
    } catch (error) {
      console.log(error.message);
    }
  };

  updateUser = async (attribute, value) => {
    const user = await Auth.currentAuthenticatedUser();
    if (attribute === "role") attribute = "custom:role";
    await Auth.updateUserAttributes(user, {
      [attribute]: value,
    });

    console.log(user);
  };

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
          updateUser: this.updateUser,
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
