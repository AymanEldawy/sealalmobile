import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import UpperMenu from "../UpperMenu/UpperMenu";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import DownloadApp from "../DownloadApp/DownloadApp";

export const Layout = ({ children, hideFooter, hideApp }) => {
  const [openedSearch, setOpenedSearch] = useState(false);
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <UpperMenu />
      <Menu setOpenedSearch={setOpenedSearch} />
      <main>{children}</main>
      {hideApp ? null : <DownloadApp />}
      {hideFooter ? null : <Footer />}
    </>
  );
};
