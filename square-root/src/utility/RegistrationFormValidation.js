import {
  checkEmail,
  checkConfPassword,
  checkName,
  checkRole,
  checkRegisterPassword,
} from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkRegisterPassword(values, errors);
  checkConfPassword(values, errors);
  //checkPhone(values, errors);
  checkName(values, errors);
  checkRole(values, errors);

  return errors;
}
