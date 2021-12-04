import { useState, useEffect } from 'react';

const useForm = (validate, callback = null, initialFormValues = {}) => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [triedSubmitting, setTriedSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (callback) callback();
      setTriedSubmitting(false);
    }
  }, [errors, isSubmitting, callback]);

  useEffect(() => {
    if (triedSubmitting) setErrors(validate(values)); //update errors every time values change
  }, [values, triedSubmitting, validate]);

  const handleChange = (e) => {
    const { id, value, name } = e.target;
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
    setTriedSubmitting(true);
    setErrors(validate(values));
    setIsSubmitting(true);
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
