import { checkEmail, checkName, checkCognito, checkPhone, checkAddress, checkZip } from "./Validation";

export default function validate(values, editMode) {
  let errors = {};
  if (!editMode) return
  
  if (editMode.nameMode) checkName(values, errors);
  if (editMode.emailMode) checkEmail(values, errors);
  if (editMode.phoneMode) checkPhone(values, errors);
  if (editMode.zipMode) checkZip(values, errors);
  if (editMode.addressMode) checkAddress(values, errors);

  if (values.email && values.phone && values.name) checkCognito(values, errors);

  return errors;
}
