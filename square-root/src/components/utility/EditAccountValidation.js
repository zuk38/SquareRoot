import { checkEmail, checkName, checkCognito, checkPhone } from "./Validation";

export default function validate(values, editMode) {
  let errors = {};
  console.log(editMode)
  if (editMode.nameMode) checkName(values, errors);
  if (editMode.emailMode) checkEmail(values, errors);
  if (editMode.phoneMode) checkPhone(values, errors);

  if (values.email && values.phone && values.name) checkCognito(values, errors);

  return errors;
}
