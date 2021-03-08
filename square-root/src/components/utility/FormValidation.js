/*

function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-danger");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-danger");
    }
  }

  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-danger");
    return { blankField: true };
  }

  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-danger");
    return { blankField: true };
  }
  if (!hasLength(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { tooShort: true };
  }
  
  if (!hasUpperCase(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noUpperCase: true };
  }
  if (!hasLowerCase(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noLowerCase: true };
  }
  if (!hasNumber(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noNumnber: true };
  }
  if (
    state.hasOwnProperty("confirmPassword") && state.confirmPassword === "") {
    document.getElementById("confirmPassword").classList.add("is-danger");
    return { blankField: true };
  }
  //do passwords match?
  if (
    state.hasOwnProperty("password") &&
    state.hasOwnProperty("confirmPassword") &&
    state.password !== state.confirmPassword
  ) {
    document.getElementById("password").classList.add("is-danger");
    document.getElementById("confirmPassword").classList.add("is-danger");
    return { passwordsNoMatch: true };
  }
  return;
}

export default validateForm;
*/

const PASSLENGTH = 8;

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasNumber(str) {
    return /\d/.test(str);
}

function validateRegexString(email) {
  const regexString = /^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/;
  return regexString.test(String(email).toLowerCase()); // true|false
}

export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!validateRegexString(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < PASSLENGTH) {
    errors.password = "Password must be 8 or more characters";
  } else if (!hasLowerCase(values.password)) {
    errors.password = "Password must have lowercase letters";
  } else if (!hasUpperCase(values.password)) {
    errors.password = "Password must have uppercase letters";
  } else if (hasNumber(values.password)) {
    errors.password = "Password must have lowercase letters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password do not match";
  }

  //if (values.apierrors) {
  //}

  return errors;
}
