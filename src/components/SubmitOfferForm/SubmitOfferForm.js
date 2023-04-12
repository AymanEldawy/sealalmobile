import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";
import { InputField } from "../Forms/InputField";
import { FileUpload } from "../Forms/FileUpload";
import { TextField } from "../Forms/TextField";
import { Button } from "../Global/Button/Button";
import Link from "next/link";
import Modal from "../Modal/Modal";
import { OfferEditIcon } from "../Icons";
import BackToHome from "../Global/BackToHome/BackToHome";

const SubmitOfferForm = ({ operation }) => {
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(true);
  const [finalPrice, setFinalPrice] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const [howLongService, setHowLongService] = useState("");
  const [previousWorkPhoto, setPreviousWorkPhoto] = useState("");
  const [offerDetails, setOfferDetails] = useState("");
  const submit = () => {
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
        <div className="grid md:grid-cols-2 gap-4">
          <InputField
            name="finalPrice"
            label={fetchWord("final_price", lang)}
            placeHolder=""
            value={finalPrice}
            onChange={(e) => setFinalPrice(e.target.value)}
          />
          <InputField
            name="expectedTime"
            label={fetchWord("expected_time", lang)}
            placeHolder=""
            value={expectedTime}
            onChange={(e) => setExpectedTime(e.target.value)}
          />
          <InputField
            name="howLongService"
            label={fetchWord("how_long_service", lang)}
            placeHolder=""
            value={howLongService}
            onChange={(e) => setHowLongService(e.target.value)}
          />
          <FileUpload
            name="previousWorkPhoto"
            value={previousWorkPhoto}
            label={fetchWord("enter_photo", lang)}
            classes="bg-white border min-h-[50px]"
            onChange={(e) => setPreviousWorkPhoto(e.target.value)}
          />
        </div>
        <TextField
          name="offerDetails"
          value={offerDetails}
          label={fetchWord("offer_details_label", lang)}
          classes="bg-white border min-h-[50px]"
          onChange={(e) => setOfferDetails(e.target.value)}
        />
        <div className="flex flex-col gap-4 justify-center items-center">
          <Button classes="bg-secondary text-black min-w-[250px] text-sm">
            {fetchWord("send", lang)}
          </Button>
          <Link href="/offers" className="text-sm">
            {fetchWord("more_offers", lang)}
          </Link>
        </div>
      </form>
    </>
  );
};

export default SubmitOfferForm;
