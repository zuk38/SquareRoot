function validateRegexString(email) {
    const regexString = /^((\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)\s*[;]{0,1}\s*)+$/;
    return regexString.test(String(email).toLowerCase()); // true|false
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
    let emailValidated = false;
    let submitBtn = document.getElementById("submitBtn");
  
    if (!values.email) {
      errors.email = "Email address is required";
      emailValidated = false;
    } else if (!validateRegexString(values.email)) {
      errors.email = "Email address is invalid";
      emailValidated = false;
    } else {
      emailValidated = true;
    }

    if (values.cognito) {
      console.log("caught cognito errors");
      errors.cognito = values.cognito.message;
      emailValidated = false
      console.log(errors)
    }
  
    if (emailValidated && !errors.cognito) {
      submitBtn.disabled = false; //button is no longer no-clickable
    } else {
      submitBtn.disabled = true;
    }

    changeIcons(emailValidated, inputEmail, iconEmail);
  
    return errors;
  }