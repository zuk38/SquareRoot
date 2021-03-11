import { checkEmail, changeIcons } from "./Validation";

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let emailValidated = checkEmail(values, errors);
  let submitBtn = document.getElementById("submitBtn");

  if (values.cognito) {
    console.log("caught cognito errors");
    errors.cognito = values.cognito.message;
    emailValidated = false;
    console.log(errors);
  }

  if (emailValidated) {
    submitBtn.disabled = false; //button is no longer no-clickable
  } else {
    submitBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);

  return errors;
}
