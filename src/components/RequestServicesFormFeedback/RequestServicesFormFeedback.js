import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

import { FeedbackIcon } from "../Icons";
import Modal from "../Modal/Modal";
import RateForm from "../RateForm/RateForm";
import { TextField } from "../Forms/TextField";
import { Button } from "../Global/Button/Button";

const RequestServicesFormFeedback = ({
  onFeedbackSubmit,
  openFormFeedback,
  setOpenFormFeedback,
}) => {
  const { lang } = useContext(LanguageContext);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (rating && comment) {
      onFeedbackSubmit({ rating, comment });
      setOpenFormFeedback(false);
      setComment("");
      setRating(0);
    }
  };
  return (
    <Modal
      open={openFormFeedback}
      close={() => setOpenFormFeedback(false)}
      title={<span>{fetchWord("add_feedback", lang)}</span>}
    >
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-1 min-w-[250px] md:min-w-[500px] items-center pb-8"
      >
        <FeedbackIcon />
        <RateForm rating={rating} setRating={setRating} />
        <TextField
          classes="min-w-full"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          label={fetchWord("add_comment", lang)}
          placeholder={fetchWord("enter_here", lang)}
        />
        <Button classes="bg-secondary text-black min-w-[250px] text-sm">
          {fetchWord("send", lang)}
        </Button>
      </form>
    </Modal>
  );
};

export default RequestServicesFormFeedback;
