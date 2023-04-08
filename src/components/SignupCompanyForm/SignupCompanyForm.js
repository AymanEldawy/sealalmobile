import { LanguageContext } from "@/context/LangContext";
import React from "react";
import { useContext } from "react";
import { InputField } from "../Forms/InputField";
import { fetchWord } from "@/lang/fetchWord";
import { FileUpload } from "../Forms/FileUpload";
import { useState } from "react";

const SignupCompanyForm = () => {
  const { lang } = useContext(LanguageContext);
  const [links, setLinks] = useState({
    facebook: "",
    instagram: "",
  });
  const uploadImages = () => {};
  const changeLink = () => {};
  return (
    <div>
      <InputField
        name="facebook"
        value={links?.facebook}
        label={fetchWord("facebook_account", lang)}
        onChange={changeLink}
      />
      <InputField
        name="instagram"
        value={links?.instagram}
        label={fetchWord("instagram_account", lang)}
        onChange={changeLink}
      />
      <FileUpload
        label={fetchWord("our_work", lang)}
        name="our_work"
        onChange={(e) => uploadImages(e.target.value)}
      />
    </div>
  );
};

export default SignupCompanyForm;
