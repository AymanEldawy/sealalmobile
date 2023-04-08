import React from "react";
import { InputField } from "../Forms/InputField";
import { FileUpload } from "../Forms/FileUpload";
import { LanguageContext } from "@/context/LangContext";
import { useContext } from "react";
import { fetchWord } from "@/lang/fetchWord";
import { useState } from "react";

const SignupCustomerForm = () => {
  const { lang } = useContext(LanguageContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <InputField
        name="name"
        value={name}
        label={fetchWord("name", lang)}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        name="email"
        value={email}
        label={fetchWord("email", lang)}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        name="password"
        value={password}
        label={fetchWord("password_label", lang)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FileUpload label="Profile Photo" />
      <label className="flex gap-1 mb-4 text-sm">
        <input type="checkbox" />
        {fetchWord("terms", lang)}
      </label>
    </form>
  );
};

export default SignupCustomerForm;
