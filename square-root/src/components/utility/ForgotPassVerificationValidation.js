import { checkEmail, checkPassword, changeIcons } from "./Validation"

const CODELENGTH = 6;

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let inputPassword = document.getElementById("password");
  let iconPassword = document.getElementById("passwordCheckIcon");
  let inputCode = document.getElementById("code");
  let iconCode = document.getElementById("codeCheckIcon");
  let emailValidated = checkEmail(values, errors);
  let passValidated = checkPassword(values, errors);
  let codeValidated = false;
  let submitBtn = document.getElementById("submitBtn");

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

  if (emailValidated && passValidated && codeValidated) {
    submitBtn.disabled = false; //button is no longer no-clickable
  } else {
    submitBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(codeValidated, inputCode, iconCode);

  return errors;
}
