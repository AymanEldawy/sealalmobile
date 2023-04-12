import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

const BackToHome = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Link
      href="/"
      className="!bg-secondary rounded-md text-sm px-6 py-3 !text-black mt-2 block w-fit mx-auto"
    >
      {fetchWord("back_home", lang)}
    </Link>
  );
};

export default BackToHome;
