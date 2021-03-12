import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/RegistrationFormValidation";
import { Auth } from "aws-amplify";

const Register = (props) => {
  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    handleDropDownChange,
  } = useForm(callback, validate, register);

  function callback() {
    console.log("yay");
    props.history.push("/welcome");
  }

  async function register() {
    //form validated
    //cognito integration here, may detect cognito errors
    console.log(values);
    const { email, password, name, phone } = values;
    console.log(email);

    try {
      const user = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
          phone_number: phone,
        },
      });
    } catch (error) {
      console.log("error signing up:", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
    }
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

              {/*Name field */}
              <div class="field">
                <label className="label" for="name">
                  Full Name
                </label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder=""
                    value={values.name || ""}
                    onChange={handleChange}
                    id="name"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i
                      id="nameCheckIcon"
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>
              {/*Email field */}
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    autoComplete="off"
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    placeholder="Enter email address"
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
                    placeholder="Enter password"
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
              {/*Conf Password field */}
              <div className="field">
                <label className="label">Confirm password</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="password"
                    name="confPassword"
                    id="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword || ""}
                    placeholder="Confirm password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i
                      id="confPassCheckIcon"
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>
                </div>
                {errors.confirmPassword && (
                  <p className="help is-danger">{errors.confirmPassword}</p>
                )}
              </div>
              {/*Phone number field */}
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    autoComplete="off"
                    className="input"
                    type="phone"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={values.phone || ""}
                    placeholder="+47123456789"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i
                      id="phoneCheckIcon"
                      class="fas fa-exclamation-triangle"
                    ></i>
                  </span>
                  {errors.phone && (
                    <p className="help is-danger">{errors.phone}</p>
                  )}
                </div>
              </div>
              {/* I'm a.... */}
              <div class="is-grouped is-grouped-centered">
                <p>I'm a...</p>
                <p class="control has-icons-left">
                  <span class="select">
                    <select
                      id="roleDropDown"
                      value={values.role}
                      onChange={handleDropDownChange}
                    >
                      <option selected>Real Estate Developer</option>
                      <option>Landscape Architect</option>
                      <option>Landscape Entrepreneur</option>
                    </select>
                  </span>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user-tag"></i>
                  </span>
                </p>
              </div>
              <button
                type="register"
                className="button is-block is-info is-fullwidth"
                disabled={true}
                id="registerBtn"
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
