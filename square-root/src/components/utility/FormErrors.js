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
      <div>
        <div>
          {props.formerrors.passwordsNoMatch ? "Passwords do not match" : ""}
        </div>
        <div>
          {props.formerrors.blankField ? "All fields are required" : ""}
        </div>
        <div>
          {props.formerrors.tooShort ? "Password must have at least 8 characters" : ""}
        </div>
        <div>
          {props.formerrors.noNumber ? "Password must contain numbers" : ""}
        </div>
        <div>
          {props.formerrors.noUpperCase ? "Password must contain uppercase letters" : ""}
        </div>
        <div>
          {props.formerrors.noLowerCase ? "Password must contain lowercase letters" : ""}
        </div>
      </div>
    );
  } else if (props.apierrors) {
    return (
      <div>
        <div>{props.apierrors}</div>
      </div>
    );
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <div>
        <div>
          {props.formerrors.cognito.message}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;