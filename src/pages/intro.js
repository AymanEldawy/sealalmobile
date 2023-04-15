import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import { IntroManIcon, IntroWomanIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useState } from "react";
import { useContext } from "react";

const Intro = () => {
  const [activeStage, setActiveStage] = useState(0);
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mobile-container-full !bg-primary flex items-center justify-center flex-col h-screen">
      <span className="absolute h-[20%] w-[30%] top-0 bg-[#00000020] right-0 rounded-bl-[70px]"></span>
      {activeStage === 0 ? (
        <div className="bg-secondary rounded-bl-3xl rounded-tr-3xl p-4 text-black min-w-[250px] text-center text-2xl font-s">
          ALO TADILAT
        </div>
      ) : (
        <>
          {activeStage === 1 ? (
            <div className="flex flex-col items-center gap-3">
              <IntroManIcon />
              <h3 className="text-xl text-white">ALO TADILAT</h3>
              <p className="text-gray-300 text-xs max-w-sm mx-auto text-center">
                Original with 1000 product from a lot of ifferent brand accros
                the world. buy so easy with just simple step then your item will
                send it.
              </p>
            </div>
          ) : (
            <IntroWomanIcon />
          )}
        </>
      )}
      <div className="flex gap-1 items-center mt-8">
        <button
          className={`w-2 h-2 rounded-full bg-[#0000001A] ${
            activeStage === 0 ? "!bg-[#00000040]" : ""
          } `}
          onClick={() => setActiveStage(0)}
        ></button>
        <button
          className={`w-2 h-2 rounded-full bg-[#0000001A] ${
            activeStage === 1 ? "!bg-[#00000040]" : ""
          } `}
          onClick={() => setActiveStage(1)}
        ></button>
        <button
          className={`w-2 h-2 rounded-full bg-[#0000001A] ${
            activeStage === 2 ? "!bg-[#00000040]" : ""
          } `}
          onClick={() => setActiveStage(2)}
        ></button>
      </div>
      {activeStage > 0 ? (
        <div className="flex gap-4 items-center w-full max-w-sm mt-12 ">
          <PrimaryLink
            link="/signup"
            className=" flex-1 w-full block border-2 border-white rounded-lg font-medium !p-3"
          >
            {fetchWord("signup", lang)}
          </PrimaryLink>
          <PrimaryLink
            link="/login"
            className=" flex-1 w-full block !bg-secondary border-none font-medium !p-3 !text-black"
          >
            {fetchWord("signin", lang)}
          </PrimaryLink>
        </div>
      ) : null}
      <span className="absolute h-[20%] w-[30%] bottom-0 bg-[#00000020] left-0 rounded-tr-[70px]"></span>
    </div>
  );
};

export default Intro;
