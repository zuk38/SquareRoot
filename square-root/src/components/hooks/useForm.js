import { useState, useEffect } from "react";

const useForm = (callback, validate, action) => {
  const [values, setValues] = useState({ role: "Real Estate Developer" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedSubmitting, setTriedSubmitting] = useState(false);
  const[edit, setEdit] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setTriedSubmitting(false);
      setValues({
        name: undefined,
        email: undefined,
        message: undefined,
        phone: undefined,
        role: undefined,
      });
    }
  }, [errors]);

  useEffect(() => {
    console.log(edit)
    if (triedSubmitting) setErrors(validate(values, edit)); //update errors every time values change
  }, [values]);

  const handleSubmit = async (event, editMode) => {
    if (event) event.preventDefault();
    setEdit(editMode)
    await action();
    setValues((values) => {
      setErrors(validate(values, editMode)); //update errors
      setTriedSubmitting(true);
      setIsSubmitting(true);
      return values;
    });
  };

  const handleChange = (event) => {
    event.persist();
    console.log(event.target.name)
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setValues((values) => ({
      ...values,
      cognito: null,
    })); //update
    console.log(values);
    setIsSubmitting(false);
  };

  const handleDropDownChange = (event) => {
    setValues({ ...values, role: event.target.value }); //update role
  };

  return {
    handleChange,
    handleSubmit,
    handleDropDownChange,
    values,
    errors,
  };
};

export default useForm;
