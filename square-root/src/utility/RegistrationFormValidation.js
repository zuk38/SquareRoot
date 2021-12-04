import {
  checkEmail,
  checkPassword,
  checkConfPassword,
  checkName,
  checkPhone,
  checkRole,
} from './Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  checkPassword(values, errors);
  checkConfPassword(values, errors);
  checkPhone(values, errors);
  checkName(values, errors);
  checkRole(values, errors);

  return errors;
}
