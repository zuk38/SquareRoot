import {
  checkConditions,
  checkEmail,
  checkMessage,
  checkName,
} from "./Validation";

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkName(values, errors);
  if(values.message != undefined) checkMessage(values, errors);
  checkConditions(values, errors);

  return errors;
}
