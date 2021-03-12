import {
  checkEmail,
  checkPassword,
  checkConfPassword,
  checkName,
  changeIcons,
  checkCognito,
  checkPhone,
} from "./Validation";

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
  let phoneValidated = checkPhone(values, errors);
  let nameValidated = checkName(values, errors);
  let roleDropDown = document.getElementById("roleDropDown");
  roleDropDown.classList.add("is-success");
  let registerBtn = document.getElementById("registerBtn");

  if (checkCognito(values, errors)) {
    emailValidated = false
    phoneValidated = false
    passValidated = false
    confPassValidated = false
    nameValidated = false
  }

  emailValidated &&
  passValidated &&
  confPassValidated &&
  phoneValidated &&
  nameValidated
    ? (registerBtn.disabled = false)
    : (registerBtn.disabled = true);

  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(confPassValidated, inputConfPassword, iconConfPassword);
  changeIcons(phoneValidated, inputPhone, iconPhone);
  changeIcons(nameValidated, inputName, iconName);

  return errors;
}
