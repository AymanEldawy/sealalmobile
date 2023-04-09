import React from "react";

const SectionTitle = ({ title, extraContent, classes, titleClassName }) => {
  return (
    <div className={`mb-9 flex justify-between ${classes}`}>
      {title ? <h1 className={`before:w-[7px] before:h-full before:bg-primary before:rounded-xl before:absolute relative before:left-0 px-4 py-1 flex items-center font-medium text-[#061432] text-2xl ${titleClassName}`}>{title}</h1> : null}
      {extraContent}
    </div>
  );
};

export default SectionTitle;
