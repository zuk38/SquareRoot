//helper functions
const PASSLENGTH = 8;
const NAMELENGTH = 40;
const CODELENGTH = 6;
const ZIPLENGTH = 4;

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasNumber(str) {
  return /\d/.test(str);
}

function validateRegexString(email) {
  const regexString = /^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/;
  return regexString.test(String(email).toLowerCase()); // true|false
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string
  ); // ...and ensure strings of whitespace fail
}

function validatePhone(phone) {
  const phoneRegex = /^\+[1-9]\d{4,14}$/;
  return phoneRegex.test(String(phone)); // true|false
}

//--------------------------------------------------------------------------------------------

function checkEmail(values, errors) {
  console.log("lalala")
  if (!values.email || values.email.length === 0) errors.email = "E-mail adress is required";
  else if (!validateRegexString(values.email))
    errors.email = "E-mail adress is invalid";
}

function checkPassword(values, errors) {
  if (!('password' in values)) return
  if (!values.password || values.password.length === 0) errors.password = "Password is required";
  else if (values.password.length < PASSLENGTH)
    errors.password = "Password must be 8 or more characters";
  else if (!hasLowerCase(values.password))
    errors.password = "Password must have lowercase letters";
  else if (!hasUpperCase(values.password))
    errors.password = "Password must have uppercase letters";
  else if (!hasNumber(values.password))
    errors.password = "Password must have digits";
}

function checkConfPassword(values, errors) {
  if (!values.confirmPassword) errors.confirmPassword = "Password is required";
  else if (values.password !== values.confirmPassword)
    errors.confirmPassword = "Passwords do not match";
}

function checkName(values, errors) {
  if (!values.name) errors.name = "Name is required";
  else if (values.name.length > NAMELENGTH) errors.name = "Name too long";
}

function checkPhone(values, errors) {
  if (!values.phone) errors.phone = "Phone number is required";
  else if (!validatePhone(values.phone)) errors.phone = "Invalid phone number";
}

function checkCode(values, errors) {
  if (!values.code) errors.code = "Verification code is required";
  else if (!isNumeric(values.code) || values.code.length != CODELENGTH)
    errors.code = "Incorrect verification code";
}

function checkCognito(values, errors) {
  if (values.cognito) {
    errors.cognito = values.cognito.message;
  }

  return errors.cognito;
}

function checkZip(values, errors) {
  if (!values.zip) errors.zip = "Zip code is required";
  else if (!isNumeric(values.zip) || values.zip.length != ZIPLENGTH)
    errors.zip = "Invalid zip code";
}

function checkAddress(values, errors) {
  if (!values.address) errors.address = "Address is required";
}

function checkMessage(values, errors) {
  if (!values.message) errors.message = "Message is required";
}

function checkConditions(values, errors) {
  if (values.conditions === false || values.conditions === undefined) errors.conditions = "Please accept our Terms of Use and Privacy Policy to continue";
}

export {
  checkEmail,
  checkPassword,
  checkConfPassword,
  checkName,
  checkCognito,
  checkCode,
  checkPhone,
  checkAddress,
  checkZip,
  checkMessage,
  checkConditions
};
