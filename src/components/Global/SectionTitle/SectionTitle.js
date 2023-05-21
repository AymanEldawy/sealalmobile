import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

const SectionTitle = ({ title, link }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex justify-between items-center mb-6'>
      <h2 className='capitalize text-secondary text-xl font-semibold flex items-center gap-2'>
        {title}
        <span className="text-primary border border-primary rounded-2xl p-1 text-xs">{fetchWord('hot_categories', lang)}</span>
      </h2>
      <Link href={link} className='text-primary'>{fetchWord('all', lang)}</Link>
    </div>
  );
};

export default SectionTitle;
