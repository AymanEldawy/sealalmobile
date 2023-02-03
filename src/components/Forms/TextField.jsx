import { PropTypes } from 'prop-types';
import React from 'react';

export const TextField = ({ label, handleChange, value, style, resize }) => {
  return (
    <div className="mb-4" style={style}>
      <label className='mb-2'>{label}</label>
      <textarea
        className="border border-gray-300 w-full p-2 rounded-md h-28"
        onChange={handleChange}
        value={value}
        style={{ resize: resize ? resize : 'none' }}
      ></textarea>
    </div>
  );
};
