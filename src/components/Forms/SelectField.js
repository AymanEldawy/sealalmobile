import { PropTypes } from "prop-types";
import React from "react";
import { ChevronIcon } from "../../components/Icons/ChevronIcon";

export const SelectField = ({
  label,
  list,
  error,
  ...selectProps
}) => {
  return (
    <div className="mb-4 w-full">
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
          {error?.length ? <span className="">{error}</span> : null}
        </label>
      ) : null}
      <div className="relative">
        <select
          className="border border-gray-300 w-full p-3 rounded-md appearance-none"
          {...selectProps}
        >
          {list &&
            list?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}{" "}
              </option>
            ))}
        </select>
        <span className="-rotate-90 absolute right-3 top-3 rtl:left-3 rtl:right-auto scale-50 bg-white flex items-center justify-center z-10 w-8 h-8">
          <ChevronIcon color="#0063C6"/>
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
