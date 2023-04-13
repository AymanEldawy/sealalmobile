import { PropTypes } from "prop-types";
import React, { useContext } from "react";

import FileIcon from "../Icons/FileIcon";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

export const FileUpload = ({ label, containerClass, classes, ...file }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={`mb-4 ${containerClass}`}>
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
        </label>
      ) : null}
      <div
        className={`min-h-[120px] bg-bmain flex justify-center items-center text-sm relative rounded-md ${classes}`}
      >
        <span className="flex items-center gap-1 ">
          <span className="scale-90">
            <FileIcon />
          </span>
          {fetchWord("upload_photo", lang)}
        </span>
        <input
          type="file"
          className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          {...file}
        />
      </div>
    </div>
  );
};
