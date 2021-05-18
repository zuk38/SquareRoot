import React from "react";
import useForm from "../hooks/useForm";
import validate from "../utility/ForgotPassValidation";
import { Auth } from "aws-amplify";
import Title from "../Title";
import "./ForgotPassStyle.scss";

export function ForgotPassword(props) {
  const { values, handleChange, errors, handleSubmit } = useForm(
    callback,
    validate,
    remind
  );

  function callback() {
    console.log("yay");
    props.setVerification();
  }

  async function remind() {
    //callback called, no errors - cognito integration here
    console.log(values);
    try {
      await Auth.forgotPassword(values.email);
    } catch (error) {
      console.log(error);
      console.log("error in remind:", error);
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      values.cognito = err;
    }
  }
  return (
    <div className="forgot-base-container" ref={props.containerRef}>
      <Title
        title="Forgot your password?"
        subtitle="Please enter the email address associated with your account and we'll
          email you a password reset link."
        style="forgot-title"
      />
      <div className="content">
        {errors.cognito && <p className="help is-danger">{errors.cognito}</p>}
        <form className="forgot-form" noValidate>
          <div className="forgot-form-group">
            <label htmlFor="e-mail">E-mail</label>

            <input
              className="input"
              type="email"
              name="email"
              placeholder="e-mail"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            {errors.email && <p className="help is-danger">{errors.email}</p>}
          </div>

          <div className="forgot-footer">
            <button type="button" onClick={handleSubmit} className="btn">
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
