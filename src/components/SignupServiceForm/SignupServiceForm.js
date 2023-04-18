import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

import CustomSelectField from "../Forms/CustomSelectField";
import { FileUpload } from "../Forms/FileUpload";
import { InputField } from "../Forms/InputField";

const SignupServiceForm = () => {
  const { lang } = useContext(LanguageContext);

  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
        name="location"
        value={location}
        label={fetchWord("location", lang)}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="flex gap-4">
        <CustomSelectField
          name="country"
          value={country}
          label={fetchWord("country", lang)}
          onChange={(e) => setCountry(e.target.value)}
        />
        <CustomSelectField
          name="city"
          value={city}
          label={fetchWord("city", lang)}
          onChange={(e) => setCity(e.target.value)}
        />
        <CustomSelectField
          name="municipality"
          value={municipality}
          label={fetchWord("municipality", lang)}
          onChange={(e) => setMunicipality(e.target.value)}
        />
      </div>
      <InputField
        name="text"
        value={website}
        label={fetchWord("website", lang)}
        onChange={(e) => setWebsite(e.target.value)}
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

export default SignupServiceForm;
