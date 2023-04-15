import { TextField } from "@/components/Forms/TextField";
import { Button } from "@/components/Global/Button/Button";
import { EmailUsIcon, WhatsAppIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const SupportForm = () => {
  const { lang } = useContext(LanguageContext);
  const [problem, setProblem] = useState("");
  return (
    <div >
      <h3 className="text-primary text-lg mb-4 font-medium ">
        {fetchWord("How_help_you", lang)}
      </h3>
      <TextField
        name="problem"
        placeholder={fetchWord("problem_here", lang)}
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        classes="min-h-[130px] w-full"
      />
      <Button classes="bg-secondary text-black block w-full">
        {fetchWord("send", lang)}
      </Button>
      <div className="flex gap-6 justify-center mt-6">
        <div className="flex flex-col gap-2 shadow-md p-6 bg-white rounded-md items-center">
          <WhatsAppIcon />
          {fetchWord("contact_us", lang)}
        </div>
        <div className="flex flex-col gap-2 shadow-md p-6 bg-white rounded-md items-center">
          <EmailUsIcon />
          {fetchWord("email_us", lang)}
        </div>
      </div>
      <div className="h-16" />
    </div>
  );
};

export default SupportForm;
