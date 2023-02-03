import React from 'react';

export const OurFeaturesGrid = ({ features }) => {
  return (
    <div className="flex justify-around items-center bg-bgseconday p-4 gap-4 h-[262px]">
      {features?.map((feature) => (
        <div
          className="flex-col flex gap-3 items-center justify-center"
          key={feature?.title}
        >
          <span className="bg-primary rounded-full p-4">{feature?.icon}</span>
          <h3 className="text-lg font-semibold">{feature?.title}</h3>
          <p className="text-center text-sm font-normal">
            {feature?.description}
          </p>
        </div>
      ))}
    </div>
  );
};
