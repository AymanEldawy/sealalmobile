import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext } from "react";

import { Button } from "../Global/Button/Button";
import { BoltSixIcon } from "../Icons";
import { CloseIcon } from "../Icons/CloseIcon";

const Banner = () => {
  const {lang} = useContext(LanguageContext)
  return (
    <div className="flex gap-2 relative  mb-8">
      <div className="container relative">
        <span className="absolute top-0 left-[30%] rtl:right-8 rtl:left-auto scale-75">
          <BoltSixIcon className="text-[#5FD2A2]" />{" "}
        </span>
        <div className="flex justify-between items-center py-16">
          <div className="max-w-lg">
            <h1 className="relative text-6xl flex-col flex text-[#613CED] font-medium mb-4">
              <div className="bg-[#FFF2C3] absolute w-[110%] h-[70%] top-[17%] -left-[5%] z-0">
                <div className="absolute -left-4 scale-150 text-red-500 top-1/3 -mt-2">
                  <CloseIcon />
                </div>
              </div>
              <span className="relative z-10">
                {fetchWord("get_Professional", lang)}{" "}
              </span>
              <span className="relative z-10">
                {fetchWord("home_services", lang)}
              </span>
            </h1>
            <p className="text-[#2A2043] text-sm leading-normal">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore aliquam volutpat
              wisi enim ad minim veniam, euismod tincidunt ut laoreet dolore
              aliquam volutpat wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit in hendrerit in vulputate velit esse
              molestie consequat duis autem vel eum iriure dolor in commodo
              hendrerit.{" "}
            </p>
            <Button classes="px-8 py-3 mt-8 text-sm rounded-xl">{fetchWord('book_now', lang)}</Button>
          </div>
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
