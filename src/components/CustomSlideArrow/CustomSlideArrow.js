const { ChevronIcon } = require("../Icons");
import React from "react";


const CustomSlideArrow = (props) => {
  const { classes, style, onClick, direction } = props;
  return (
    <button
      className={`absolute -top-[75px] right-0 w-9 h-9 rounded-md flex justify-center items-center bg-white ${classes} disabled:text-[#707070] text-primary`}
      onClick={onClick}
      disabled={!onClick}
    >
      <span
        className={
          direction === "prev" ? "block rotate-180 scale-75" : "scale-75 block"
        }
      >
        <ChevronIcon />
      </span>
    </button>
  );
};

export default CustomSlideArrow