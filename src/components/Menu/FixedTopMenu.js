import Image from "next/image";
import {
  //   ArrowShortIcon,
  BellIcon,
  LongArrowIcon,
  //   LongArrowIcon,
  //   OvalIcon,
  //   props,
  UserMenuIcon
} from "../Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const FixedTopMenu = ({
  title,
  extraIcons,
  handleBack,
  containerClassName,
  arrowClassName,
  hideIcons,
  hideNotificationIcon,
  hideIconBack,
  hideSearch
}) => {
  const router = useRouter();
  return (
    <div
      className={`relative flex items-center gap-4 overflow-hidden mb-4 ${extraIcons ? '!justify-between' :''} ${containerClassName}`}
    >
      {
        hideSearch ?
          <>
            {
              hideIconBack ? null : (
                <button
                  onClick={() => {
                    if (handleBack) handleBack();
                    else router?.back();
                  }}
                  className={` ${arrowClassName}`}
                >
                  <LongArrowIcon />
                </button>
              )
            }
          </>
          : (
            <div className="flex gap-2 items-center">
              <figure>
                <Image src="/images/logo.png" alt="" height={20} width={83} className="object-contain w-[80px] h-[40px]  min-[450px]:w-[100px] min-[450px]h-[30px]" />
              </figure>
              <SearchBar />
            </div>
          )
      }

      {title ? (
        <h1 className={`${extraIcons? '': 'mx-auto'} text-secondary capitalize text-lg font-semibold `}>
          {title}
        </h1>
      ) : null}
      {!!hideIcons ? null : (
        <div className={` ${title ? "" :"ltr:ml-auto rtl:mr-auto"} flex gap-2 items-center`}>
          {extraIcons ? extraIcons : null}
          {
            hideNotificationIcon ? null : (
              <div className="gap-2 flex">
                <Link href="/profile" className="">
                  <UserMenuIcon />
                </Link>
                <Link href="/notification" className="">
                  <BellIcon />
                </Link>
              </div>
            )
          }
        </div>
      )}
    </div>
  );
};

export default FixedTopMenu;
