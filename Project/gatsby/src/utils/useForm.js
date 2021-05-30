import { useState } from 'react';

export const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  const updateValue = (e) => {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value, 10);
    }
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  return [values, updateValue];
};
