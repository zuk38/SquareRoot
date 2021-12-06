import { useState, useEffect } from 'react';

const useForm = (
  validate,
  callback = null,
  action = null,
  initialFormValues = {}
) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [triedSubmitting, setTriedSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log(Object.keys(errors));
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (callback) callback();
      resetForm();
    }
  }, [errors]);

  useEffect(() => {
    if (triedSubmitting) setErrors(validate(values)); //update errors every time values change
  }, [values]);

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    console.log(id);
    //id undefined for dropdown
    let key = id === undefined ? name : id;
    setValues({
      ...values,
      [key]: value,
    });
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action) action();
    setErrors(validate(values)); //update errors
    setTriedSubmitting(true);
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setValues(initialFormValues);
    setErrors({});
    setTriedSubmitting(false);
    setIsSubmitting(false);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
