import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import FixedTopMenu from "../Menu/FixedTopMenu";
import FixedBottomMenu from "./../Menu/FixedBottomMenu";

export const Layout = ({
  children,
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
  headerClassName,
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
      <main
        className={`rounded-t-3xl relative ${
          hideBottomMenu ? "" : " pb-24"
        } ${mainClassName}`}
      >
        {children}
      </main>
      {hideBottomMenu ? null : <FixedBottomMenu />}
    </div>
  );
};
