import React from "react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/Icons";
import SocialCard from "@/components/SocialCard/SocialCard";

const TeamCard = ({ employee }) => {
  return (
    <div className="relative rounded-md overflow-hidden m-4">
      <Image
        className="!w-full !h-full object-cover scale-105"
        src={employee?.img}
        alt={employee?.name}
        height={400}
        width={330}
      />
      <div className="bg-[#ffc748bf] flex items-end absolute bottom-0 left-0 w-full p-2 px-4 m-x1 justify-between">
        <div className="text-sm">
          <p className="text-white">{employee?.position}</p>
          <h3>{employee?.name}</h3>
        </div>
        <SocialCard />
      </div>
    </div>
  );
};

export default TeamCard;
