import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

import { InputField } from "../Forms/InputField";
import { Button } from "../Global/Button/Button";
import { GearWorkIcon } from "../Icons";

const ProfileEditForm = () => {
  const { lang } = useContext(LanguageContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const onSubmit = () => {};
  console.log("0--");
  return (
    <div className="">
      <h2 className="flex gap-2 text-lg justify-between items-center text-primary font-medium">
        {fetchWord("profile_information", lang)}
      </h2>
      <form className="mt-4 bg-white ltr:rounded-bl-[40px] rtl:rounded-br-[40px] ltr:rounded-tr-[40px] rtl:rounded-tl-[40px] p-6">
        <InputField
          name="user_name"
          value={username}
          label={fetchWord("user_name", lang)}
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
          name="password"
          type="password"
          value={password}
          label={fetchWord("password", lang)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button classes="max-w-[220px] !mt-4 w-full mx-auto block">
          {fetchWord("save", lang)}
        </Button>
        <div className="relative !-mt-12 translate-y-6 flex items-end justify-end -mx-6">
            <GearWorkIcon className="w-20 h-20"/>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
