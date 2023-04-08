import { LanguageContext } from "@/context/LangContext";
import React, { useContext, useState } from "react";
import { InputField } from "../Forms/InputField";
import { fetchWord } from "@/lang/fetchWord";
import { SelectField } from "../Forms/SelectField";
import { FileUpload } from "../Forms/FileUpload";

const SignupServiceForm = () => {
  const { lang } = useContext(LanguageContext);

  const [companyID, setCompanyID] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [companyLicense, setCompanyLicense] = useState("");
  return (
    <form>
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
        <SelectField
          name="country"
          value={country}
          label={fetchWord("country", lang)}
          onChange={(e) => setCountry(e.target.value)}
        />
        <SelectField
          name="city"
          value={city}
          label={fetchWord("city", lang)}
          onChange={(e) => setCity(e.target.value)}
        />
        <SelectField
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
    </form>
  );
};

export default SignupServiceForm;
