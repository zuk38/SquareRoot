import { useState, useEffect } from 'react';

const useForm = (validate, initialFormValues = {}) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [triedSubmitting, setTriedSubmitting] = useState(false);

  useEffect(() => {
    if (triedSubmitting) setErrors(validate(values)); //update errors every time values change
  }, [values, triedSubmitting, validate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(e.target);
    setValues({
      ...values,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTriedSubmitting(true);
    setErrors(validate(values));
  };

  const resetForm = () => {
    setValues(initialFormValues);
    setErrors({});
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
