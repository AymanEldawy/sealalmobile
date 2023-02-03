import React from 'react';
import { ChevronIcon } from './../Icons/ChevronIcon';

export const CustomSlideArrow = ({ direction, onClick }) => {
  return (
    <button
      className={`absolute top-1/2 z-10 ${
        direction === 'next' ? '-right-8' : '-left-8'
      }`}
      style={{
        transform: direction === 'next' ? 'rotate(180deg)' : '',
      }}
      onClick={onClick}
      disabled={!onClick}
    >
      <ChevronIcon />
    </button>
  );
};
