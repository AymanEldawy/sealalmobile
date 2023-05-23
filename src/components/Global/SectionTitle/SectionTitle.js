import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

const SectionTitle = ({ title, showHotText, link }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='flex justify-between items-center mb-3'>
      <h2 className='capitalize text-secondary font-semibold flex items-center gap-2'>
        {title}
        {
          showHotText ?
            <span className="text-primary border border-primary rounded-2xl p-1 text-xs">{fetchWord('hot_categories', lang)}</span>
            : null}
      </h2>
      {
        link ? <Link href={link} className='text-primary capitalize'>{fetchWord('see_all', lang)}</Link> : null
      }
    </div>
  );
};

export default SectionTitle;
