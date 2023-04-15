import Image from "next/image";
import React from "react";

const SubmitOfferCard = ({ offer }) => {
  return (
    <div className="flex gap-4 ">
      <Image
        className="object-contain max-w-full"
        src={offer?.image}
        alt={offer?.name}
        width={250}
        height={300}
      />
      <div className="flex flex-col gap-3 flex-1 items-start relative text-center">
        <span className="text-secondary">#{offer?.offerNumber}</span>
        <h3 className="font-medium text-lg">{offer?.name}</h3>
        <p className="text-lead">{offer?.date}</p>
      </div>
    </div>
  );
};

export default SubmitOfferCard;
