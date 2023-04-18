import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import CustomSelectField from "../Forms/CustomSelectField";
import { FileUpload } from "../Forms/FileUpload";
import { InputField } from "../Forms/InputField";

const SignupCompanyForm = () => {
  const [companyID, setCompanyID] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [companyLicense, setCompanyLicense] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { lang } = useContext(LanguageContext);
  const [links, setLinks] = useState({
    facebook: "",
    instagram: "",
  });
  const uploadImages = () => { };
  const changeLink = () => { };
  return (
    <div>
      <InputField
        name="companyName"
        value={companyName}
        label={fetchWord("company_name", lang)}
        onChange={(e) => setCompanyName(e.target.value)}
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
        name="companyID"
        value={companyID}
        label={fetchWord("company_id", lang)}
        onChange={(e) => setCompanyID(e.target.value)}
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
      <FileUpload
        name="companyLicense"
        value={companyLicense}
        label={fetchWord("company_license", lang)}
        onChange={(e) => setCompanyLicense(e.target.value)}
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
    </div>
  );
};

export default SignupCompanyForm;
