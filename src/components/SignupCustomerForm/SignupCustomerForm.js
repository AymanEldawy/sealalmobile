import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import { FileUpload } from "../Forms/FileUpload";
import { InputField } from "../Forms/InputField";

const SignupCustomerForm = () => {
  const { lang } = useContext(LanguageContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form>
      <InputField
        name="username"
        value={username}
        label={fetchWord("username", lang)}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="WHY NOT!"
        />
      <InputField
        type="email"
        name="email"
        value={email}
        label={fetchWord("email", lang)}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="whynotdevlopment@gmail.com"
        />
      <InputField
        type="tel"
        name="phone"
        value={phone}
        label={fetchWord("phone", lang)}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="968455613212"
        />
      <InputField
        type="password"
        name="password"
        value={password}
        label={fetchWord("password", lang)}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="*********"
      />
      <InputField
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        label={fetchWord("confirm_password", lang)}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="*********"
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
