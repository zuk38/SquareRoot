import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) { //check if there are no errors and call the callback if not
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));  //update errors
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.id]: event.target.value }));  //update & validate
    setValues((values) => {
      setErrors(validate(values));  //update errors
      return values;
    });    
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;