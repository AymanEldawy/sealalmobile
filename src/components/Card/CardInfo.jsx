import React from 'react';

export const CardInfo = ({ title, category, inCategory }) => {
  return (
    <>
      {inCategory ? null : <p>{category}</p>}
      <h3>{title}</h3>
    </>
  );
};
