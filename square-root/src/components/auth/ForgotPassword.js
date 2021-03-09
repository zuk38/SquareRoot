import useForm from "../hooks/useForm";
import React from "react";
import validate from "../utility/ForgotPassValidation";
import { Auth } from "aws-amplify";

const ForgotPassword = (props) => {
  const { values, handleChange, errors, handleSubmit } = useForm(
    remind,
    validate
  );
  async function remind() {
    //callback called, no errors - cognito integration here
    console.log(values);
    try {
        await Auth.forgotPassword(values.email);
        props.history.push('/forgotpasswordverification');
    } catch(error) {
        console.log(error);
    }
  }
  return (
    <section className="section auth">
      <div className="container">
        <h1>Forgot your password?</h1>
        <p>
          Please enter the email address associated with your account and we'll
          email you a password reset link.
        </p>
        
        <form onSubmit={handleSubmit} noValidate>
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
          <div className="field">
            <p className="control">
              <button
                type="submit"
                className="button is-success"
                disabled={true}
                id="submitBtn"
              >
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
