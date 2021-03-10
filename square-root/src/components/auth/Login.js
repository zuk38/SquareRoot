import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/LoginFormValidation";
import { Auth } from "aws-amplify";

const Login = (props) => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    success,
    validate,
    login
  );

  function success(user) {
    console.log("yay")
  }

  async function login() {
    //callback called, no errors - cognito integration here
    //console.log(values);
    const { email, password } = values;
    try {
      const user = await Auth.signIn({
        username: email,
        password: password,
      });
      console.log(user);
      //set user in the navbar
      props.auth.setAuthStatus(true);
      props.auth.setUser(user);
      //props.history.push('/') home page?
    } catch (error) {
      console.log("error signing in", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
      console.log(values.cognito);
      //alert(errors.cognito.message);
    }
    console.log("out of catch")
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
            {errors.cognito && (
                    <p className="help is-danger">{errors.cognito}</p>
                  )}
              {/*Email field */}
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
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
                  <span class="icon is-small is-right">
                    <i
                      id="emailCheckIcon"
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              {/*Password field */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i
                      id="passwordCheckIcon"
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <p className="control">
                  <a href="/forgotpassword">Forgot password?</a>
                </p>
              </div>
              <button
                type="login"
                className="button is-block is-info is-fullwidth"
                disabled={true}
                id="loginBtn"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
