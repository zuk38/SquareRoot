import React from "react";

function FormErrors(props) {
  if (
    props.formerrors &&
    (props.formerrors.blankField ||
      props.formerrors.passwordsNoMatch ||
      props.formerrors.tooShort ||
      props.formerrors.noNumber ||
      props.formerrors.noUpperCase ||
      props.formerrors.noLowerCase)
  ) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.passwordsNoMatch ? "Passwords do not match" : ""}
        </div>
        <div className="help is-danger">
          {props.formerrors.blankField ? "All fields are required" : ""}
        </div>
        <div className="row justify-content-center help is-danger">
          {props.formerrors.tooShort
            ? "Password must have at least 8 characters"
            : ""}
        </div>
        <div className="row justify-content-center help is-danger">
          {props.formerrors.noNumber ? "Password must contain numbers" : ""}
        </div>
        <div className="row justify-content-center help is-danger">
          {props.formerrors.noUpperCase
            ? "Password must contain uppercase letters"
            : ""}
        </div>
        <div className="row justify-content-center help is-danger">
          {props.formerrors.noLowerCase
            ? "Password must contain lowercase letters"
            : ""}
        </div>
      </div>
    );
  } else if (props.apierrors) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">{props.apierrors}</div>
      </div>
    );
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className="error container help is-danger">
        <div className="row justify-content-center">
          {props.formerrors.cognito.message}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;
