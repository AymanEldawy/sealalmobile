import React, { useContext } from "react";
import { EditIcon, GearWorkIcon } from "../Icons";
import Link from "next/link";
import { fetchWord } from "@/lang/fetchWord";
import { LanguageContext } from "@/context/LangContext";

const ProfileInformation = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="sticky top-0 h-[100dvh] shrink-0 md:w-[380px]">
      <div className="bg-[#F9F9F9] h-full px-6 pt-4 flex-col flex ltr:rounded-bl-[80px] rtl:rounded-br-[80px]  overflow-hidden">

      <h2 className="flex gap-2 text-xl justify-between mt-6 items-center text-primary font-medium">
        {fetchWord("profile_information", lang)}
        <Link href="#edit">
          <EditIcon className="text-yellow-500 h-4 w-4" />
        </Link>
      </h2>
      <ul className="flex flex-col gap-4 mt-12">
        <li className="flex gap-3">
          <span className="flex-1 text-lead max-w-[140px] ">
            {fetchWord("user_name", lang)}
          </span>
          <span className="flex-1 font-medium">monga</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-1 text-lead max-w-[140px] ">
            {fetchWord("email", lang)}
          </span>
          <span className="flex-1 font-medium">monga@monga.com</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-1 text-lead max-w-[140px] ">
            {fetchWord("phone_number", lang)}
          </span>
          <span className="flex-1 font-medium">+02 893 983 932</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-1 text-lead max-w-[140px] ">
            {fetchWord("password", lang)}
          </span>
          <span className="flex-1 font-medium">*********</span>
        </li>
      </ul>
      <div className="relative mt-auto">
        <span className="absolute bottom-0  rtl:-left-5 ltr:-right-5">
          <GearWorkIcon />
        </span>
      </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
