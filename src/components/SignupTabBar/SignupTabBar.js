import React from "react";
import { CustomerIcon, ServiceProviderIcon } from "../Icons";
import CompanyIcon from "../Icons/CompanyIcon";
import { fetchWord } from "@/lang/fetchWord";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";

const SignupTabBar = ({ activeStage }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="shadow p-3 flex justify-around gap-4 mb-6 ">
      <button
        className={`flex flex-col justify-center items-center gap-1 text-lead ${
          activeStage === "customer" ? "!text-secondary" : ""
        }`}
      >
        <CustomerIcon />
        <span>{fetchWord("customer", lang)}</span>
      </button>
      <button
        className={`flex flex-col justify-center items-center gap-1 text-lead ${
          activeStage === "service provider" ? "!text-secondary" : ""
        }`}
      >
        <ServiceProviderIcon />
        <span>{fetchWord("service_provider", lang)}</span>
      </button>
      <button
        className={`flex flex-col justify-center items-center gap-1 text-lead ${
          activeStage === "company" ? "!text-secondary" : ""
        }`}
      >
        <CompanyIcon />
        <span>{fetchWord("company", lang)}</span>
      </button>
    </div>
  );
};

export default SignupTabBar;
