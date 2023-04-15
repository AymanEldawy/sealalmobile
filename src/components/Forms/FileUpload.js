import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import { PropTypes } from "prop-types";
import React, { useContext } from "react";

import FileIcon from "../Icons/FileIcon";

export const FileUpload = ({ label,labelClassName ,containerClass, classes, ...file }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={`mb-4 ${containerClass}`}>
      {label ? (
        <label className={`flex text-[#00000080] items-center justify-between mb-2 ${labelClassName}`}>
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
