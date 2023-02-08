import { PropTypes } from 'prop-types';
import React from 'react';
import { CheckIcon } from './../Icons/CheckIcon';
import { ChevronIcon } from './../Icons/ChevronIcon';

export const SelectField = ({
  name,
  label,
  handleChange,
  value,
  list,
  required,
  errors,
  onBlur,
  placeholder,
  ...selectProps
}) => {
  return (
    <div className="mb-4">
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
          {errors?.length ? <span className="">{errors}</span> : null}
        </label>
      ) : null}
      <div className="relative">
        <select
          className="border border-gray-300 w-full p-3 rounded-md appearance-none"
          name={name}
          onChange={handleChange}
          value={value}
          required={required}
          onBlur={!!onBlur ? onBlur : undefined}
          defaultValue={list?.length ? list[0] : null}
          placeholder={placeholder}
          {...selectProps}
        >
          {list &&
            list?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}{' '}
              </option>
            ))}
        </select>
        <span className="-rotate-90 absolute right-3 top-3 rtl:left-3 rtl:right-auto scale-50 bg-white flex items-center justify-center z-10 w-8 h-8">
          <ChevronIcon />
        </span>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.array,
  onBlur: PropTypes.func,
};
