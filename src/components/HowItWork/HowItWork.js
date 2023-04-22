import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

import { Button } from "../Global/Button/Button";
import { WashMachineIcon } from "../Icons";

const HowItWork = ({ setSelectedTab }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="text-center pb-8 p-8 pt-16">
      <WashMachineIcon className="mx-auto !max-w-full" />
      <h1 className="text-primary text-xl font-medium mt-4 capitalize mb-6">
        {fetchWord("welcome_dear", lang)}
      </h1>
      <p className="mt-2">{fetchWord("request_services_msg", lang)}</p>
      <Button onClick={() => setSelectedTab(2)} classes="block w-full mt-8">
        {fetchWord("get_started", lang)}
      </Button>
    </div>
  );
};

export default HowItWork;
