import React from "react";
import Brand from "../Brand/Brand";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Button } from "../Global/Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const Menu = () => {
  const shadow = `box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;`;
  return (
    <div className="shadow" style={{ boxShadow: shadow }}>
      <div className="container justify-between flex items-center py-4 ">
        <Brand />
        <div className="flex gap-4">
          <MenuLinks />
          <Button classes="border border-secondary rounded-md !bg-transparent !text-black font-medium !px-3">
            Login/Sign up
          </Button>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
