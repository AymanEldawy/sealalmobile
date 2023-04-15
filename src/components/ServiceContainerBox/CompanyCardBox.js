import Image from "next/image";
import React from "react";

const CompanyCardBox = ({ company }) => {
  return (
    <div className="p-2">
      <div className="shadow text-center p-3 rounded-md bg-white">
        <Image
        className="block mx-auto"
          src={company?.image}
          alt={company?.name}
          height={80}
          width={80}
        />
        <h3 className="text-sm ">{company?.name}</h3>
      </div>
    </div>
  );
};

export default CompanyCardBox;
