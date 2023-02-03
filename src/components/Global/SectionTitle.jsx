import React from 'react';

export const SectionTitle = ({ title, center }) => {
  return (
    <div
      className={`flex items-center gap-4 mb-8 ${
        center ? 'justify-center' : ''
      }`}
    >
      {center ? <span className="h-[2px] w-14 bg-primary"></span> : null}
      <h3 className="text-tprimary text-3xl font-normal">{title}</h3>
      <span className="h-[2px] w-14 bg-primary"></span>
    </div>
  );
};
