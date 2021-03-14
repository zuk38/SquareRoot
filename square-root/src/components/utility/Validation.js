//helper functions
const PASSLENGTH = 8;
const NAMELENGTH = 40;
const CODELENGTH = 6;

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

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function validatePhone(phone) {
  const phoneRegex = /^\+[1-9]\d{4,14}$/;
  return phoneRegex.test(String(phone)); // true|false
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

function checkPhone(values, errors) {
  if (!values.phone) {
    errors.phone = "Phone number is required";
    return false;
  } else if (!validatePhone(values.phone)) {
    errors.phone = "Invalid phone number";
    return false;
  } 
  return true;
}

function checkCode(values, errors) {
  if (!values.code) {
    errors.code = "Verification code is required";
    return false;
  } else if (!isNumeric(values.code) || values.code.length != CODELENGTH) {
    errors.code = "Incorrect verification code";
    return false;
  } 
  return true;
}

function checkCognito(values, errors) {
  if (values.cognito) {
    console.log("caught cognito errors");
    errors.cognito = values.cognito.message;
  }

  return errors.cognito;
}

export {
  checkEmail,
  checkPassword,
  checkConfPassword,
  checkName,
  changeIcons,
  checkCognito,
  checkCode,
  checkPhone
};
