import Image from "next/image";
import React from "react";

const SubmitOfferCard = ({ offer }) => {
  return (
    <div className="flex gap-4 flex-col">
      <Image
        className="object-contain w-full max-w-full"
        src={offer?.image}
        alt={offer?.name}
        width={250}
        height={300}
      />
      <div className="flex flex-col gap-2 flex-1 items-start relative text-center">
        <h3 className="font-medium text-lg">{offer?.name}</h3>
        <div className="flex gap-2 justify-between w-full">
        <span className="text-secondary">#{offer?.offerNumber}</span>
        <p className="text-lead">{offer?.date}</p>
      </div>
      </div>
    </div>
  );
};

export default SubmitOfferCard;
