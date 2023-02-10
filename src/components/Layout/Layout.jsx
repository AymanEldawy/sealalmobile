import React, { useContext, useState } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { Footer } from './../Footer/Footer';
import { Menu } from './../Menu/Menu';
import SearchBar from './../SearchBar/SearchBar';

export const Layout = ({ children }) => {
  const [openedSearch, setOpenedSearch] = useState(false);
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Menu setOpenedSearch={setOpenedSearch} />
      <SearchBar
        openedSearch={openedSearch}
        setOpenedSearch={setOpenedSearch}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};
