import React from "react";
import { Button } from "../Global/Button/Button";
import { SearchIcon } from "../Icons";

const SearchBar = () => {
  return (
    <form className="flex bg-bmain rounded-md">
      <input type="search" placeholder="search" className="capitalize bg-transparent px-4 p-2  rounded-none" />
      <Button classes="px-3">
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchBar;
