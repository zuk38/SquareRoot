import { checkEmail } from '../components/utility/Validation';

export default function validate(values) {
  let errors = {};
  checkEmail(values, errors);
  return errors;
}
