import { checkEmail, checkPassword, checkConfPassword, checkName, changeIcons, checkCognito } from "./Validation"

function validatePhone(phone) {
  const phoneRegex = /^\+[1-9]\d{4,14}$/;
  return phoneRegex.test(String(phone)); // true|false
}

export default function validate(values) {
  let errors = {};
  let inputEmail = document.getElementById("email");
  let iconEmail = document.getElementById("emailCheckIcon");
  let inputPassword = document.getElementById("password");
  let iconPassword = document.getElementById("passwordCheckIcon");
  let inputConfPassword = document.getElementById("confirmPassword");
  let iconConfPassword = document.getElementById("confPassCheckIcon");
  let inputPhone = document.getElementById("phone");
  let iconPhone = document.getElementById("phoneCheckIcon");
  let inputName = document.getElementById("name");
  let iconName = document.getElementById("nameCheckIcon");
  let emailValidated = checkEmail(values, errors);
  let passValidated = checkPassword(values, errors);
  let confPassValidated = checkConfPassword(values, errors);
  let phoneValidated = false;
  let nameValidated = checkName(values, errors);
  let registerBtn = document.getElementById("registerBtn");

  if (!values.phone) {
    errors.phone = "Phone number is required";
    phoneValidated = false;
  } else if (!validatePhone(values.phone)) {
    errors.phone = "Invalid phone number";
    phoneValidated = false;
  } else {
    phoneValidated = true;
  }

  if (emailValidated && passValidated && confPassValidated && phoneValidated && nameValidated && !checkCognito(values, errors)) {
    registerBtn.disabled = false; //button is no longer no-clickable
  } else {
    registerBtn.disabled = true;
  }

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(confPassValidated, inputConfPassword, iconConfPassword);
  changeIcons(phoneValidated, inputPhone, iconPhone);
  changeIcons(nameValidated, inputName, iconName);

  return errors;
}
