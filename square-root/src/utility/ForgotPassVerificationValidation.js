import {
  checkEmail,
  checkRegisterPassword,
  checkCognito,
  checkCode,
} from './Validation';

export default function validate(values) {
  let errors = {};

  checkEmail(values, errors);
  checkRegisterPassword(values, errors);
  checkCode(values, errors);

  /*if (!errors.email && !errors.password && !errors.code)
    checkCognito(values, errors);*/

  return errors;
}
