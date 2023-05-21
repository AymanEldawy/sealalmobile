import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";
import LanguageBar from "../LanguageBar/LanguageBar";

const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className=" bg-secondary text-white ">
      <div className="text-xs flex justify-between items-center h-[35px] container">
        <div className="flex items-center gap-4">
          {/* <LanguageBar /> */}
          <p>{fetchWord('express_description', lang)}</p>
        </div>
        <div className="relative flex gap-6 items-center">
          <Link href="">{fetchWord('coupon_discount', lang)}</Link>
          <Link href="">{fetchWord('sell_trenyol', lang)}</Link>
          <Link href="">{fetchWord('help_support', lang)}</Link>
          <Link href="">{fetchWord('compare', lang)}</Link>

        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
