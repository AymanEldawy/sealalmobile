import React from "react";
import Brand from "../Brand/Brand";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Button } from "../Global/Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { fetchWord } from "@/lang/fetchWord";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import UserDropdownBar from "../UserDropdownBar/UserDropdownBar";
import { useState } from "react";

const Menu = () => {
  const { lang } = useContext(LanguageContext);
  const shadow = `box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;`;
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="shadow" style={{ boxShadow: shadow }}>
      <div className="container justify-between flex items-center py-4 ">
        <Brand />
        <div className="flex gap-4">
          <MenuLinks />
          <div className="relative">
            <Button
              onClick={() => setLoggedIn((p) => !p)}
              classes="border border-secondary rounded-md !bg-transparent !text-black font-medium !px-3"
            >
              {loggedIn ? (
                "user name"
              ) : (
                <span>
                  {fetchWord("login", lang)} / {fetchWord("signup", lang)}
                </span>
              )}
            </Button>
            {loggedIn ? <UserDropdownBar /> : null}
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Menu;
