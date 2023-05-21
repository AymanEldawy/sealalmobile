import React from "react";
import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const SearchBar = ({ inputClassName, containerClassName, iconClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className={`flex bg-white rounded-3xl flex-1 border border-primary items-center ${containerClassName}`}>
      <select className="bg-transparent min-w-[60px] text-[#616161] px-4 text-sm">
        <option>{fetchWord('all_categories', lang)}</option>
        <option>Men</option>
        <option>Women</option>
      </select>
      <div className="h-[70%] border-l border-[#616161]" />
      <input
        type="search"
        placeholder={fetchWord("search_product", lang)}
        className={`capitalize bg-transparent text-sm px-4 p-3 rounded-none flex-1 ${inputClassName}`}
      />
      <Button classes={`!py-3 text-sm !px-8 ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-3xl rtl:rounded-l-3xl ${iconClassName}`}>
        {fetchWord('search', lang)}
      </Button>
    </form>
  );
};

export default SearchBar;
