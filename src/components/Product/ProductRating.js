import { StarIcon } from "../Icons";

export const ProductRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill(0)
        ?.map((rate, index) => (
          <StarIcon
            key={index}
            className={index < rating ? "text-yellow-500" : "stroke-orange-50 text-gray-200"}
          />
        ))}
      <span className="text-xs mx-1 text-gray-500">
        ({rating})
      </span>
    </div>
  );
};

