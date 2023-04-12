import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

import { BoltSixIcon } from "../Icons";
import HeadBannerInfo from "../HeadBannerInfo/HeadBannerInfo";

const Banner = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex gap-2 relative  mb-8">
      <div className="container relative">
        <span className="absolute top-0 left-[30%] rtl:right-8 rtl:left-auto scale-75">
          <BoltSixIcon className="text-[#5FD2A2]" />{" "}
        </span>
        <div className="flex justify-between items-center py-16">
          <HeadBannerInfo />
          <Image
            src="/images/banner.png"
            alt="Banner"
            height={500}
            width={500}
          />
        </div>
      </div>
      <span className="absolute bottom-0 right-8 rtl:left-0 rtl:right-auto  scale-75">
        <BoltSixIcon className="text-[#613CED]" />{" "}
      </span>
    </div>
  );
};

export default Banner;
