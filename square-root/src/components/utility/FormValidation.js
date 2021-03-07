function validateForm(event, state) {

    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("is-danger");
      }
    }
  
    if (state.hasOwnProperty("firstname") && state.firstname === "") {
      document.getElementById("firstname").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("lastname") && state.lastname === "") {
      document.getElementById("lastname").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("email") && state.email === "") {
      document.getElementById("email").classList.add("is-danger");
      return { blankfield: true };
    }
    if (
      state.hasOwnProperty("verificationcode") &&
      state.verificationcode === ""
    ) {
      document.getElementById("verificationcode").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("password") && state.password === "") {
      document.getElementById("password").classList.add("is-danger");
      return { blankfield: true };
    }
    if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
      document.getElementById("confirmpassword").classList.add("is-danger");
      return { blankfield: true };
    }
    //do passwords match?
    if (
      state.hasOwnProperty("password") &&
      state.hasOwnProperty("confirmpassword") &&
      state.password !== state.confirmpassword
    ) {
      document.getElementById("password").classList.add("is-danger");
      document.getElementById("confirmpassword").classList.add("is-danger");
      return { passwordmatch: true };
    }
    return;
  }
  
  export default validateForm;