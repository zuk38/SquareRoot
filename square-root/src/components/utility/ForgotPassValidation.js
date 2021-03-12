import { checkEmail, changeIcons, checkCognito } from "./Validation";

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let emailValidated = checkEmail(values, errors);
  let submitBtn = document.getElementById("submitBtn");

  if (checkCognito(values, errors)) {
    emailValidated = false;
  }

  if (emailValidated) {
    submitBtn.disabled = false; //button is no longer no-clickable
  } else {
    submitBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);

  return errors;
}
