import React from "react";
import RatingStars from "../RatingStars/RatingStars";
import Image from "next/image";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex gap-6 mb-8 rounded-[70px] p-6 bg-[#F9F9F9]">
      <Image
        src={review?.image}
        alt={review?.name}
        height={110}
        width={110}
        className="object-contain"
      />
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-2">
          <RatingStars rating={review?.rating} />
          <span className="text-sm text-lead">{review?.date}</span>
        </div>
        <h3 className="text-lg font-medium">{review?.name}</h3>
        <p className="text-lead">{review?.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
