import { PropTypes } from 'prop-types';
import React from 'react';

export const InputField = ({
  name,
  type,
  label,
  handleChange,
  value,
  errors,
  ...inputProps
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="flex items-center justify-between mb-2">
        {label}
        {errors?.length ? <span className="">{errors}</span> : null}
      </label>
      <input
        className="border border-gray-300 w-full p-2 rounded-md"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        {...inputProps}
      />
    </div>
  );
};
