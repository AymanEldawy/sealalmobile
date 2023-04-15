import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import DownloadApp from "../DownloadApp/DownloadApp";
import Footer from "../Footer/Footer";
import FixedTopMenu from "../Menu/FixedTopMenu";
import Menu from "../Menu/Menu";
import UpperMenu from "../UpperMenu/UpperMenu";
import FixedBottomMenu from "./../Menu/FixedBottomMenu";

export const Layout = ({
  children,
  hideFooter,
  hideApp,
  title,
  extraIcons,
  extraContent,
  handleBack,
  containerClassName,
  arrowClassName,
  customArrow,
  hideIcons,
  hideBottomMenu,
  full,
  mainClassName,
  extraContent2,
  headerClassName
}) => {
  const [openedSearch, setOpenedSearch] = useState(false);
  const { lang } = useContext(LanguageContext);
  return (
    <div className={`${full ? "mobile-container-full" : "mobile-container"}`}>
      <FixedTopMenu
        title={title}
        extraIcons={extraIcons}
        extraContent={extraContent}
        handleBack={handleBack}
        containerClassName={containerClassName}
        arrowClassName={arrowClassName}
        customArrow={customArrow}
        hideIcons={hideIcons}
        extraContent2={extraContent2}
        headerClassName={headerClassName}
      />
      {/* <UpperMenu /> */}
      {/* <Menu setOpenedSearch={setOpenedSearch} /> */}
      <main className={`rounded-t-3xl relative ${hideBottomMenu? '':' pb-24'} ${mainClassName}`}>{children}</main>
      {/* {hideApp ? null : <DownloadApp />} */}
      {/* {hideFooter ? null : <Footer />} */}
      {hideBottomMenu ? null : <FixedBottomMenu />}
    </div>
  );
};

/*
back
      backSteps={stage > 1 ? backStage : undefined}
        const [stage, setStage] = useState(1);
  const backStage = () => setStage(1);

* */
