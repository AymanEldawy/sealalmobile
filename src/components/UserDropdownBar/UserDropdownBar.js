import React from "react";
import { UserCircleIcon, RequestsIcon, OffersIcon, BellIcon } from "../Icons";
import { fetchWord } from "@/lang/fetchWord";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import Link from "next/link";

const userList = [
  { link:'/my-profile', name: "profile", icon: <UserCircleIcon /> },
  { link:'/my-requests', name: "my_requests", icon: <RequestsIcon />, count: "6" },
  { link:'/offers', name: "offers", icon: <OffersIcon />, count: "10" },
  { link:'/notification', name: "notification", icon: <BellIcon />, text: "now" },
];
const UserDropdownBar = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <ul className=" absolute bg-white py-6 left-0 top-[67px] shadow-inner z-40">
      {userList?.map((item, index) => (
        <li key={index} className="">
          <Link
            href={item?.link}
            className="flex gap-1 p-2 px-4 cursor-pointer text-sm items-center w-52 hover:bg-gray-100"
          >
            <span className="w-7 scale-90">{item?.icon}</span>
            {fetchWord(item.name, lang)}
            {item?.count ? (
              <span className="ltr:ml-auto rtl:mr-auto bg-gray-200 rounded-full min-w-[25px] h-[25px] flex justify-center items-center text-xs font-medium text-red-600">{item?.count}</span>
            ) : null}
            {item?.text ? (
              <span className="ltr:ml-auto rtl:mr-auto">{item?.text}</span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserDropdownBar;
