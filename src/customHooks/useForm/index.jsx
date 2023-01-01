/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import ErrorComp from '../../components/ErrorComp';

const useForm = (formInput, validationObj, Toast) => {
  const [formValues, setFormValues] = useState(formInput);

  const [error, setError] = useState('');

  const getErrorComp = () => !!error && <ErrorComp error={error} />;

  const resetForm = (resetInput) => {
    if (resetInput) {
      // setFormValues((prevVal) => ({ ...prevVal, ...resetInput }));
      setFormValues((prevVal) => {
        const newVals = {};
        Object.keys(prevVal).forEach((key) => {
          newVals[key] = resetInput[key] || prevVal[key];
        });
        return newVals;
      });
    } else {
      setFormValues((prevVal) => {
        const newVals = {};
        Object.keys(prevVal).forEach((key) => {
          newVals[key] = '';
        });
        return newVals;
      });
    }
  };

  const checkAllRequired = (except = []) => {
    setError('');
    let allRequired = true;
    Object.keys(formValues).forEach((key) => {
      if (!except.includes(key) && !formValues[key]) {
        allRequired = false;
        setError(`${key} is a required field`);
        Toast?.error(`${key} is a required field`);
      }
    });
    return allRequired;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInputs = (except = []) => {
    setError('');
    const formKeys = Object.keys(formValues);
    for (const keyVal of formKeys) {
      if (!except.includes(keyVal) && validationObj[keyVal]) {
        const testObj = validationObj[keyVal];
        const func = testObj.smallFormatter;
        const formatted = func ? func(formValues[keyVal]) : formValues[keyVal];
        if (
          !testObj?.pattern?.test(formatted)
        ) {
          setError(
            testObj.errorMessage || `${keyVal} validation error`,
          );
          Toast?.error(testObj.errorMessage || `${keyVal} validation error`);
          return false;
        }
      }
    }
    return true;
  };

  return {
    handleChange,
    formValues,
    resetForm,
    checkAllRequired,
    validateInputs,
    setError,
    error,
    getErrorComp,
  };
};

export default useForm;
