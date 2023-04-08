import React from "react";

export const Button = ({ classes, children, ...btn }) => {
  return (
    <button
      className={`p-2 rounded-md text-white bg-primary ${classes}`}
      {...btn}
    >
      {children}
    </button>
  );
};
