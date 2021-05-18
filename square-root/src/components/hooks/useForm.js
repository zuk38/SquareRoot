import { useState, useEffect } from 'react';

const useForm = (callback, validate, action) => {
  const [values, setValues] = useState({role: 'Real Estate Developer'});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [triedSubmitting, setTriedSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values)
      callback();
    }
  }, [errors]);

  useEffect(() => {
    if (triedSubmitting) setErrors(validate(values)); //update errors every time values change
  }, [values]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    await action();
    console.log(values);
    setValues((values) => {
      setErrors(validate(values)); //update errors
      setTriedSubmitting(true);
      setIsSubmitting(true);
      return values;
    });
  };

  const handleChange = (event) => {
    event.persist();
    console.log(values)
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

/*import { useState, useEffect, useCallback } from "react";

const useForm = (callback, validate, action) => {
  const [values, setValues] = useState({role: 'Real Estate Developer'});
  /*const setRole = useCallback((newValue) => {
    setValues({ ...values, role: newValue })
  }, [values]) // ← this bit ensures that the value is always up to date inside the callback*/

  /*const [errors, setErrors] = useState({});
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
    console.log(values.role)
    await action();
    console.log(values);
    setValues((values) => {
      setErrors(validate(values)); //update errors
      setIsSubmitting(true);
      return values;
    });

    console.log(Object.keys(errors).length);
    console.log(isSubmitting);
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
  };
};

export default useForm;*/
