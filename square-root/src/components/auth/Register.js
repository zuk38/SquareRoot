import React, { Component } from "react";
import Validate from "../utility/FormValidation";
import FormErrors from "../utility/FormErrors";

class Register extends Component {
  //local state - takes input from the user
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      cognito: null,
      blankField: false,
      noUpperCase: false,
      noLowerCase: false,
      noNumber: false,
      tooShort: false,
      passwordsNoMatch: false,
    },
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankField: false,
        noUpperCase: false,
        noLowerCase: false,
        noNumber: false,
        tooShort: false,
        passwordsNoMatch: false,
      },
    });
  };

  handleSubmit = async (event) => {
    //invoked when reg form is being submitted
    event.preventDefault();

    //form validation
    this.clearErrorState();
    const isError = Validate(event, this.state);

    if (isError) {
      this.setState({
        errors: { ...this.state.errors, ...isError },
      });
    }

    //no errors - proceed with AWS Cognito integration
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Register</h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>
              
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={this.state.confirmPassword}
                  onChange={this.onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <a href="/forgotpassword">Forgot password?</a>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">Register</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;
