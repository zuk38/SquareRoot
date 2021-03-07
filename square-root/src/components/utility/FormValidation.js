const passLength = 8;

function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}

function hasLength(str) {
  return str.length >= passLength;
}

function hasNumber(str) {
    return (/\d/.test(str));
}

function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-danger");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-danger");
    }
  }

  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-danger");
    return { blankField: true };
  }

  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-danger");
    return { blankField: true };
  }
  if (!hasLength(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { tooShort: true };
  }
  
  if (!hasUpperCase(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noUpperCase: true };
  }
  if (!hasLowerCase(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noLowerCase: true };
  }
  /*if (!hasNumber(state.password)) {
    document.getElementById("password").classList.add("is-danger");
    return { noNumnber: true };
  }*/
  if (
    state.hasOwnProperty("confirmPassword") && state.confirmPassword === "") {
    document.getElementById("confirmPassword").classList.add("is-danger");
    return { blankField: true };
  }
  //do passwords match?
  if (
    state.hasOwnProperty("password") &&
    state.hasOwnProperty("confirmPassword") &&
    state.password !== state.confirmPassword
  ) {
    document.getElementById("password").classList.add("is-danger");
    document.getElementById("confirmPassword").classList.add("is-danger");
    return { passwordsNoMatch: true };
  }
  return;
}

export default validateForm;
