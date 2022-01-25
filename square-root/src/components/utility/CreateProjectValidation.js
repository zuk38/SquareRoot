import { checkName, checkAddress, checkZip, checkCity } from "./Validation";

export default function validate(values) {
  let errors = {};
  checkName(values, errors);
  checkAddress(values, errors);
  checkZip(values, errors);
  checkCity(values, errors);

  return errors;
}
