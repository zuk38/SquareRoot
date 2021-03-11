const PASSLENGTH = 8;
const CODELENGTH = 6;

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function hasUpperCase(str) {
  if (typeof str != "string") return false
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  if (typeof str != "string") return false
  return str.toUpperCase() != str;
}

function hasNumber(str) {
  if (typeof str != "string") return false
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
  let inputCode = document.getElementById("code");
  let iconCode = document.getElementById("codeCheckIcon");
  let emailValidated = false;
  let passValidated = false;
  let codeValidated = false;
  let submitBtn = document.getElementById("submitBtn");

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

  if (!values.code) {
    errors.code = "Verification code is required";
    codeValidated = false;
  } else if (!isNumeric(values.code) || values.code.length != CODELENGTH) {
    errors.code = "Incorrect verification code";
    codeValidated = false;
  } else {
    codeValidated = true;
  }

  if (values.cognito) {
    console.log("caught cognito errors");
    errors.cognito = values.cognito.message;
    emailValidated = false
    passValidated = false
    codeValidated = false
    console.log(errors)
  }

  if (emailValidated && passValidated && codeValidated && !errors.cognito) {
    submitBtn.disabled = false; //button is no longer no-clickable
  } else {
    submitBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(codeValidated, inputCode, iconCode);

  

  return errors;
}
