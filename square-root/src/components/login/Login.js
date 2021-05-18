import React from "react";
import Title from "../Title";
import "./LoginStyle.scss";
import useForm from "../hooks/useForm";
import validate from "../utility/LoginFormValidation";
import { Auth } from "aws-amplify";

export function Login(props) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    callback,
    validate,
    login
  );

  async function callback() {
    try {
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      //set user in the navbar
      props.auth.setAuthStatus(true);
      console.log(attributes.name);
      props.auth.setUser(attributes.name);
      props.history.goBack(); //access last page viewed
    } catch (error) {
        console.log("error loging in", error);
    }
  }

  async function login() {
    //form validated
    //cognito integration here, may detect cognito errors
    const { email, password } = values;
    try {
      const user = await Auth.signIn({
        username: email,
        password: password,
      });
      console.log(user);
    } catch (error) {
      console.log("error loging in", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
      console.log(values.cognito);
    }
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <Title title="Welcome Back" subtitle="" style="login-title" />
      <div className="content">
        {errors.cognito && <p className="help is-danger">{errors.cognito}</p>}
        <form className="login-form" noValidate>
          <div className="login-form-group">
            <label htmlFor="e-mail">E-mail</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="e-mail"
                onChange={handleChange}
                value={values.email || ""}
                required
              />
            </div>
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={values.password || ""}
                required
              />
            </div>
            {errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
          </div>
          <p>
            <a href="/forgotpassword">Forgot password?</a>
          </p>
          <div className="login-footer">
            <button type="button" onClick={handleSubmit} className="btn">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
