import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

import { CustomerIcon, ServiceProviderIcon } from "../Icons";
import CompanyIcon from "../Icons/CompanyIcon";

const SignupTabBar = ({ activeStage, setActiveStage }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="shadow-md flex justify-around  mb-6 w-full ">
      <button
        className={`flex flex-1 p-4 flex-col justify-center items-center gap-1 text-lead ${activeStage === "customer" ? "!text-secondary border-b-4 border-b-primary" : ""
          }`}
        onClick={() => setActiveStage('customer')}
      >
        <CustomerIcon />
        <span>{fetchWord("customer", lang)}</span>
      </button>
      <button
        className={`flex border-l border-r flex-1 p-4 flex-col justify-center items-center gap-1 text-lead ${activeStage === "service provider" ? "!text-secondary border-b-4 border-b-primary" : ""
          }`}
        onClick={() => setActiveStage('service provider')}
      >
        <ServiceProviderIcon />
        <span>{fetchWord("service_provider", lang)}</span>
      </button>
      <button
        className={`flex flex-1 p-4 flex-col justify-center items-center gap-1 text-lead ${activeStage === "company" ? "!text-secondary border-b-4 border-b-primary" : ""
          }`}
        onClick={() => setActiveStage('company')}
      >
        <CompanyIcon />
        <span>{fetchWord("company", lang)}</span>
      </button>
    </div>
  );
};

export default SignupTabBar;
