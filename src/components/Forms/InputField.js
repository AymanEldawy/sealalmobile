import { PropTypes } from "prop-types";
import React from "react";

export const InputField = ({ label, error, classes, ...inputProps }) => {
  return (
    <div className="mb-4 w-full">
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
          {error?.length ? <span className="">{error}</span> : null}
        </label>
      ) : null}
      <input
        className={`border border-gray-300 w-full p-2 rounded-md ${classes}`}
        {...inputProps}
      />
    </div>
  );
};
