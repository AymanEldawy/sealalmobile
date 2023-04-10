import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { InputField } from "../Forms/InputField";
import { Button } from "../Global/Button/Button";
import CustomSelectField from "../Forms/CustomSelectField";
import { TextField } from "../Forms/TextField";
import { useState } from "react";

const ContactForm = () => {
  const { lang } = useContext(LanguageContext);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="">
      <h3 className="text-4xl mb-8 text-[#391400]">
        {fetchWord("get_in_touch", lang)}{" "}
      </h3>
      <InputField
        name="email"
        placeholder={fetchWord("your_email", lang)}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        classes="!p-3"
      />
      <CustomSelectField
        name="subject"
        placeholder={fetchWord("subject", lang)}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField        
        name="message"
        placeholder={fetchWord("message", lang)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button classes="block text-sm font-normal ml-auto !p-3 !px-5">
        {fetchWord("submit_now", lang)}{" "}
      </Button>
    </form>
  );
};

export default ContactForm;
