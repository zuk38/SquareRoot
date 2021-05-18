import {
  checkEmail,
  checkPassword,
  checkConfPassword,
  checkName,
  checkCognito,
  checkPhone,
} from "./Validation";

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkPassword(values, errors);
  checkConfPassword(values, errors);
  checkPhone(values, errors);
  checkName(values, errors);
  if (values.email && values.password && values.confirmPassword && values.phone && values.name) checkCognito(values, errors);

  return errors;
}
