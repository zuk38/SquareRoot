import { useState, useEffect } from "react";

const useForm = (callback, validate, action) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //check if there are no errors and call the callback if not
      callback();
    }
  }, [errors]);

  useEffect(() => {
    setErrors(validate(values)); //update errors every time values change
  }, [values]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await action();
    console.log(values);
    setValues((values) => {
      setErrors(validate(values));  //update errors
      return values;
    });
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.id]: event.target.value,
    })); //update
    setValues((values) => ({
      ...values,
      cognito: null,
    })); //update
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
