import { checkEmail, checkPassword, changeIcons, checkCognito } from "./Validation"

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let inputPassword = document.getElementById("password");
  let iconPassword = document.getElementById("passwordCheckIcon");
  let emailValidated = checkEmail(values, errors);
  let passValidated = checkPassword(values, errors);
  let loginBtn = document.getElementById("loginBtn");

  if (emailValidated && passValidated && !checkCognito(values, errors)) {
    loginBtn.disabled = false; //button is no longer no-clickable
  } else {
    loginBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);

  return errors;
}
