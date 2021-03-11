const PASSLENGTH = 8;

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasNumber(str) {
  console.log(/\d/.test(str))
  return /\d/.test(str);
}

function validateRegexString(email) {
  const regexString = /^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/;
  return regexString.test(String(email).toLowerCase()); // true|false
}

function changeIcons(boolean, input, icon) {
  if (boolean) {
    input.classList.remove("is-danger");
    icon.classList.remove("fa-exclamation-triangle");
    input.classList.add("is-success");
    icon.classList.add("fa-check");
  } else {
    input.classList.remove("is-success");
    icon.classList.remove("fa-check");
    input.classList.add("is-danger");
    icon.classList.add("fa-exclamation-triangle");
  }
}

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let inputPassword = document.getElementById("password");
  let iconPassword = document.getElementById("passwordCheckIcon");
  let emailValidated = false;
  let passValidated = false;
  let loginBtn = document.getElementById("loginBtn");

  if (!values.email) {
    errors.email = "Email address is required";
    emailValidated = false;
  } else if (!validateRegexString(values.email)) {
    errors.email = "Email address is invalid";
    emailValidated = false;
  } else {
    emailValidated = true;
  }

  if (!values.password) {
    errors.password = "Password is required";
    passValidated = false;
  } else if (values.password.length < PASSLENGTH) {
    errors.password = "Password must be 8 or more characters";
    passValidated = false;
  } else if (!hasLowerCase(values.password)) {
    errors.password = "Password must have lowercase letters";
    passValidated = false;
  } else if (!hasUpperCase(values.password)) {
    errors.password = "Password must have uppercase letters";
    passValidated = false;
  } else if (!hasNumber(values.password)) {
    errors.password = "Password must have digits";
    passValidated = false;
  } else {
    passValidated = true;
  }

  if (values.cognito) {
    console.log("caught cognito errors");
    errors.cognito = values.cognito.message;
    emailValidated = false
    passValidated = false
    console.log(errors)
  }

  if (emailValidated && passValidated && !errors.cognito) {
    loginBtn.disabled = false; //button is no longer no-clickable
  } else {
    loginBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);

  return errors;
}
