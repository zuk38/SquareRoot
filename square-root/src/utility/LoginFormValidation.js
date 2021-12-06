import { checkEmail, checkLoginPassword } from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkLoginPassword(values, errors);
  //if (values.email && values.password) checkCognito(values, errors);

  return errors;
}
