import Image from "next/image";
import React from "react";

const SubmitOfferCard = ({ offer }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        className="object-contain max-w-full"
        src={offer?.image}
        alt={offer?.name}
        width={400}
        height={480}
      />
      <div className="flex flex-col gap-3 flex-1 relative text-center">
        <h3 className="font-medium text-lg">{offer?.name}</h3>
        <span className="text-secondary text-sm">#{offer?.offerNumber}</span>
        <p className="text-lead text-sm">{offer?.date}</p>
      </div>
    </div>
  );
};

export default SubmitOfferCard;
