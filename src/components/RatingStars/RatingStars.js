import React from "react";
import { StarIcon } from "../Icons";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        ?.map((rate, index) => (
          <StarIcon
            key={index}
            className={index < rating ? "text-yellow-500" : "text-gray-400"}
          />
        ))}
    </div>
  );
};

export default RatingStars;
