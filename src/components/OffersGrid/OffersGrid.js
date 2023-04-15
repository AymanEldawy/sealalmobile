import React from "react";

import OfferCard from "../OfferCard/OfferCard";

const OffersGrid = ({ offers, previousStage }) => {
  return (
    <div className="flex flex-col gap-4">
      {offers?.map((offer) => (
        <OfferCard key={offer?.offerNumber} offer={offer} hideButton={previousStage} />
      ))}
    </div>
  );
};

export default OffersGrid;
