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

function validatePhone(phone) {
  const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
  return phoneRegex.test(String(phone)); // true|false
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
  let inputConfPassword = document.getElementById("confirmPassword");
  let iconConfPassword = document.getElementById("confPassCheckIcon");
  let inputPhone = document.getElementById("phone");
  let iconPhone = document.getElementById("phoneCheckIcon");
  let emailValidated = false;
  let passValidated = false;
  let confPassValidated = false;
  let phoneValidated = false;
  let registerBtn = document.getElementById("registerBtn");

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

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password confirmation is required";
    confPassValidated = false;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    confPassValidated = false;
  } else {
    confPassValidated = true;
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
    phoneValidated = false;
  } else if (!validatePhone(values.phone)) {
    errors.phone = "Invalid phone number";
    phoneValidated = false;
  } else {
    phoneValidated = true;
  }

  //if (values.apierrors) {
  //}
  changeIcons(emailValidated, inputEmail, iconEmail);
  changeIcons(passValidated, inputPassword, iconPassword);
  changeIcons(confPassValidated, inputConfPassword, iconConfPassword);
  changeIcons(phoneValidated, inputPhone, iconPhone);

  if (emailValidated && passValidated && confPassValidated && phoneValidated) {
    registerBtn.disabled = false; //button is no longer no-clickable
  } else {
    registerBtn.disabled = true;
  }

  return errors;
}
