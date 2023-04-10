import React from "react";
import { CallSolidIcon, MapSolidIcon, MessageSolidIcon } from "../Icons";

const info = [
  { icon: <CallSolidIcon />, text: "+1 (234) 567-89-00", label: "phone" },
  { icon: <MessageSolidIcon />, text: "info@agency.com", label: "email" },
  {
    icon: <MapSolidIcon />,
    text: "2247 Lunetta Street, TX 76301",
    label: "address",
  },
];
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      {info?.map((item) => (
        <div className="even:bg-gray-200 odd:border odd:border-blue-500 rounded px-8 py-6" key={item?.text}>
          <div className="flex gap-6 items-center mb-4">
            <span className="w-16 h-16 flex justify-center items-center rounded-full bg-primary">{item?.icon}</span>
            <h3 className="text-secondary capitalize font-medium text-lg">{item?.label}</h3>
          </div>
          <p>{item?.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
