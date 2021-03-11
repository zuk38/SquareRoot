//helper functions
const PASSLENGTH = 8;
const NAMELENGTH = 40;

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasNumber(str) {
  console.log(/\d/.test(str));
  return /\d/.test(str);
}

function validateRegexString(email) {
  const regexString = /^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/;
  return regexString.test(String(email).toLowerCase()); // true|false
}

//--------------------------------------------------------------------------------------------

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

function checkEmail(values, errors) {
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!validateRegexString(values.email)) {
    errors.email = "Email address is invalid";
  }

  return values.email && validateRegexString(values.email);
  //return errors;
}

function checkPassword(values, errors) {
  if (!values.password) {
    errors.password = "Password is required";
    return false;
  } else if (values.password.length < PASSLENGTH) {
    errors.password = "Password must be 8 or more characters";
    return false;
  } else if (!hasLowerCase(values.password)) {
    errors.password = "Password must have lowercase letters";
    return false;
  } else if (!hasUpperCase(values.password)) {
    errors.password = "Password must have uppercase letters";
    return false;
  } else if (!hasNumber(values.password)) {
    errors.password = "Password must have digits";
    return false;
  }

  return true;
}

function checkConfPassword(values, errors) {
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
    return false;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    return false;
  }

  return true;
}

function checkName(values, errors) {
  if (!values.name) {
    errors.name = "Name is required";
    return false;
  } else if (values.name.length > NAMELENGTH) {
    errors.name = "Name too long";
    return false;
  } 

  return true;
}

export { checkEmail, checkPassword, checkConfPassword, checkName, changeIcons };
