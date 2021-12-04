import { checkEmail, checkPassword } from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkPassword(values, errors);
  //if (values.email && values.password) checkCognito(values, errors);

  return errors;
}
