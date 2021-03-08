/*import React, { Component } from "react";
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

export default Register;*/

import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/FormValidation";

const Register = () => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    register,
    validate
  );
  function register() {
    console.log(values);
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              {/*Email field */}
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control has-icons-left">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              {/*Password field */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>                
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              {/*Conf Password field */}
              <div className="field">
                <label className="label">Confirm password</label>
                <div className="control has-icons-left">
                  <input
                    className={`input ${errors.confirmPassword && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.confirmPassword || ""}
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="help is-danger">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
