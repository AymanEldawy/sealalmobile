import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext, useState } from "react";

import { FileUpload } from "../Forms/FileUpload";
import { InputField } from "../Forms/InputField";
import { TextField } from "../Forms/TextField";
import BackToHome from "../Global/BackToHome/BackToHome";
import { Button } from "../Global/Button/Button";
import { OfferEditIcon } from "../Icons";
import Modal from "../Modal/Modal";

const SubmitOfferForm = ({ operation }) => {
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(true);
  const [finalPrice, setFinalPrice] = useState("");
const [expectedTime, setExpectedTime] = useState("");
  const [howLongService, setHowLongService] = useState("");
  const [previousWorkPhoto, setPreviousWorkPhoto] = useState("");
  const [offerDetails, setOfferDetails] = useState("");
  const submit = (e) => {
    e.preventDefault()
    if (operation === "update") {
      console.log("update");
    } else {
      console.log("insert");
    }
  };
  return (
    <>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="flex flex-col gap-3 items-center ">
          <OfferEditIcon />
          <p className="text-primary">
            {fetchWord("offer_update_message", lang)}
          </p>
          <BackToHome />
          <button
            className="text-red-500 text-sm"
            onClick={() => setOpen(false)}
          >
            {fetchWord("cancel", lang)}
          </button>
        </div>
      </Modal>
      <form onSubmit={submit}>
        <InputField
          name="finalPrice"
          label={fetchWord("final_price", lang)}
          placeHolder=""
          value={finalPrice}
          onChange={(e) => setFinalPrice(e.target.value)}
          labelClassName="!text-black"
        />
        <InputField
          name="expectedTime"
          label={fetchWord("expected_time", lang)}
          placeHolder=""
          value={expectedTime}
          onChange={(e) => setExpectedTime(e.target.value)}
          labelClassName="!text-black"
        />
        <InputField
          name="howLongService"
          label={fetchWord("how_long_service", lang)}
          placeHolder=""
          value={howLongService}
          onChange={(e) => setHowLongService(e.target.value)}
          labelClassName="!text-black"
        />
        <FileUpload
          name="previousWorkPhoto"
          value={previousWorkPhoto}
          label={fetchWord("enter_photo", lang)}
          classes="bg-white border min-h-[120px]"
          onChange={(e) => setPreviousWorkPhoto(e.target.value)}
          labelClassName="!text-black"
        />
        <TextField
          name="offerDetails"
          value={offerDetails}
          label={fetchWord("offer_details_label", lang)}
          classes="bg-white border min-h-[50px] w-full"
          onChange={(e) => setOfferDetails(e.target.value)}
          labelClassName="!text-black"
        />
        <Button classes="mt-16 bg-secondary w-full block text-black min-w-[250px]">
          {fetchWord("send", lang)}
        </Button>
      </form>
    </>
  );
};

export default SubmitOfferForm;
