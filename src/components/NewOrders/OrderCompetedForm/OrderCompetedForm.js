import { TextField } from "@/components/Forms/TextField";
import { Button } from "@/components/Global/Button/Button";
import { CloseIcon, LampIcon } from "@/components/Icons";
import Modal from "@/components/Modal/Modal";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";

const OrderCompetedForm = ({
  onClosePopup,
  onConfirmDone,
  openCompetedForm,
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <Modal
      open={openCompetedForm}
      close={onClosePopup}
      title={<span className="text-green-500">{fetchWord("done", lang)}</span>}
    >
      <div className="flex flex-col w-full md:min-w-[450px] max-w-[550px]">
        <div className="flex flex-col items-center gap-6 p-12">
          <LampIcon />
          <p className="text-[#061432]">{fetchWord("job_done_msg", lang)}</p>
          <Button
            classes="bg-secondary mx-auto px-8 w-[50%]"
            onClick={() => onConfirmDone()}
          >
            {fetchWord("confirm", lang)}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default OrderCompetedForm;
