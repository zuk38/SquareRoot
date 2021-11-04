import React, { useState } from 'react';
import Title from '../Title';
import useForm from '../hooks/useForm';
import validate from '../utility/ForgotPassVerificationValidation';
import { Auth } from 'aws-amplify';
import AuthModal from './AuthModal';

export function ForgotPassVerification(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    props.history.push('/'); //access last page viewed
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    callback,
    validate,
    verify
  );

  function callback() {
    console.log('yay');
    //open modal
    openModal();
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
    <>
      {showModal && (
        <AuthModal
          title='Change Password'
          subtitle='Your password has been successfully updated!'
          showModal={showModal}
          setShowWelcomeModal={closeModal}
        />
      )}
      <div className='base-container' ref={props.containerRef}>
        <Title
          title='Set new password'
          subtitle='Please enter the verification code sent to your email address below,
          your email address and a new password.'
          style='forgot-title'
        />
        <div className='content'>
          {errors.cognito && <p className='help is-danger'>{errors.cognito}</p>}
          <form className='login-form' noValidate>
            <div className='login-form-group'>
              <label htmlFor='code'>Verification Code</label>
              <div className='control'>
                <input
                  autoComplete='off'
                  className='input'
                  type='code'
                  name='code'
                  id='code'
                  placeholder='Verification code'
                  onChange={handleChange}
                  value={values.code || ''}
                  required
                />
              </div>
              {errors.code && <p className='help is-danger'>{errors.code}</p>}
            </div>
            <div className='login-form-group'>
              <label htmlFor='e-mail'>E-mail</label>
              <div className='control'>
                <input
                  className='input'
                  type='email'
                  name='email'
                  placeholder='e-mail'
                  onChange={handleChange}
                  value={values.email || ''}
                  required
                />
              </div>
              {errors.email && <p className='help is-danger'>{errors.email}</p>}
            </div>
            <div className='login-form-group'>
              <label htmlFor='password'>Password</label>
              <div className='control'>
                <input
                  className='input'
                  type='password'
                  name='password'
                  placeholder='password'
                  onChange={handleChange}
                  value={values.password || ''}
                  required
                />
              </div>
              {errors.password && (
                <p className='help is-danger'>{errors.password}</p>
              )}
            </div>
            <div className='login-footer'>
              <button type='button' onClick={handleSubmit} className='btn'>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
