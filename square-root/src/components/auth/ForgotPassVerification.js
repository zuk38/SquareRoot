import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/ForgotPassVerificationValidation";
import { Auth } from "aws-amplify";

const ForgotPassVerification = (props) => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    callback,
    validate,
    verify
  );

  function callback() {
    console.log("yay");
    props.history.push("/changepasswordconfirmation");
  }

  async function verify() {
    //callback called, no errors - cognito integration here
    console.log(values);
    try {
      await Auth.forgotPasswordSubmit(
        values.email,
        values.code,
        values.password
      );
    } catch (error) {
      console.log(error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
    }
  }
  return (
    <div className="section auth">
      <div className="container">
        <h1>Set new password</h1>
        <p>
          Please enter the verification code sent to your email address below,
          your email address and a new password.
        </p>
        <form onSubmit={handleSubmit} noValidate>
        {errors.cognito && (
                    <p className="help is-danger">{errors.cognito}</p>
                  )}
          {/*Verification code field */}
          <div className="field">
            <label className="label">Verification Code</label>
            <div className="control has-icons-right">
              <input
                autoComplete="off"
                className="input"
                type="code"
                name="code"
                id="code"
                onChange={handleChange}
                value={values.code || ""}
                required
              />
              <span class="icon is-small is-right">
                <i id="codeCheckIcon" class="fas fa-exclamation-triangle"></i>
              </span>
              {errors.code && <p className="help is-danger">{errors.code}</p>}
            </div>
          </div>
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
                <i id="emailCheckIcon" class="fas fa-exclamation-triangle"></i>
              </span>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
          </div>
          {/*New Password field */}
          <div className="field">
            <label className="label">New Password</label>
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
          <button
            type="submit"
            className="button is-block is-info is-fullwidth"
            disabled={true}
            id="submitBtn"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassVerification;
