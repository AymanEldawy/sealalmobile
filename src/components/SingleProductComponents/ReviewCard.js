import React, { useContext } from "react";
import RatingStars from "../RatingStars/RatingStars";
import Image from "next/image";
import { CheckIcon } from "../Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

const ReviewCard = ({ review }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mb-4 rounded-md p-2 border border-gray-200 mt-8">
      <div className="flex gap-4 items-start">
        <Image
          src={review?.image}
          alt={review?.name}
          height={50}
          width={50}
          className="object-contain"
        />
        <div className="gap-2 relative flex-1">
          <h3 className="font-medium">{review?.name}</h3>
          <RatingStars rating={review?.rating} />
          <div className="flex gap-1 mt-2 items-center">
            <span className="bg-primary w-4 h-4 grid place-items-center rounded-full text-white">
              <CheckIcon className="w-[11px] h-[11px]" />
            </span>
            <span className="text-[#BDBDBD] text-sm">{fetchWord('confirmed_order', lang)}</span>
          </div>
          <span className="text-sm text-lead absolute text-xs top-0 ltr:right-2 rtl:left-2 ">{review?.date}</span>
        <p className="text-sm text-[#646464] mt-2">{review?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
