import {
  checkEmail,
  checkPassword,
  checkCognito,
  checkCode,
} from '../components/utility/Validation';

export default function validate(values) {
  let errors = {};

  checkEmail(values, errors);
  checkPassword(values, errors);
  checkCode(values, errors);

  /*if (!errors.email && !errors.password && !errors.code)
    checkCognito(values, errors);*/

  return errors;
}
