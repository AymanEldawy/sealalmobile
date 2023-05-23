import React, { useContext, useState } from "react";

import { LanguageContext } from "../../context/LangContext";
import FixedTopMenu from "../Menu/FixedTopMenu";
import FixedBottomMenu from "./../Menu/FixedBottomMenu";

import { GlobalOptions } from '@/context/GlobalOptions';
import { Drawer } from "../Menu/Drawer";

export const Layout = ({
  children,
  title,
  extraIcons,
  handleBack,
  containerClassName,
  arrowClassName,
  hideIcons,
  hideBottomMenu,
  full,
  mainClassName,
  hideNotificationIcon,
  hideIconBack,
  hideSearch
}) => {
  const { lang } = useContext(LanguageContext);
  const { openDrawer, setOpenDrawer } = useContext(GlobalOptions)
  return (
    <div className={`${full ? "mobile-container-full" : "mobile-container"}`}>
      {
        openDrawer ? <Drawer /> : (
          <>
            <FixedTopMenu
              title={title}
              hideSearch={hideSearch}
              hideIconBack={hideIconBack}
              extraIcons={extraIcons}
              handleBack={handleBack}
              containerClassName={containerClassName}
              arrowClassName={arrowClassName}
              hideIcons={hideIcons}
              hideNotificationIcon={hideNotificationIcon}
            />
            <main
              className={`relative ${hideBottomMenu ? "" : " pb-24"
                } ${mainClassName}`}
            >
              {children}
            </main>
          </>
        )
      }
      {hideBottomMenu ? null : <FixedBottomMenu />}
    </div >
  );
};
