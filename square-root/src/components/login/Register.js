import React, { useState } from "react";
import Title from "../Title";
import useForm from "../hooks/useForm";
import validate from "../utility/RegistrationFormValidation";
import AuthModal from "./AuthModal";
import "./LoginStyle.scss"

export function Register(props) {
  const [showModal, setShowModal] = useState(false);
  const { registerUser } = props.context;

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    props.history.goBack(); //access last page viewed
  };

  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    handleDropDownChange,
  } = useForm(callback, validate, register);

  function callback() {
    console.log("kakaksdn")
    openModal();
  }

  async function register() {
    //form validated
    //cognito integration here, may detect cognito errors
    await registerUser(values)
    console.log("lalala")
  }
  return (
    <>
      {showModal && (
        <AuthModal title="Welcome!" subtitle="You have successfully registered a new account. We have sent you an email, please click on the confirmation link to verify your account" showModal={showModal} setShowWelcomeModal={closeModal} />
      )}
      <div className="base-container" ref={props.containerRef}>
        <Title
          title="Welcome to SquareRoot"
          subtitle="Let's get started with a few simple steps"
          style="register-title"
        />
        <div className="content">
          {errors.cognito && <p className="help is-danger">{errors.cognito}</p>}
          <form className="login-form" noValidate>
            <div className="login-form-group">
              <label htmlFor="name">Full Name</label>
              <div class="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  id="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
            <div className="login-form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                value={values.email || ""}
                onChange={handleChange}
                className="input"
              />
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input"
                value={values.password || ""}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}
            </div>
            <div className="login-form-group">
              <label htmlFor="confirmPassword">Repeat Password</label>
              <input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="repeat password"
                className="input"
                onChange={handleChange}
                value={values.confirmPassword || ""}
              />
              {errors.confirmPassword && (
                <p className="help is-danger">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="login-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                className="input"
                type="phone"
                name="phone"
                id="phone"
                placeholder="+47123456789"
                onChange={handleChange}
                value={values.phone || ""}
                required
              />
              {errors.phone && <p className="help is-danger">{errors.phone}</p>}
            </div>

            {/* I'm a.... */}
            <div className="login-form-group">
              <label htmlFor="role">I am a...</label>
              <span class="select">
                <select
                  id="roleDropDown"
                  value={values.role}
                  onChange={handleDropDownChange}
                >
                  <option selected>Real Estate Developer</option>
                  <option>Landscape Architect</option>
                  <option>Landscape Entrepreneur</option>
                  <option>Plant Nursery</option>
                </select>
              </span>
            </div>
          </form>
        </div>
        <div className="login-footer">
          <button type="button" onClick={handleSubmit} className="btn">
            REGISTER
          </button>
        </div>
      </div>
    </>
  );
}
