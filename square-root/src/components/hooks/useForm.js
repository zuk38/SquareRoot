import { useState } from 'react';

const useForm = (
  validateOnChange = false,
  validate,
  initialFormValues = {},
) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
    if (validateOnChange) validate({ [id]: value });
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
    resetForm
  };
};

export default useForm;
