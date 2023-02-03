import React from 'react';

export const CardInfo = ({ title, category }) => {
  return (
    <>
      <p>{category}</p>
      <h3>{title}</h3>
    </>
  );
};
