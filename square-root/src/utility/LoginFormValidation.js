import { checkEmail, checkLoginPassword } from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkLoginPassword(values, errors);

  return errors;
}
