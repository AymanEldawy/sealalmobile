import React, { useContext } from "react";
import { UserIcon } from "../Icons";
import { fetchWord } from "@/lang/fetchWord";
import { LanguageContext } from "@/context/LangContext";
import LanguageBar from "../LanguageBar/LanguageBar";
import Link from "next/link";

const UpperMenu = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className=" bg-primary text-white p-1">
      <div className="flex justify-between items-center container">
        <LanguageBar />
        <Link href="/profile" className="flex items-center gap-1 uppercase text-sm">
          <UserIcon />
          {fetchWord("account", lang)}
        </Link>
      </div>
    </div>
  );
};

export default UpperMenu;
