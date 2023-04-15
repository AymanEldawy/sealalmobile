import { InputField } from "@/components/Forms/InputField";
import { TextField } from "@/components/Forms/TextField";
import { Button } from "@/components/Global/Button/Button";
import { AdsIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useState, useContext } from "react";

const CompaniesSuggestions = () => {
  const { lang } = useContext(LanguageContext);
  const [stage, setStage] = useState("form");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSubmit = () => {
    setStage("");
  };
  return (
    <div className="">
      {stage === "form" ? (
        <form
          onSubmit={onSubmit}
          className="mt-4 bg-white ltr:rounded-bl-[40px] rtl:rounded-br-[40px] ltr:rounded-tr-[40px] rtl:rounded-tl-[40px] p-6"
        >
          <InputField
            name="user_name"
            value={username}
            label={
              <div className="flex gap-2 items-center">
                {fetchWord("user_name", lang)}
                <span className="text-primary">
                  ( {fetchWord("optional", lang)} )
                </span>
              </div>
            }
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            name="email"
            type="email"
            value={email}
            label={fetchWord("email", lang)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            label={fetchWord("phone_number", lang)}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <InputField
            name="title"
            type="title"
            value={title}
            label={fetchWord("title", lang)}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            name="message"
            type="message"
            value={message}
            classes="w-full"
            label={fetchWord("message", lang)}
            placeholder={fetchWord("message_placeholder", lang)}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button classes="bg-secondary text-black w-[240px] mx-auto block">
            {fetchWord("send", lang)}
          </Button>
        </form>
      ) : (
        <div className="flex flex-col  gap-4 h-full items-center justify-center">
          <AdsIcon />
          <p className="text-[#061432] max-w-[450px] text-center font-medium">
            {fetchWord("ads_msg", lang)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CompaniesSuggestions;
