import { StarIcon } from "../Icons";

export const ProductRating = ({ rating, small }) => {
  return (
    <div className="flex items-center">
      {Array(5)
        .fill(0)
        ?.map((rate, index) => (
          <StarIcon
            key={index}
            className={`${small ? "!w-[15px] !h-[15px]" :""}  ${index < rating ? "text-yellow-500" : "stroke-orange-50 text-gray-200"}`}
          />
        ))}
      <span className={`${small ? "text-[10px]" : "text-xs"}  mx-1 text-gray-500"`}>
        ({rating})
      </span>
    </div>
  );
};

