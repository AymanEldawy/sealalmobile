import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

import { WashMachineIcon } from "../Icons";

const steps = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    label: "enter_information",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    label: "confirmation",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    label: "wait_offers",
  },
];
const HowItWork = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-[#ffde93] px-4 py-8 rounded-md max-w-xs sticky top-0 h-[100dvh]">
      <div className="text-center mb-4">
        <WashMachineIcon  className="mx-auto w-fit"/>
      </div>
      <div className="flex flex-col gap-4">
        {steps?.map((step, index) => (
          <div
            className="flex flex-col gap-2 justify-center items-center"
            key={index}
          >
            <span className="h-14 w-14 rounded-full font-medium text-primary text-lg bg-white flex justify-center items-center">
              {index + 1}
            </span>
            <h3 className="font-medium ">
              {fetchWord(step?.label, lang)}
            </h3>
            <p className="text-center text-[#697B95] text-sm">{step?.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
