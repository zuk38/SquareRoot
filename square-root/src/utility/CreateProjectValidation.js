import {
  checkName,
  checkAddress,
  checkZip,
} from '../components/utility/Validation';
import { checkCity } from './Validation';

export default function validate(values) {
  let errors = {};
  checkName(values, errors);
  checkAddress(values, errors);
  checkCity(values, errors);
  checkZip(values, errors);

  return errors;
}
