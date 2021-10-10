import {
    checkEmail,
    checkName,
  } from "./Validation";
  
  export default function validate(values) {
    let errors = {};
    checkEmail(values, errors);
    checkName(values, errors);
  
    return errors;
  }