import Image from "next/image";
import React from "react";

import RatingStars from "../RatingStars/RatingStars";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex items-start gap-2 xs:gap-4 mb-4 xs:mb-4 rounded-lg xs:rounded-[70px] p-2 xs:p-4 bg-[#F9F9F9]">
      <Image
        src={review?.image}
        alt={review?.name}
        height={80}
        width={80}
        className="object-contain  xs:h-24 xs:w-24"
      />
      <div className="flex-1 px-1 ltr:xs:pr-4 rtl:xs:pl-4">
        <div className="flex justify-between items-center xs:mb-2">
          <RatingStars rating={review?.rating} />
          <span className="text-xs xs:text-sm text-lead">{review?.date}</span>
        </div>
        <h3 className="text-base xs:text-lg font-medium mb-2">{review?.name}</h3>
        <p className="text-lead">{review?.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
