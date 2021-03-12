import { checkEmail, checkPassword, changeIcons, checkCognito, checkCode } from "./Validation"

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
  let codeValidated = checkCode(values, errors);
  let submitBtn = document.getElementById("submitBtn");

  if (emailValidated && passValidated && codeValidated && !checkCognito(values, errors)) {
    submitBtn.disabled = false; //button is no longer no-clickable
  } else {
    submitBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(codeValidated, inputCode, iconCode);

  return errors;
}
