import React from "react";
import { ChevronIcon } from "../Icons";

const CustomSelectField = ({
  label,
  list,
  error,
  iconClassName,
  selectClassName,
  placeholder,
  iconStart,
  arrowClassName,
  containerClassName,
  ...selectProps
}) => {
  return (
    <div className={`mb-4 w-full ${containerClassName}`}>
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
          {error?.length ? <span className="">{error}</span> : null}
        </label>
      ) : null}
      <div className="relative">
        {iconStart ? (
          <span className="absolute top-3 ltr:left-2 rtl:right-2">{iconStart}</span>
        ) : null}
        <select
          className={`border border-gray-300 text-gray-500 w-full p-3 rounded-md appearance-none ${
            !!iconStart ? "ltr:pl-10 rtl:pr-10" : ""
          }  ${selectClassName}`}
          {...selectProps}
        >
          {placeholder ? <option>{placeholder}</option> : null}
          {list &&
            list?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}{" "}
              </option>
            ))}
        </select>
        <span className={`-rotate-90 absolute ltr:right-3  top-2 rtl:left-3 scale-50 flex items-center justify-center z-10 w-8 h-8 ${arrowClassName}`}>
          <ChevronIcon
            color="#0063C6"
            className={`bg-white ${iconClassName}`}
          />
        </span>
      </div>
    </div>
  );
};

export default CustomSelectField;
