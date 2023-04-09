import React from "react";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import { Bolt8Icon, PriceIcon, Service24Icon, WorkIcon } from "../Icons";
import Image from "next/image";

const WhyChooseUs = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mt-8 mb-20 relative overflow-hidden">
      <span className="absolute -right-2 top-10 scale-90">
        <Bolt8Icon className="text-[#1200B6]" />
      </span>
      <span className="absolute -left-2 -bottom-8 scale-90">
        <Bolt8Icon className="text-[#1200B6]" />
      </span>
      <div className="container">
        <div className="flex justify-between">
          <div>
            <SectionTitle title={fetchWord("why_choose_us", lang)} />
            <p className="text-[#2A2043] text-sm max-w-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore aliquam volutpat
              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit in hendrerit in vulputate velit esse .
            </p>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-4 items-center">
                <span className="bg-[#F2F2F2] rounded-full h-24 w-24 flex justify-center items-center">
                  <WorkIcon />
                </span>
                <h3 className="text-lg font-semibold">
                  {" "}
                  {fetchWord("warranty_maintenance", lang)}{" "}
                </h3>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-[#F2F2F2] rounded-full h-24 w-24 flex justify-center items-center">
                  <PriceIcon />
                </span>
                <h3 className="text-lg font-semibold">
                  {" "}
                  {fetchWord("affordable_price", lang)}{" "}
                </h3>
              </div>
              <div className="flex gap-4 items-center">
                <span className="bg-[#F2F2F2] rounded-full h-24 w-24 flex justify-center items-center">
                  <Service24Icon />
                </span>
                <h3 className="text-lg font-semibold">
                  {" "}
                  {fetchWord("services24", lang)}{" "}
                </h3>
              </div>
            </div>
          </div>

          <div className="relative flex-1 max-w-[500px] flex justify-end">
            <Image
              src="/images/projects/5.png"
              alt="Why Choose us"
              height={400}
              width={320}
              className="!h-auto object-contain -mt-14"
            />
            <Image
              src="/images/projects/2.png"
              alt="Why Choose us 2"
              height={400}
              width={320}
              className="!h-auto object-contain absolute top-40 -left-14 border-[10px] border-white bg-white rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
