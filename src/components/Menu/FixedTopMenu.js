import { useRouter } from "next/router";
import React from "react";

// import {
//   ArrowShortIcon,
//   BellIcon,
//   LongArrowIcon,
//   OvalIcon,
//   RemoveIcon,
// } from "../Icons";
import Link from "next/link";

const FixedTopMenu = ({
  title,
  extraIcons,
  extraContent,
  handleBack,
  containerClassName,
  arrowClassName,
  customArrow,
  hideIcons,
  extraContent2,
  headerClassName,
}) => {
  const router = useRouter();
  return (
    <div
      className={`relative overflow-hidden p-4 bg-primary pb-5 ${headerClassName}`}
    >
      <span className="absolute -right-6 -top-5 z-0">
        {/* <OvalIcon /> */}
      </span>
      <div
        className={`flex items-center justify-between relative z-10 ${containerClassName}`}
      >
        {customArrow ? (
          customArrow
        ) : (
          <button
            onClick={() => {
              if (handleBack) handleBack();
              else router?.back();
            }}
            className={` ${arrowClassName}`}
          >
            {/* <ArrowShortIcon className="text-white" /> */}
          </button>
        )}
        {extraContent ? extraContent : null}
        {extraContent2 ? extraContent2 : null}
        {title ? (
          <h1 className="text-white capitalize text-lg font-semibold">
            {title}
          </h1>
        ) : null}
        {!hideIcons ? (
          <div className="flex gap-2 items-center ">
            {extraIcons ? extraIcons : null}
            {/* notification icons */}
            {router?.pathname === "/notification" ? (
              <button onClick={() => router?.back()} className="">
                {/* <RemoveIcon /> */}
              </button>
            ) : (
              <Link href="/notification" className="">
                {/* <BellIcon /> */}
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FixedTopMenu;
