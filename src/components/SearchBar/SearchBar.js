import React from "react";
import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const SearchBar = ({ inputClassName, containerClassName, iconClassName }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className={`flex bg-bmain rounded-md ${containerClassName}`}>
      <input
        type="search"
        placeholder={fetchWord("search", lang)}
        className={`capitalize bg-transparent px-4 p-2 rounded-none flex-1 ${inputClassName}`}
      />
      <Button classes={`px-3 ${iconClassName}`}>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
