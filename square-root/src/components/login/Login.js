import React from "react";
import Title from "../Title";
import "./LoginStyle.scss";
import useForm from "../hooks/useForm";
import validate from "../utility/LoginFormValidation";
import { withUserConsumer } from "../../context/user";

function Login(props) {
  const { fetchUser, login } = props.context;

  const { values, errors, handleChange, handleSubmit } = useForm(
    callback,
    validate,
    log
  );

  async function callback() {
    await fetchUser();
  }

  async function log() {
    //form validated
    //cognito integration here, may detect cognito errors
    await login(values);
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

export default withUserConsumer(Login);
