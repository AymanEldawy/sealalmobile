import { PropTypes } from "prop-types";
import React from "react";

export const InputField = ({
  label,
  error,
  classes,
  iconStart,
  iconEnd,
  ...inputProps
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
        {!!iconStart ? (
          <span className="absolute top-3 left-2 rtl:right-2 rtl:left-auto">
            {" "}
            {iconStart}{" "}
          </span>
        ) : null}
        <input
          className={`border border-gray-300 w-full p-2 py-3 rounded-md ${
            !!iconStart ? "ltr:pl-10 rtl:pr-10" : ""
          } ${!!iconEnd ? "ltr:pr-10 rtl:pl-10" : ""}  ${classes}`}
          {...inputProps}
        />
        {!!iconEnd ? (
          <span className="absolute top-3 rtl:left-2 ltr:right-2">
            {iconEnd}
          </span>
        ) : null}
      </div>
    </div>
  );
};
