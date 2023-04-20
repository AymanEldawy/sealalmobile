import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import { FileUpload } from "../Forms/FileUpload";
import { TextField } from "../Forms/TextField";
import { Button } from "../Global/Button/Button";
import { PlusIcon } from "../Icons";

const RequestServicesFormUpload = ({ setSelectedTab }) => {
  const [description, setDescription] = useState("");

  const { lang } = useContext(LanguageContext);
  return (
    <div>
      <TextField
        value={description}
        label={fetchWord("description", lang)}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={fetchWord("description_placeholder", lang)}
        classes="w-full"
        labelClassName="!text-black"
      />

      <div className="flex justify-center items-center flex-col">
        <FileUpload classes="min-h-[auto]  min-w-[340px] p-4 px-8 border border-primary" />
      </div>
      <div className="bg-[#f2f2f2] fixed bottom-0 left-0 w-full max-w-[575px] p-4">
        <Button
          classes="w-[270px] py-3 text-sm !w-full block"
          onClick={() => setSelectedTab(4)}
        >
          {fetchWord("next", lang)}{" "}
        </Button>
      </div>
    </div>
  );
};

export default RequestServicesFormUpload;
