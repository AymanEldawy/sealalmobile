import { PropTypes } from "prop-types";
import React from "react";
import DangerIcon from "../Icons/DangerIcon";

export const InputField = ({
  label,
  error,
  classes,
  iconStart,
  iconEnd,
  containerClassName,
  ...inputProps
}) => {
  return (
    <div className={`mb-4 w-full ${containerClassName}`}>
      {label ? (
        <label className={`capitalize flex items-center justify-between mb-2 ${!!error? 'text-red-500' :''}`}>
          {label}
        </label>
      ) : null}
      <div className="relative">
        {!!iconStart ? (
          <span className="absolute top-3 left-2 rtl:right-2 rtl:left-auto">
            {" "}
            {iconStart}{" "}
          </span>
        ) : null}
        <input
          className={`border border-gray-300 w-full p-2 py-3 rounded-md ${!!iconStart ? "ltr:pl-10 rtl:pr-10" : ""
            } ${!!iconEnd ? "ltr:pr-10 rtl:pl-10" : ""}  ${classes} ${!!error? 'border-red-500 text-red-500' : ''}`}
          {...inputProps}
        />
        {!!iconEnd ? (
          <span className="absolute top-3 rtl:left-2 ltr:right-2">
            {iconEnd}
          </span>
        ) : null}
        {!!error ? <span className="absolute top-4 rtl:-left-6 ltr:-right-6"><DangerIcon /> </span> : null}
      </div>
      {!!error?.length ? <span className="text-xs text-red-500 mt-2">{error}</span> : null}
    </div>
  );
};
