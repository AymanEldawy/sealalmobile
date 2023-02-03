import React from 'react';

export const StarIcon = ({ color, width }) => {
  return (
    <>
      {color === 'yellow' ? (
        <svg
          width={width ? width : '16'}
          height={width ? width : '15'}
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.70078 0L10.1154 4.57656L15.2141 5.45876L11.6077 9.16944L12.3443 14.2912L7.70078 12.008L3.05728 14.2912L3.79384 9.16944L0.187435 5.45876L5.28616 4.57656L7.70078 0Z"
            fill="#F5BC4C"
          />
        </svg>
      ) : (
        <svg
          width={width ? width : '16'}
          height={width ? width : '15'}
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.09922 1.07149L10.0716 4.80988L10.1863 5.02732L10.4286 5.06924L14.5935 5.78987L11.6476 8.82096L11.4763 8.99726L11.5112 9.24061L12.1129 13.4244L8.31984 11.5593L8.09922 11.4508L7.87859 11.5593L4.08552 13.4244L4.68719 9.24061L4.72218 8.99726L4.55083 8.82096L1.60492 5.78987L5.76984 5.06924L6.01209 5.02732L6.12682 4.80988L8.09922 1.07149Z"
            stroke="#F5BC4C"
          />
        </svg>
      )}
    </>
  );
};
