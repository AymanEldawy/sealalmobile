import RatingStars from "@/components/RatingStars/RatingStars";
import Image from "next/image";
import React from "react";

const TimeLineCard = ({ work }) => {
  return (
    <div className="mb-4 bg-white p-4 rounded-md w-full">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full border-2 border-gray-600"
            src={"/images/clients/Group 3.png"}
            alt={`client avatar`}
            height={50}
            width={50}
          />
          <div className="">
            <RatingStars rating={work?.rating} />
            <h3 className="text-lg font-medium">{work?.clientName}</h3>
          </div>
        </div>
        <span className="text-gray-600 text-sm">{work?.date}</span>
      </div>
      <p className="text-lead text-sm my-2">{work?.comment}</p>
      <div className="flex gap-4">
        {work?.images?.map((img, index) => (
          <Image
            className="rounded-md"
            src={img}
            key={index}
            alt={`gallery-${index}`}
            height={160}
            width={140}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLineCard;
