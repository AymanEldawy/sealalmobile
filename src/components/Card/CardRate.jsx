import React from 'react';
import { StarIcon } from './../Icons/StarIcon';

export const CardRate = ({ rating, width }) => {
  return (
    <div className="card-rate flex items-center">
      {Array.from(['1', '2', '3', '4', '5']).map((rate, index) => (
        <span key={index} style={{ fontSize: '15px' }}>
          <StarIcon
            color={index < rating ? 'yellow' : ''}
            width={width || 18}
          />
        </span>
      ))}
    </div>
  );
};
