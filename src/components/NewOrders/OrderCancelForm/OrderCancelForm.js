import { TextField } from "@/components/Forms/TextField";
import { Button } from "@/components/Global/Button/Button";
import { CloseIcon } from "@/components/Icons";
import Modal from "@/components/Modal/Modal";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useState, useEffect, useContext, useRef } from "react";

const OrderCancelForm = ({ onClosePopup, onConfirmCancel, openCancelForm }) => {
  const { lang } = useContext(LanguageContext);
  const [reason, setReason] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <Modal
      open={openCancelForm}
      close={onClosePopup}
      title={<span className="text-red-500">{fetchWord("cancel", lang)}</span>}
      containerClassName="max-w-[575px] !items-end pb-12"
    >
      <TextField
        name={reason}
        onChange={(e) => setReason(e.target.value)}
        label={fetchWord("reason_label", lang)}
        placeholder={fetchWord("enter_here", lang)}
        classes="min-h-[230px] !w-full"
        ref={inputRef}
      />
      <Button
        classes="bg-secondary mx-auto px-8 w-[70%]"
        onClick={() => onConfirmCancel(reason)}
      >
        {fetchWord("send", lang)}
      </Button>
    </Modal>
  );
};

export default OrderCancelForm;
