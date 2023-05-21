import React from "react";

const BannerTitle = ({ title }) => {
  return (
    <h1 className="bg-primary text-white h-24 flex items-center justify-center text-3xl">
      {title}
    </h1>
  );
};

export default BannerTitle;
