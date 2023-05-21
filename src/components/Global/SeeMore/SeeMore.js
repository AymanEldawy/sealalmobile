import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const SeeMore = ({ linkClassName, link }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <Link
      href={link ? link : ""}
      className={`text-secondary capitalize ${linkClassName}`}
    >
      {fetchWord("see_more", lang)}
    </Link>
  );
};

export default SeeMore;
