import { useState, useEffect } from 'react';

const useForm = (callback, validate, action) => {
  const [values, setValues] = useState({role: 'Real Estate Developer'});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedSubmitting, setTriedSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setTriedSubmitting(false)
      setValues({
        name: '',
        email: '',
        message: ''
      })
    }
  }, [errors]);

  useEffect(() => {
    if (triedSubmitting) setErrors(validate(values)); //update errors every time values change
  }, [values]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await action();
    setValues((values) => {
      setErrors(validate(values)); //update errors
      setTriedSubmitting(true);
      setIsSubmitting(true);
      return values;
    });
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setValues((values) => ({
      ...values,
      cognito: null,
    })); //update
    setIsSubmitting(false);
  };

  const handleDropDownChange = (event) => {
    setValues({ ...values, role: event.target.value })  //update role
  };

  return {
    handleChange,
    handleSubmit,
    handleDropDownChange,
    values,
    errors,
  }
};

export default useForm;