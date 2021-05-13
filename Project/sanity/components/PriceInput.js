import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(+value));
}

const PriceInput = (props) => {
  const { value, onChange, type } = props;

  return (
    <>
      <h2>
        {type.title} - {value}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.type}
        value={value}
        onChange={onChange}
        // ref={type.inputComponent}
      />
    </>
  );
};

export default PriceInput;
