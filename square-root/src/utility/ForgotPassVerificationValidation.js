import { checkEmail, checkRegisterPassword, checkCode } from './Validation';

export default function validate(values) {
  let errors = {};

  checkEmail(values, errors);
  checkRegisterPassword(values, errors);
  checkCode(values, errors);

  return errors;
}
