import React, { useContext } from 'react';

import { Footer } from './../Footer/Footer';
import { Menu } from './../Menu/Menu';
import { LanguageContext } from './../../context/LangContext';

export const Layout = ({ children }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};
