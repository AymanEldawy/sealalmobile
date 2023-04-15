import React from "react";

const ServiceCardBox = ({ service }) => {
  return (
    <div className="pt-8">
      <h3 className="mb-6 flex gap-2 items-center">
        <span>{service?.icon}</span>
        {service?.name}
      </h3>
      <p className="text-lead text-sm">
        {service?.description}
      </p>
    </div>
  );
};

export default ServiceCardBox;
