import React from "react";
import Image from "next/image";
import { ENIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { useState } from "react";

const LanguageBar = () => {
  const { lang, changeLang } = useContext(LanguageContext);
  return (
      <button
        className="flex gap-1 items-center"
        onClick={() => changeLang((p) => p == 'ar' ? 'en' : 'ar')}
      >
        {lang === "en" ? (
          <>
            <ENIcon />
            English
          </>
        ) : (
          <>
            <Image
              src="/images/arabic-lang.png"
              alt="Arabic language"
              width={20}
              height={10}
            />
            العربية
          </>
        )}
      </button>
  );
};

export default LanguageBar;
