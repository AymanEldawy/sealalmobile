import React from 'react';

export const TextField = ({
  label,
  style,
  resize,
  classes,
  ...textField
}) => {
  return (
    <div className="mb-4">
      {label ? <label className="flex items-center justify-between mb-2">{label}</label> : null}
      <textarea
        className={`border border-gray-300 w-full p-2 rounded-md h-28 ${classes}`}
        style={{ resize: resize ? resize : 'none' }}
        {...textField}
      ></textarea>
    </div>
  );
};
