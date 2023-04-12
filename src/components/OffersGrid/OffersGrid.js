import React from "react";

import OfferCard from "../OfferCard/OfferCard";

const OffersGrid = ({ offers, previousStage }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {offers?.map((offer) => (
        <OfferCard key={offer?.offerNumber} offer={offer} hideButton={previousStage} />
      ))}
    </div>
  );
};

export default OffersGrid;
