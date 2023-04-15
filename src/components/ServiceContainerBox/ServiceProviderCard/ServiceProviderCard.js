import { Button } from "@/components/Global/Button/Button";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import { HeartIcon } from "@/components/Icons";
import RatingStars from "@/components/RatingStars/RatingStars";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const ServiceProviderCard = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  console.log(provider?.image);
  return (
    <div className="shadow rounded-xl p-4 flex gap-4 bg-white">
      <Image
        className="object-contain max-h-[140px] rounded-xl overflow-hidden"
        src={`${provider?.image}`}
        alt={provider?.name}
        height={160}
        width={150}
      />
      <div className="flex flex-1 justify-between gap-4">
        <div className="flex flex-col justify-between h-full">
          <h3 className="font-medium">{provider?.name}</h3>
          <RatingStars rating={provider?.rating} />
          <p className="font-medium flex text-lg">
            <span className="text-primary">{provider?.hourPrice}$</span>
            <span>/{fetchWord('hr', lang)}</span>
          </p>
        </div>
        <div className="flex justify-between flex-col items-end">
          <span className="scale-75 cursor-pointer">
            <HeartIcon
              className={
                provider?.favorite
                  ? "text-white bg-red-400 rounded-full"
                  : "text-[#979797]"
              }
            />
          </span>
          <PrimaryLink
            link={`/providers/${provider?.id}`}
            className="border-primary border-2 font-medium capitalize text-sm !bg-transparent !text-black"
          >
            {fetchWord("view_profile", lang)}
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
