import { PropTypes } from "prop-types";
import React, { useContext } from "react";

import FileIcon from "../Icons/FileIcon";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";

export const FileUpload = ({ label, containerClass, classes, preview, ...file }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={`mb-4 ${containerClass}`}>
      {label ? (
        <label className="flex items-center justify-between mb-2">
          {label}
        </label>
      ) : null}
  
      <div
        className={`min-h-[120px] border-dashed border-2 flex justify-center items-center text-sm relative rounded-md ${classes}`}
      >
        {
          preview ? <Image src={preview} alt="upload file" height={150} width={150} className="w-full h-full object-cover max-w-none" /> : null
        }
        <span className="flex flex-col justify-center text-[#747474] items-center gap-1 ">
          <FileIcon />
          {fetchWord("upload_products", lang)}
        </span>
        <input
          type="file"
          multiple
          className="absolute top-0 left-0 w-full h-full z-10 opacity-0"
          {...file}
        />
      </div>
    </div>
  );
};
