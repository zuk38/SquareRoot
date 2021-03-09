import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/RegistrationFormValidation";
import { Auth } from "aws-amplify";
import  { Redirect } from 'react-router-dom'

function redirect() {
  this.props.history.push('/welcome')
}

const Register = (props) => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    register,
    validate
  );
  async function register() {
    //callback called, no errors - cognito integration here
    console.log(values);
    const {email, password, phone} = values;
    console.log(email);
    
    try {
      const signUpResponse = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          phone_number: phone
        }
      })

      console.log(signUpResponse);
      props.history.push('/welcome')
    } catch(error) {
      console.log("error signing up:", error);
      let err = null;
      !error.message ? err = { "message": error} : err = error;
      errors.cognito = err;
      console.log(errors.cognito)
      alert(errors.cognito.message)
    }
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
