import { TextField } from "@/components/Forms/TextField";
import { Button } from "@/components/Global/Button/Button";
import { EmailUsIcon, WhatsAppIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useState, useContext } from "react";

const SupportForm = () => {
  const { lang } = useContext(LanguageContext);
  const [problem, setProblem] = useState("");
  return (
    <div className="max-w-[450px] mt-6">
      <h3 className="text-primary text-lg mb-4 font-medium ">
        {fetchWord("How_help_you", lang)}
      </h3>
      <TextField
        name="problem"
        placeholder={fetchWord("problem_here", lang)}
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        classes="min-h-[130px]"
      />
      <Button classes="bg-secondary text-black block w-full">
        {fetchWord("send", lang)}
      </Button>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col gap-2 shadow-md p-3 rounded-md items-center px-5">
          <WhatsAppIcon />
          {fetchWord("contact_us", lang)}
        </div>
        <div className="flex flex-col gap-2 shadow-md p-3 rounded-md items-center px-5">
          <EmailUsIcon />
          {fetchWord("email_us", lang)}
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
