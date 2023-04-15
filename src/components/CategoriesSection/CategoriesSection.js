import { LanguageContext } from "@/context/LangContext";
import { services } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { Button } from "../Global/Button/Button";
import Link from "next/link";

const CategoriesSection = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="p-4 py-8">
      <h2 className="text-[#414B5A] font-semibold text-xl uppercase mb-4" >{fetchWord('categories', lang)}</h2>
      <div className="grid grid-cols-3 gap-4">
        {services?.map((service) => (
          <div
            className="flex h-36 min-w-[120px] flex-col justify-center items-center bg-white p-4 rounded-xl shadow hover:border-2 hover:border-primary"
            key={service?.name}
          >
            <Image
              className="max-w-full object-contain !w-auto !h-auto mt-auto"
              src={service?.image}
              alt={service?.name}
              height={50}
              width={80}
            />
            <h3 className="mt-auto  text-primary whitespace-nowrap">
              {fetchWord(service?.name, lang)}
            </h3>
          </div>
        ))}
      </div>
      <Link href="/services" className="py-2 rounded-lg px-6 w-fit block mx-auto mt-8 text-red-500 capitalize border-2 border-red-500">{fetchWord('view_all', lang)}</Link>
    </div>
  );
};

export default CategoriesSection;
