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
      <div className="shadow-inner p-4 py-8 -mx-4">
        <button type="button" className=" flex gap-2 items-center">
          <span className="text-white bg-primary rounded-md p-2">
            <PlusIcon />
          </span>
          {fetchWord("add_picture", lang)}
        </button>
        <div className="flex justify-center items-center flex-col mt-8">
          <FileUpload classes="min-h-[auto]  min-w-[340px] p-4 px-8 border border-primary" />
          <button type="button" className="text-primary">
            {fetchWord("camera_capture", lang)}{" "}
          </button>
        </div>
      </div>
      <div className="shadow-inner -mx-4 mt- h-[4px]" />
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
