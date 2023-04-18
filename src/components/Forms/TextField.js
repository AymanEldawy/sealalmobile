import React from 'react';

export const TextField = ({
  label,
  style,
  resize,
  classes,
  labelClassName,
  ...textField
}) => {
  return (
    <div className="mb-4 w-full">
      {label ? <label className={`capitalize text-[#00000080] flex items-center justify-between mb-2  ${labelClassName}`}>{label}</label> : null}
      <textarea
        className={`border border-gray-300  text-[#00000080]w-full p-2 rounded-md h-28 ${classes}`}
        style={{ resize: resize ? resize : 'none' }}
        {...textField}
      ></textarea>
    </div>
  );
};
