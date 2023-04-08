import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import UpperMenu from "../UpperMenu/UpperMenu";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

export const Layout = ({ children, hideFooter }) => {
  const [openedSearch, setOpenedSearch] = useState(false);
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <UpperMenu />
      <Menu setOpenedSearch={setOpenedSearch} />
      <main>{children}</main>
      {hideFooter ? null : <Footer />}
    </>
  );
};
