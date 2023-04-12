import React from "react";

import { StarIcon } from "../Icons";

const RateForm = ({ rating, setRating }) => {
  return (
    <div className="flex justify-center w-full gap-1 mt-4">
      {Array(5)
        .fill(0)
        .map((r, index) => (
          <StarIcon
            key={`r-${index}`}
            className={`w-8 h-8 text-transparent stroke-[#979797] ${
              index + 1 <= rating ? "stroke-none !text-yellow-500" : ""
            }`}
            onClick={() => setRating(index + 1)}
          />
        ))}
    </div>
  );
};

export default RateForm;
