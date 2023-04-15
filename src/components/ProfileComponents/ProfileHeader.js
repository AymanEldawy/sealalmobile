import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { EditIcon, GearIcon, StarIcon } from "../Icons";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import ProfileHeaderInfo from "./ProfileHeaderInfo";

const ProfileHeader = ({ role, changeRole, setActiveTab }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-white ltr:rounded-bl-[40px] rtl:rounded-br-[40px] p-4 relative">
      <span className="absolute rtl:-left-10 ltr:-right-10 top-6 opacity-[30%]">
        <GearIcon />
      </span>
      <div className="flex gap-3" onClick={changeRole}>
        <div className="relative w-fit">
          <button
            className="scale-50 absolute -top-3 ltr:right-0 rtl:left-0 "
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab({ name: "edit_profile" });
            }}
          >
            <EditIcon className="text-secondary" />
          </button>

          <Image
            src={"/images/clients/Ellipse 182.png"}
            alt="Avatar"
            height={120}
            width={120}
            className="rounded-full border-[6px] border-[#F2F2F2]"
          />
        </div>
        <div className="flex-1 flex items-center justify-around gap-4 ltr:pr-4 rtl:pl-4">
          <ProfileHeaderInfo
            title={
              <>
                <StarIcon className="text-secondary w-6 h-6" />
                (5)
              </>
            }
            subtitle={fetchWord("reviews", lang)}
          />
          <ProfileHeaderInfo
            title="175"
            subtitle={fetchWord(role === "company" ? "offers" : "orders", lang)}
          />
          <ProfileHeaderInfo
            title="+500$"
            subtitle={fetchWord(
              role === "company" ? "earning" : "payments",
              lang
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
