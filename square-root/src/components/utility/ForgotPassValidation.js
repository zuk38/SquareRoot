import { checkEmail, checkCognito } from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  if (!errors.email) checkCognito(values, errors);
  return errors;
}
