import React from "react";
import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const SearchBar = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className="flex bg-bmain rounded-md">
      <input
        type="search"
        placeholder={fetchWord("search", lang)}
        className="capitalize bg-transparent px-4 p-2  rounded-none"
      />
      <Button classes="px-3">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
