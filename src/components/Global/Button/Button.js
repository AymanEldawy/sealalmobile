import React from "react";

export const Button = ({ classes, outline, children, ...btn }) => {
  return (
    <button
      className={`p-2 rounded-md ${outline ? "text-primary border border-primary hover:!bg-primary hover:!text-white" : "text-white bg-primary"}  capitalize ${classes}`}
      {...btn}
    >
      {children}
    </button>
  );
};
