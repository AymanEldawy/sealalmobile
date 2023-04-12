import { LanguageContext } from "@/context/LangContext";
import { services } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { Button } from "../Global/Button/Button";
import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { BoltSixIcon, CircleStrokeIcon } from "../Icons";

const ServicesSection = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="relative mb-20">
      <span className="rotate-90 flex absolute scale-75">
        <BoltSixIcon className="text-[#FF435C]" />
      </span>
      <div className="container">
        <div className="bg-[#fff9e380] rounded-[40px] relative min-h-[380px] pt-12">
          <span className="absolute left-8 -bottom-20 scale-75">
            <CircleStrokeIcon />
          </span>
          <SectionTitle title={fetchWord("top_services", lang)} />
          <div className="flex justify-between items-center gap-6 px-8">
            {services?.map((service) => (
              <div
                className="flex h-36 min-w-[120px] flex-col justify-center items-center bg-white p-4 rounded-xl shadow"
                key={service?.name}
              >
                <Image
                  className="max-w-full object-contain !w-auto !h-auto mt-auto"
                  src={service?.img}
                  alt={service?.name}
                  height={50}
                  width={80}
                />
                <h3 className="mt-auto text-xs text-primary whitespace-nowrap">
                  {fetchWord(service?.name, lang)}
                </h3>
              </div>
            ))}
          </div>
          <PrimaryLink
            link="/services"
            className=" max-w-[180px] mt-8 block mx-auto px-6 !py-3 rounded-xl "
          >
            {fetchWord("browse_services", lang)}
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
