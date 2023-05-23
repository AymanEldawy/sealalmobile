import React from "react";
import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const SearchBar = ({ inputClassName, containerClassName, iconClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className={`flex bg-[#FAFAFA] rounded-3xl px-1 max-[392px]:max-w-[200px] max-w-[250px] items-center ${containerClassName}`}>
      <span className="text-center w-9 flex justify-center">
        <SearchIcon />
      </span>
      <input
        type="search"
        placeholder={fetchWord("search_product", lang)}
        className={`capitalize bg-transparent text-sm p-3 px-1 rounded-none flex-1 ${inputClassName}`}
      />

    </form>
  );
};

export default SearchBar;
