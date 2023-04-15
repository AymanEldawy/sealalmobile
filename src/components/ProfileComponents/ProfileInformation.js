import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

import { EditIcon, GearWorkIcon } from "../Icons";
import Image from "next/image";

const ProfileInformation = ({ setActiveTab, role }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="-mt-4">
      <h2 className="flex gap-2 justify-between items-center text-primary font-medium">
        {fetchWord("profile_information", lang)}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab({ name: "edit_profile" });
          }}
        >
          <EditIcon className="text-yellow-500 h-4 w-4" />
        </button>
      </h2>
      <div className="bg-[#F9F9F9] h-full pt-4 mt-4 pb-6 px-6 relative flex-col flex  ltr:rounded-tr-[40px] rtl:rounded-tl-[40px] ltr:rounded-bl-[40px] rtl:rounded-br-[40px]  overflow-hidden">
        <ul className="flex flex-col gap-4 ">
          <li className="flex gap-6">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("user_name", lang)}
            </span>
            <span className="flex-1 font-medium">monga</span>
          </li>
          <li className="flex gap-6">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("email", lang)}
            </span>
            <span className="flex-1 font-medium">monga@monga.com</span>
          </li>
          <li className="flex gap-6">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("phone_number", lang)}
            </span>
            <span className="flex-1 font-medium">+02 893 983 932</span>
          </li>
          <li className="flex gap-6">
            <span className="flex-1 text-lead max-w-[140px] ">
              {fetchWord("password", lang)}
            </span>
            <span className="flex-1 font-medium">*********</span>
          </li>
          {role === 'company'? (
            <>
              <li className="flex gap-6">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("location", lang)}
                </span>
                <span className="flex-1 font-medium">
                  Istanbul - ..................{" "}
                </span>
              </li>
              <li className="flex gap-6">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("tax_number", lang)}
                </span>
                <span className="flex-1 font-medium">125 4 5 85 55 55</span>
              </li>
              <li className="flex gap-6">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("company_license", lang)}
                </span>
                <Image
                  src="/images/ConnecticutBusinessLicense-1.png"
                  alt="company license"
                  height={50}
                  width={80}
                />
              </li>
              <li className="flex gap-6">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("website", lang)}
                </span>
                <span className="flex-1 font-medium">125 4 5 85 55 55</span>
              </li>
              <li className="flex gap-6">
                <span className="flex-1 text-lead max-w-[140px] ">
                  {fetchWord("social_media", lang)}
                </span>
                <div className="flex gap-2">
                  <Image
                    src="/images/facebook.png"
                    alt="facebook page"
                    height={25}
                    width={25}
                    className="object-cover max-w-full h-auto"
                  />
                  <Image
                    src="/images/instagram.png"
                    alt="instagram page"
                    height={25}
                    width={25}
                    className="object-cover max-w-full h-auto"
                  />
                </div>
              </li>
            </>
          ) : null}
        </ul>
        <div className="relative mt-auto translate-y-6">
          <span className="absolute bottom-0  rtl:-left-5 ltr:-right-5">
            <GearWorkIcon />
          </span>
        </div>
      </div>
      <div className="border-t-2 border-white h-1 -mx-4 my-4 shadow-md" />
    </div>
  );
};

export default ProfileInformation;
