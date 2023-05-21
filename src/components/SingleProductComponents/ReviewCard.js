import React, { useContext } from "react";
import RatingStars from "../RatingStars/RatingStars";
import Image from "next/image";
import { CheckIcon } from "../Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const ReviewCard = ({ review }) => {
  const {lang} = useContext(LanguageContext)
  return (
    <div className="flex gap-8 mb-4 rounded-md p-2 border border-gray-200 mt-8">
      <Image
        src={review?.image}
        alt={review?.name}
        height={70}
        width={70}
        className="object-contain -translate-y-8 -mx-4"
      />
      <div className="flex-1 flex gap-4 px-2 rtl:pl-4 ltr:pr-4 py-3">
        <div className="flex flex-col gap-2">
          <RatingStars rating={review?.rating} />
          <h3 className="font-medium">{review?.name}</h3>
          <span className="text-sm text-lead">{review?.date}</span>
        </div>
        <div className="h-full w-[1px] bg-gray-200" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="bg-primary p-1 w-5 h-5 grid place-items-center rounded-full text-white">
              <CheckIcon className="w-3 h-3"/>
            </span>
            <span className="text-[#BDBDBD] text-sm">{fetchWord('confirmed_order', lang)}</span>
          </div>
          <p className="text-sm text-[#646464] px-4">{review?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
