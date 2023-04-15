import React from "react";

export const Button = ({ classes, children, ...btn }) => {
  return (
    <button
      className={`p-3 rounded-md text-black bg-secondary ${classes}`}
      {...btn}
    >
      {children}
    </button>
  );
};
