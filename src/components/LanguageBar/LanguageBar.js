import React from "react";
import Image from "next/image";
import { ENIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { useState } from "react";

const LanguageBar = () => {
  const { lang, changeLang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex gap-1 items-center"
        // onClick={() => setOpen((p) => !p)}
        onClick={() => changeLang(prev => prev === 'ar'? 'en': 'ar')}
      >
        {lang === "en" ? (
          <>
            <ENIcon />
           
          </>
        ) : (
          <>
            <Image
              src="/images/arabic-lang.png"
              alt="Arabic language"
              width={30}
              height={25}
            />
        
          </>
        )}
      </button>
      {/* {open ? (
        <ul className="absolute top-6 ltr:left-0 rtl:right-0 min-w-[120px] py-4 bg-white shadow rounded-md text-gray-500 flex flex-col">
          {lang === "ar" ? (
            <li
              onClick={() => {
                changeLang("en")
                setOpen(false)
              }}
              className="flex gap-2 items-center cursor-pointer text-sm hover:bg-gray-100  p-2"
            >
              <ENIcon />
              English
            </li>
          ) : (
            <li
              onClick={() => {
                changeLang("ar")
                setOpen(false)
              }}
              className="flex gap-2 items-center cursor-pointer text-sm hover:bg-gray-100 p-2"
            >
              <Image
                src="/images/arabic-lang.png"
                alt="Arabic language"
                width={20}
                height={10}
              />
              Arabic
            </li>
          )}
        </ul>
      ) : null} */}
    </div>
  );
};

export default LanguageBar;
