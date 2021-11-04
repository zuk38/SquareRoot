import { checkName, checkAddress, checkZip } from './Validation';

export default function validate(values) {
  let errors = {};
  checkName(values, errors);
  checkAddress(values, errors);
  checkZip(values, errors);

  return errors;
}
